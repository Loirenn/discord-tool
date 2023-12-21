import { Client } from "discord.js";
import { IAntiCrashOptions } from "../interfaces";
export declare class AntiCrash {
    client: Client;
    options: IAntiCrashOptions;
    constructor(client: Client, options?: IAntiCrashOptions);
    private logger;
    private _antiCrasher;
}
