"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class ArrayBasedTelephoneIndex {
    searchByQuickIndexItem(item) {
        let count = 0;
        if (item === 'A') {
            count = 1;
        }
        return {
            entries: Array(),
            count: count
        };
    }
}
exports.default = ArrayBasedTelephoneIndex;
