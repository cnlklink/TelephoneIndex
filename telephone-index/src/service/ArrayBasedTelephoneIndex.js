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
        let regExp = new RegExp(`^[${item}]`, "i");
        let resultEntries = this._entries.filter((entry) => {
            return entry.name.match(regExp);
        });
        return {
            entries: resultEntries,
            count: resultEntries.length
        };
    }
}
exports.default = ArrayBasedTelephoneIndex;
