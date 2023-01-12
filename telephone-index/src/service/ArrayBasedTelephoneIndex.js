"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class ArrayBasedTelephoneIndex {
    searchByQuickIndexItem(item) {
        let entries = Array();
        if (item === 'A') {
            entries.push({
                name: "Adamson, Phil"
            });
        }
        return {
            entries: entries,
            count: entries.length
        };
    }
}
exports.default = ArrayBasedTelephoneIndex;
