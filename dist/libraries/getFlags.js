"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetFlags = void 0;
const discord_js_1 = require("discord.js");
function GetFlags(flags) {
    const flagsArray = [];
    for (const flag in discord_js_1.UserFlags) {
        if (flags.has(flag)) {
            flagsArray.push(flag);
        }
        ;
    }
    ;
    return flagsArray;
}
exports.GetFlags = GetFlags;
;
