import names from "../config/names.json";

interface ITraderDetails {
    FullName?: string;
    FirstName?: string;
    Nickname?: string;
    Location?: string;
    Description?: string;
}

interface ITraderNames {
    Prapor?: string | ITraderDetails;
    Therapist?: string | ITraderDetails;
    Fence?: string | ITraderDetails;
    Skier?: string | ITraderDetails;
    Peacekeeper?: string | ITraderDetails;
    Mechanic?: string | ITraderDetails;
    Ragman?: string | ITraderDetails;
    Jaeger?: string | ITraderDetails;
    Lightkeeper?: string | ITraderDetails;
    "BTR Driver"?: string | ITraderDetails;
    Ref?: string | ITraderDetails;
    [key: string]: string | ITraderDetails;
}

export const NAMES: ITraderNames = names;
