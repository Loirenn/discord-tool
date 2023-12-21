"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CheckURL = void 0;
const urlRegex_1 = require("../urlRegex");
function CheckURL(text) {
    return urlRegex_1.URLRegex.test(text);
}
exports.CheckURL = CheckURL;
;
