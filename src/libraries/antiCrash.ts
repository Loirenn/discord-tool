import { Client, ClientApplication } from "discord.js";
import { IAntiCrashOptions } from "../interfaces";
import { ConsoleColors } from "../consoleColors";

export class AntiCrash {
    public client: Client;
    public options: IAntiCrashOptions;

    constructor(client: Client, options?: IAntiCrashOptions) {
        this.client = client;
        this.options = options;

        client.on('ready', () => {
            this._antiCrasher();
        });
    };

    private logger(message: string) {
        const { logger, disableLoggerColors } = this.options ?? {};
        const prefix = disableLoggerColors === true ? '[discord-tool]' : ConsoleColors.fg.yellow + '[discord-tool]' + ConsoleColors.reset;
        const color = disableLoggerColors === true ? '' : ConsoleColors.fg.cyan;
        const reset = disableLoggerColors === true ? '' : ConsoleColors.reset;

        if (logger === false) return;
        return console.log(`${prefix} ${color}${message}${reset}`);
    };

    private _antiCrasher() {
        const { isDisabled } = this.options ?? {};
        if (isDisabled === true) return;

        this.logger('AntiCrasher is running...');

        process.on('uncaughtException', (reason, promise) => {
            this.logger(`Uncaught Exception ${reason}`);
        });

        process.on('unhandledRejection', (reason, promise) => {
            this.logger(`Unhandled Rejection ${reason}`);
        });

        process.on('uncaughtExceptionMonitor', (err, origin) => {
            this.logger(`Uncaught Exception Monitor ${err} ${origin}`);
        });

        process.on('warning', (warning) => {
            this.logger(`Warning ${warning}`);
        });
    };
};