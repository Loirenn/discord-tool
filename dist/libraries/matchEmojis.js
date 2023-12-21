"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MatchEmojis = void 0;
const emojiRegex_1 = require("../emojiRegex");
function MatchEmojis(text) {
    const normalEmojis = (0, emojiRegex_1.EmojiRegex)();
    const guildEmojis = /<a?:[a-zA-Z0-9_]+:[0-9]+>/g;
    const result = [];
    if (text.match(normalEmojis)) {
        result.push(...text.match(normalEmojis));
    }
    ;
    if (text.match(guildEmojis)) {
        result.push(...text.match(guildEmojis));
    }
    ;
    return result;
}
exports.MatchEmojis = MatchEmojis;
;
