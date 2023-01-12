import { assert } from "chai";

import { SearchResults } from '../telephone-index/src/service/TelephoneIndex'
import ArrayBasedTelephoneIndex from '../telephone-index/src/service/ArrayBasedTelephoneIndex'

let _telephoneIndex = new ArrayBasedTelephoneIndex()

describe( "ArrayBasedTelephoneIndex unit-tests", () => {

    it("searchByQuickIndexItem should return 1 result for 'A'", () => {
        // Given ...

        // When I searchByQuickIndexItem with 'A'
        let results = _telephoneIndex.searchByQuickIndexItem( "A" )

        // Then the results contain only 1 result for "Adamson, Phil"
        _assertSearchResultsContainsNItems( results, 1 )
        _assertSearchResultsContainsName( results, 'Adamson, Phil' )
   });

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