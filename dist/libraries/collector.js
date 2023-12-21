"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Collector = void 0;
class Collector {
    channel;
    message;
    componentType;
    options;
    constructor(channel, message, componentType, options) {
        this.channel = channel;
        this.message = message;
        this.componentType = componentType;
        this.options = options;
    }
    ;
    async run() {
        // ...
    }
    ;
    async end() {
    }
    ;
}
exports.Collector = Collector;
;
