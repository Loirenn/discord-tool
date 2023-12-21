"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CheckInvite = void 0;
const inviteRegex_1 = require("../inviteRegex");
function CheckInvite(text) {
    return inviteRegex_1.InviteRegex.test(text);
}
exports.CheckInvite = CheckInvite;
;
