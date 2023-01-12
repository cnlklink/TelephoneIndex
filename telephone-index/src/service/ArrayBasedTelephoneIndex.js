"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class ArrayBasedTelephoneIndex {
    searchByQuickIndexItem(item) {
        let entries = Array();
        if (item === 'A') {
            entries.push({
                name: "Apple, Adam"
            });
        }
        else if (item === 'B') {
            entries.push({
                name: "Brown, Bob"
            }, {
                name: "Blueberry, Billy"
            });
        }
        return {
            entries: entries,
            count: entries.length
        };
    }
}
exports.default = ArrayBasedTelephoneIndex;
