"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MessageFinder = void 0;
async function MessageFinder(message, content, options) {
    if (!message.channel.isTextBased())
        throw new Error("Channel is not text based.");
    const channel = message.channel;
    const messages = options.limit ? await channel.messages.fetch({ limit: options.limit }) : await channel.messages.fetch();
    let foundMessage = [];
    if (options.caseSensitive) {
        if (options.include) {
            foundMessage = messages.filter(a => a.content.includes(content)).map(msg => {
                return msg;
            });
        }
        else {
            foundMessage = messages.filter(a => a.content === content).map(msg => {
                return msg;
            });
        }
        ;
    }
    else {
        if (options.include) {
            foundMessage = messages.filter(a => a.content.toLowerCase().includes(content.toLowerCase())).map(msg => {
                return msg;
            });
        }
        else {
            foundMessage = messages.filter(a => a.content.toLowerCase() === content.toLowerCase()).map(msg => {
                return msg;
            });
        }
        ;
    }
    ;
    if (foundMessage.length === 0)
        return null;
    return foundMessage;
}
exports.MessageFinder = MessageFinder;
;
