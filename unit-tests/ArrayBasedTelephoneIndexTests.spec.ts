import { assert } from "chai";

import { SearchResults } from '../telephone-index/src/service/TelephoneIndex'
import ArrayBasedTelephoneIndex from '../telephone-index/src/service/ArrayBasedTelephoneIndex'

describe( "ArrayBasedTelephoneIndex unit-tests", () => {

    let _telephoneIndex: ArrayBasedTelephoneIndex

    beforeEach( () => {
        _telephoneIndex = new ArrayBasedTelephoneIndex()

        _telephoneIndex.fillWithTestData()
    } )

    it( "getNumberOfEntries() is initially 0", () => {
        // Given a new ArrayBasedTelephoneIndex
        let emptyTelephoneIndex = new ArrayBasedTelephoneIndex()

        // When I call getNumberOfEntries()
        // Then it should return 0
        assert.equal( emptyTelephoneIndex.getNumberOfEntries(), 0 )
    } )

    it( "fillWithNRandomEntries with n = 50, should result in 50 new entries", () => {
        // Given the telephone index is already filled with known test data
        let startingCount = _telephoneIndex.getNumberOfEntries()

        // When I can fillWithNRandomEntries( 50 )
        _telephoneIndex.fillWithNRandomEntries( 50 )

        // Then the index should have 50 new entries
        assert.equal( _telephoneIndex.getNumberOfEntries(), startingCount + 50 )
    } )

    it("searchByQuickIndexItem should return 1 result for 'A'", () => {
        // Given the index contains an entry for 'Apple, Adam'
 
        // When I searchByQuickIndexItem with 'A'
        let results = _telephoneIndex.searchByQuickIndexItem( "A" )

        // Then the results contain only 1 result for "Adamson, Phil"
        _assertSearchResultsContainsNItems( results, 1 )
        _assertSearchResultsContainsName( results, 'Apple, Adam' )
    } )

    it( "searchByQuickIndexItem should return 2 results for 'B'", () => {
        // Given the index contains entries for two people with a last name that starts with 'B'

        // When I searchByQuickIndexItem with 'B'
        let results = _telephoneIndex.searchByQuickIndexItem( "B" )

        // Then the results contain 2 items...
        _assertSearchResultsContainsNItems( results, 2 )
        _assertSearchResultsContainsName( results, 'Brown, Bob' )
        _assertSearchResultsContainsName( results, 'Blueberry, Billy' )
    } )
});

function _assertSearchResultsContainsNItems( results: SearchResults, containsNItems: number )
{
    assert.equal( containsNItems, results.count )
}

function _assertSearchResultsContainsName( results: SearchResults, containsName: string )
{
    for( let entry of results.entries)
    {
        if( entry.name === containsName )
        {
            return 
        }
    }

    assert.fail( 'SearchResults does not contain: ' + containsName )
}
