import { DependencyContainer } from "tsyringe";

import { ITraderBase } from "@spt/models/eft/common/tables/ITrader";
import { IPostDBLoadMod } from "@spt/models/external/IPostDBLoadMod";
import { ILogger } from "@spt/models/spt/utils/ILogger";
import { ImageRouter } from "@spt/routers/ImageRouter";
import { DatabaseService } from "@spt/services/DatabaseService";
import { LocaleService } from "@spt/services/LocaleService";
import { FileSystemSync } from "@spt/utils/FileSystemSync";
import path from "path";

import { lang as LANG } from "../config/lang.json";
import { NAMES } from "./names";


class Mod implements IPostDBLoadMod {
    public postDBLoad(container: DependencyContainer): void {
        const logger = container.resolve<ILogger>("WinstonLogger");
        const db = container.resolve<DatabaseService>("DatabaseService");
        const localeService = container.resolve<LocaleService>("LocaleService");

        const locales = db.getLocales();
        let nameLoc = localeService.getLocaleDb();
        if (LANG !== "system") {
            const loc = locales.global[LANG];
            if (loc) {
                nameLoc = loc;
            } else {
                logger.warning(`[TraderNamer] Invalid locale "${LANG}", falling back to system.`);
            }
        }

        // up to 3 entries per trader: ID, Nickname, Avatar ID
        const traders: Record<string, ITraderBase> = {};
        Object.values(db.getTraders()).forEach((trader) => {
            const id = trader.base._id;
            const nick = nameLoc[`${id} Nickname`];
            // older traders like Prapor/Therapist have mismatched ID and avatar ID
            // this is mostly for compatibility with other avatar switcher mods
            const avatar = trader.base.avatar.split('.')[0].split('/').at(-1);
            traders[id] = traders[nick] = traders[avatar] = trader.base;
        });

        const fileSystem = container.resolve<FileSystemSync>("FileSystemSync");
        const imageRouter = container.resolve<ImageRouter>("ImageRouter");
        const imagesPath = path.resolve(__dirname, "../avatars");

        for (const image of fileSystem.getFiles(imagesPath)) {
            // getFiles gives names with leading ‘/’
            const nameOrId = image.split(".")[0].substring(1);
            const trader = traders[nameOrId];

            if (!trader) {
                logger.info(`[TraderNamer] ${nameOrId} does not exist, not changing avatar.`);
                continue;
            }

            const nick = nameLoc[`${trader._id} Nickname`] || trader.nickname || nameOrId;
            logger.info(`[TraderNamer] Changing ${nick}'s avatar.`);

            const avatarRouteNoExt = trader.avatar.split(".")[0];
            const imagePath = path.join(imagesPath, image);
            imageRouter.addRoute(avatarRouteNoExt, imagePath);
        }

        for (const [nameOrId, newName] of Object.entries(NAMES)) {
            const trader = traders[nameOrId];
            var details = newName;
            if ((typeof newName) === "string") {
                details = { Nickname: newName as string }
            }

            if (!trader) {
                logger.info(`[TraderNamer] ${nameOrId} does not exist, not changing name.`);
                continue;
            }

            const nick = nameLoc[`${trader._id} Nickname`] || trader.nickname || nameOrId;
            for (const [key, value] of Object.entries(details)) {
                logger.info(`[TraderNamer] Changing ${nick}'s ${key} to ${value}`);
            }

            for (const locale of Object.values(locales.global)) {
                for (const [detail, value] of Object.entries(details)) {
                    locale[`${trader._id} ${detail}`] = value;
                }
            }
        }
    }
}

export const mod = new Mod();
