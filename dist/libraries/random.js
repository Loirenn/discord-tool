"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Random = void 0;
class Random {
    static number(min, max) {
        return Math.floor(Math.random() * (max - min + 1) + min);
    }
    ;
    static array(array) {
        return array[Math.floor(Math.random() * array.length)];
    }
    ;
}
exports.Random = Random;
;
