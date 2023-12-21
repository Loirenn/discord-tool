"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteMessage = void 0;
function DeleteMessage(message, time) {
    setTimeout(() => {
        message.delete();
    }, time);
}
exports.DeleteMessage = DeleteMessage;
;
