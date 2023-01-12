import { assert } from "chai";

import { SearchResults } from '../telephone-index/src/service/TelephoneIndex'
import ArrayBasedTelephoneIndex from '../telephone-index/src/service/ArrayBasedTelephoneIndex'

describe( "ArrayBasedTelephoneIndex unit-tests", () => {

    let _telephoneIndex: ArrayBasedTelephoneIndex

    before( () => {
        _telephoneIndex = new ArrayBasedTelephoneIndex()
    })

    it("searchByQuickIndexItem should return 1 result for 'A'", () => {
        // Given ...

        // When I searchByQuickIndexItem with 'A'
        let results = _telephoneIndex.searchByQuickIndexItem( "A" )

        // Then the results contain only 1 result for "Adamson, Phil"
        _assertSearchResultsContainsNItems( results, 1 )
        _assertSearchResultsContainsName( results, 'Apple, Adam' )
    });

    it( "searchByQuickIndexItem should return 2 results for 'B'", () => {
        // Given ...

        // When I searchByQuickIndexItem with 'B'
        let results = _telephoneIndex.searchByQuickIndexItem( "B" )

        // Then the results contain 2 items...
        _assertSearchResultsContainsNItems( results, 2 )
        _assertSearchResultsContainsName( results, 'Brown, Bob' )
        _assertSearchResultsContainsName( results, 'Blueberry, Billy' )
        })

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