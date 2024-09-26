"use strict";
/**
 * Copyright: jbs4bmx, revingly
*/
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const tsyringe_1 = require("C:/snapshot/project/node_modules/tsyringe");
const jsonc_1 = require("C:/snapshot/project/node_modules/jsonc");
const path_1 = __importDefault(require("path"));
const logger = tsyringe_1.container.resolve("WinstonLogger");
const imageRouter = tsyringe_1.container.resolve("ImageRouter");
const preSptModLoader = tsyringe_1.container.resolve("PreSptModLoader");
class TraderPics {
    container;
    pkg;
    path = require('path');
    modName = this.path.basename(this.path.dirname(__dirname.split('/').pop()));
    fs = require('fs');
    /*
    public async postDBLoad(container: DependencyContainer): Promise<void> {
        this.pkg = require("../package.json");
        const vfs = container.resolve<VFS>("VFS");
        const { extension, updateAllTraders } = jsonc.parse(vfs.readFile(path.resolve(__dirname, "../config.jsonc")));
        const filepath = `${preSptModLoader.getModPath(this.modName)}res/`;

        this.fs.readdir(filepath, (err, files) => {
            if ( updateAllTraders ) {
                files.forEach(file => {
                    const traderName = file.split('/').pop().split('.').shift()
                        logger.log(`Updating trader image: ${traderName}`, LogTextColor.BLUE)
                        imageRouter.addRoute(`/files/trader/avatar/${traderName}`,`${filepath}${traderName}.${extension}`);
                });
            }
        });
        logger.info(`${this.pkg.author}-${this.pkg.name} v${this.pkg.version}:Cached Successfully`);
    }
    */
    postSptLoad(container) {
        this.pkg = require("../package.json");
        const vfs = container.resolve("VFS");
        const { extension, updateAllTraders, updatePrapor, updateTherapist, updateFence, updateSkier, updatePeacekeeper, updateMechanic, updateRagman, updateJaeger, updateLightKeeper, updateBTRDriver, updateRef, AIOTrader, AKGuy, AnastasiaSvetlana, ARSHoppe, Bootlegger, DRIP, GearGal, GoblinKing, Gunsmith, IProject, KatarinaBlack, KeyMaster, MFACShop, Priscilu, Questor, TheBroker } = jsonc_1.jsonc.parse(vfs.readFile(path_1.default.resolve(__dirname, "../config.jsonc")));
        const filepath = `${preSptModLoader.getModPath(this.modName)}res/`;
        // Future implementation of image type selection.
        /*
        if ( traderSelection.Anime ) {
            const filepath = `${preSptModLoader.getModPath(this.modName)}res/anime/`;
        }
        if ( traderSelection.Realistic ) {
            const filepath = `${preSptModLoader.getModPath(this.modName)}res/real/`;
        }
        if ( traderSelection.StableDiffusion ) {
            const filepath = `${preSptModLoader.getModPath(this.modName)}res/stable/`;
        }
        */
        this.fs.readdir(filepath, (err, files) => {
            files.forEach(file => {
                const traderName = file.split('/').pop().split('.').shift();
                //const fileName = file.split('/').pop()
                if (updateAllTraders) {
                    // Updates all supported traders, both default and mod traders.
                    imageRouter.addRoute(`/files/trader/avatar/${traderName}`, `${filepath}${traderName}.${extension}`);
                    // The following code is for a future implementation that is extension independent.
                    //imageRouter.addRoute(`/files/trader/avatar/${traderName}`,`${filepath}${path.sep}${fileName}`);
                }
                else {
                    // Updates only the selected traders as supported by this mod.
                    if (updatePrapor) {
                        if (traderName === "59b91ca086f77469a81232e4") {
                            imageRouter.addRoute(`/files/trader/avatar/${traderName}`, `${filepath}${traderName}.${extension}`);
                        }
                    }
                    if (updateTherapist) {
                        if (traderName === "59b91cab86f77469aa5343ca") {
                            imageRouter.addRoute(`/files/trader/avatar/${traderName}`, `${filepath}${traderName}.${extension}`);
                        }
                    }
                    if (updateFence) {
                        if (traderName === "579dc571d53a0658a154fbec") {
                            imageRouter.addRoute(`/files/trader/avatar/${traderName}`, `${filepath}${traderName}.${extension}`);
                        }
                    }
                    if (updateSkier) {
                        if (traderName === "59b91cb486f77469a81232e5") {
                            imageRouter.addRoute(`/files/trader/avatar/${traderName}`, `${filepath}${traderName}.${extension}`);
                        }
                    }
                    if (updatePeacekeeper) {
                        if (traderName === "59b91cbd86f77469aa5343cb") {
                            imageRouter.addRoute(`/files/trader/avatar/${traderName}`, `${filepath}${traderName}.${extension}`);
                        }
                    }
                    if (updateMechanic) {
                        if (traderName === "5a7c2ebb86f7746e324a06ab") {
                            imageRouter.addRoute(`/files/trader/avatar/${traderName}`, `${filepath}${traderName}.${extension}`);
                        }
                    }
                    if (updateRagman) {
                        if (traderName === "5ac3b86a86f77461491d1ad8") {
                            imageRouter.addRoute(`/files/trader/avatar/${traderName}`, `${filepath}${traderName}.${extension}`);
                        }
                    }
                    if (updateJaeger) {
                        if (traderName === "5c06531a86f7746319710e1b") {
                            imageRouter.addRoute(`/files/trader/avatar/${traderName}`, `${filepath}${traderName}.${extension}`);
                        }
                    }
                    if (updateLightKeeper) {
                        if (traderName === "638f541a29ffd1183d187f57") {
                            imageRouter.addRoute(`/files/trader/avatar/${traderName}`, `${filepath}${traderName}.${extension}`);
                        }
                    }
                    if (updateBTRDriver) {
                        if (traderName === "656f0f98d80a697f855d34b1") {
                            imageRouter.addRoute(`/files/trader/avatar/${traderName}`, `${filepath}${traderName}.${extension}`);
                        }
                    }
                    if (updateRef) {
                        if (traderName === "6617beeaa9cfa777ca915b7c") {
                            imageRouter.addRoute(`/files/trader/avatar/${traderName}`, `${filepath}${traderName}.${extension}`);
                        }
                    }
                    if (AIOTrader) {
                        if (traderName === "aiotrader") {
                            imageRouter.addRoute(`/files/trader/avatar/${traderName}`, `${filepath}${traderName}.${extension}`);
                        }
                        if (traderName === "blueheadtrader") {
                            imageRouter.addRoute(`/files/trader/avatar/${traderName}`, `${filepath}${traderName}.${extension}`);
                        }
                    }
                    if (AKGuy) {
                        if (traderName === "AKGUY") {
                            imageRouter.addRoute(`/files/trader/avatar/${traderName}`, `${filepath}${traderName}.${extension}`);
                        }
                    }
                    if (AnastasiaSvetlana) {
                        if (traderName === "Anastasia") {
                            imageRouter.addRoute(`/files/trader/avatar/${traderName}`, `${filepath}${traderName}.${extension}`);
                        }
                        if (traderName === "Svetlana") {
                            imageRouter.addRoute(`/files/trader/avatar/${traderName}`, `${filepath}${traderName}.${extension}`);
                        }
                    }
                    if (ARSHoppe) {
                        if (traderName === "armalite") {
                            imageRouter.addRoute(`/files/trader/avatar/${traderName}`, `${filepath}${traderName}.${extension}`);
                        }
                    }
                    if (Bootlegger) {
                        if (traderName === "bootlegger") {
                            imageRouter.addRoute(`/files/trader/avatar/${traderName}`, `${filepath}${traderName}.${extension}`);
                        }
                    }
                    if (DRIP) {
                        if (traderName === "moron") {
                            imageRouter.addRoute(`/files/trader/avatar/${traderName}`, `${filepath}${traderName}.${extension}`);
                        }
                    }
                    if (GearGal) {
                        if (traderName === "GearGal") {
                            imageRouter.addRoute(`/files/trader/avatar/${traderName}`, `${filepath}${traderName}.${extension}`);
                        }
                    }
                    if (GoblinKing) {
                        if (traderName === "GoblinKing") {
                            imageRouter.addRoute(`/files/trader/avatar/${traderName}`, `${filepath}${traderName}.${extension}`);
                        }
                    }
                    if (Gunsmith) {
                        if (traderName === "gunsmith") {
                            imageRouter.addRoute(`/files/trader/avatar/${traderName}`, `${filepath}${traderName}.${extension}`);
                        }
                    }
                    if (IProject) {
                        if (traderName === "PRTS") {
                            imageRouter.addRoute(`/files/trader/avatar/${traderName}`, `${filepath}${traderName}.${extension}`);
                        }
                    }
                    if (KatarinaBlack) {
                        if (traderName === "kat") {
                            imageRouter.addRoute(`/files/trader/avatar/${traderName}`, `${filepath}${traderName}.${extension}`);
                        }
                        if (traderName === "sepi1") {
                            imageRouter.addRoute(`/files/trader/avatar/${traderName}`, `${filepath}${traderName}.${extension}`);
                        }
                    }
                    if (KeyMaster) {
                        if (traderName === "keymaster") {
                            imageRouter.addRoute(`/files/trader/avatar/${traderName}`, `${filepath}${traderName}.${extension}`);
                        }
                    }
                    if (MFACShop) {
                        if (traderName === "MFAC") {
                            imageRouter.addRoute(`/files/trader/avatar/${traderName}`, `${filepath}${traderName}.${extension}`);
                        }
                    }
                    if (Priscilu) {
                        if (traderName === "Priscilu") {
                            imageRouter.addRoute(`/files/trader/avatar/${traderName}`, `${filepath}${traderName}.${extension}`);
                        }
                    }
                    if (Questor) {
                        if (traderName === "questor") {
                            imageRouter.addRoute(`/files/trader/avatar/${traderName}`, `${filepath}${traderName}.${extension}`);
                        }
                    }
                    if (TheBroker) {
                        if (traderName === "broker_portrait1") {
                            imageRouter.addRoute(`/files/trader/avatar/${traderName}`, `${filepath}${traderName}.${extension}`);
                        }
                    }
                }
            });
        });
        logger.info(`${this.pkg.author}-${this.pkg.name} v${this.pkg.version}:Cached Successfully`);
    }
}
module.exports = { mod: new TraderPics() };
//# sourceMappingURL=altPics.js.map