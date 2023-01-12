"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const chai_1 = require("chai");
const ArrayBasedTelephoneIndex_1 = __importDefault(require("../telephone-index/src/service/ArrayBasedTelephoneIndex"));
describe("ArrayBasedTelephoneIndex unit-tests", () => {
    let _telephoneIndex;
    beforeEach(() => {
        _telephoneIndex = new ArrayBasedTelephoneIndex_1.default();
        _telephoneIndex.fillWithTestData();
    });
    it("searchByQuickIndexItem should return 1 result for 'A'", () => {
        // Given the index contains an entry for 'Apple, Adam'
        // When I searchByQuickIndexItem with 'A'
        let results = _telephoneIndex.searchByQuickIndexItem("A");
        // Then the results contain only 1 result for "Adamson, Phil"
        _assertSearchResultsContainsNItems(results, 1);
        _assertSearchResultsContainsName(results, 'Apple, Adam');
    });
    it("searchByQuickIndexItem should return 2 results for 'B'", () => {
        // Given the index contains entries for two people with a last name that starts with 'B'
        // When I searchByQuickIndexItem with 'B'
        let results = _telephoneIndex.searchByQuickIndexItem("B");
        // Then the results contain 2 items...
        _assertSearchResultsContainsNItems(results, 2);
        _assertSearchResultsContainsName(results, 'Brown, Bob');
        _assertSearchResultsContainsName(results, 'Blueberry, Billy');
    });
});
function _assertSearchResultsContainsNItems(results, containsNItems) {
    chai_1.assert.equal(containsNItems, results.count);
}
function _assertSearchResultsContainsName(results, containsName) {
    for (let entry of results.entries) {
        if (entry.name === containsName) {
            return;
        }
    }
    chai_1.assert.fail('SearchResults does not contain: ' + containsName);
}
