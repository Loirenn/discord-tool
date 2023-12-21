"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.keyGenerator = void 0;
function keyGenerator(length = 5, options) {
    let result = '';
    const characters = options.keywords ? options.keywords : options.special_characters ? 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+' : 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const charactersLength = characters.length;
    for (let i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    ;
    return result;
}
exports.keyGenerator = keyGenerator;
;
