"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class ArrayBasedTelephoneIndex {
    constructor() {
        this._entries = [];
    }
    createEntryWithFirstLast(firstName, lastName) {
        let newEntry = {
            name: lastName + ", " + firstName
        };
        this._entries.push(newEntry);
        return newEntry;
    }
    searchByQuickIndexItem(item) {
        return {
            entries: this._entries,
            count: this._entries.length
        };
    }
}
exports.default = ArrayBasedTelephoneIndex;
