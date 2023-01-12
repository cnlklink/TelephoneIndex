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
    fillWithTestData() {
        this.createEntryWithFirstLast("Adam", "Apple");
        this.createEntryWithFirstLast("Bob", "Brown");
        this.createEntryWithFirstLast("Billy", "Blueberry");
    }
    searchByQuickIndexItem(item) {
        let filterByFirstLetterInLastName = new RegExp(`^[${item}]`, "i");
        let resultEntries = this._entries.filter((entry) => {
            return entry.name.match(filterByFirstLetterInLastName);
        });
        return {
            entries: resultEntries,
            count: resultEntries.length
        };
    }
}
exports.default = ArrayBasedTelephoneIndex;
