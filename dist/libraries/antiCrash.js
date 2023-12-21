"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AntiCrash = void 0;
const consoleColors_1 = require("../consoleColors");
class AntiCrash {
    client;
    options;
    constructor(client, options) {
        this.client = client;
        this.options = options;
        client.on('ready', () => {
            this._antiCrasher();
        });
    }
    ;
    logger(message) {
        const { logger, disableLoggerColors } = this.options ?? {};
        const prefix = disableLoggerColors === true ? '[discord-tool]' : consoleColors_1.ConsoleColors.fg.yellow + '[discord-tool]' + consoleColors_1.ConsoleColors.reset;
        const color = disableLoggerColors === true ? '' : consoleColors_1.ConsoleColors.fg.cyan;
        const reset = disableLoggerColors === true ? '' : consoleColors_1.ConsoleColors.reset;
        if (logger === false)
            return;
        return console.log(`${prefix} ${color}${message}${reset}`);
    }
    ;
    _antiCrasher() {
        const { isDisabled } = this.options ?? {};
        if (isDisabled === true)
            return;
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
    }
    ;
}
exports.AntiCrash = AntiCrash;
;
