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

    it("searchByQuickIndexItem( 'A' ) should return 1 result", () => {
        // Given the index contains an entry for 'Apple, Adam'
 
        // When I searchByQuickIndexItem with 'A'
        let results = _telephoneIndex.searchByQuickIndexItem( "A" )

        // Then the results contain only 1 result for "Adamson, Phil"
        _assertSearchResultsContainsNItems( results, 1 )
        _assertSearchResultsContainsName( results, 'Apple, Adam' )
    } )

    it( "searchByQuickIndexItem( 'B' ) should return 2 results", () => {
        // Given the index contains entries for two people with a last name that starts with 'B'

        // When I searchByQuickIndexItem with 'B'
        let results = _telephoneIndex.searchByQuickIndexItem( "B" )

        // Then the results contain 2 items...
        _assertSearchResultsContainsNItems( results, 2 )
        _assertSearchResultsContainsName( results, 'Brown, Bob' )
        _assertSearchResultsContainsName( results, 'Blueberry, Billy' )
    } )

    it( "searchByCriteria( '' ) should return 0 results", () => { 
        // Given the index is loaded with random test data
        _telephoneIndex.fillWithNRandomEntries( 100 )

        // When I searchByCriteria for ''
        // Then there results contains no items
        _searchWithCriteriaAndAssertOnlyNamesReturned( '', [] )
    } )

    it( "searchByCriteria( 'A' ) should return 1 result", () => { 
        // Given the index is filled with the known test data...

        // When I searchByCriteria for 'A'
        // Then the results contains 1 item: "Apple, Adam"
        _searchWithCriteriaAndAssertOnlyNamesReturned( 'A', [
            "Apple, Adam"
        ] )
    } )
    
    it( "searchByCriteria( 'B' ) should return 2 results", () => { 
        // Given the index is filled with the known test data...

        // When I searchByCriteria for 'B'
        // Then the results contains 2 items...
        _searchWithCriteriaAndAssertOnlyNamesReturned( 'B', [
            "Brown, Bob",
            "Blueberry, Billy"
        ])
    } )

    it( "searchByCriteria( 'C' ) should return 0 results", () => { 
        // Given the index is filled with the known test data...

        // When I searchByCriteria for 'C'
        // Then the results contains 0 items...
        _searchWithCriteriaAndAssertOnlyNamesReturned( 'C', [] )
    } )

    it ("searchByCriteria( ' ' ) should return 0 results", () => { 
        // Given the index is filled with the known test data...

        // When I searchByCriteria for ' ' (whitespace)
        // Then the results contains 0 items...
        _searchWithCriteriaAndAssertOnlyNamesReturned( ' ', [] )        
    } )

    it( "searchByCriteria( 'AA' ) should return 0 results", () => { 
        // Given the index is filled with the known test data...

        // When I searchByCriteria for 'AA'
        // Then the results contains 0 items...
        _searchWithCriteriaAndAssertOnlyNamesReturned( 'AA', [] )  
    } )

    it( "searchByCriteria( 'Adam' ) returns 1 result", () => { 
        // Given the index is filled with the known test data...

        // When I searchByCriteria for 'Adam'
        // Then the results contains 1 items...
        _searchWithCriteriaAndAssertOnlyNamesReturned( 'Adam', [ "Apple, Adam" ] ) 
    } )

    it( "searchByCriteria(...) is case insensitive", () => { 
        // Given the index is filled with the known test data...

        // When I searchByCriteria for results in different case
        // Then the results are the same...
        _searchWithCriteriaAndAssertOnlyNamesReturned( 'Adam', [ "Apple, Adam" ] )
        _searchWithCriteriaAndAssertOnlyNamesReturned( 'adam', [ "Apple, Adam" ] )
        _searchWithCriteriaAndAssertOnlyNamesReturned( 'AdAm', [ "Apple, Adam" ] )
        _searchWithCriteriaAndAssertOnlyNamesReturned( 'BlueBerry', [ "Blueberry, Billy" ] )
        _searchWithCriteriaAndAssertOnlyNamesReturned( 'BILLY', [ "Blueberry, Billy" ] )
    } )
    
    function _searchWithCriteriaAndAssertOnlyNamesReturned( criteria: string, names: Array<string> )
    {
        let results = _telephoneIndex.searchByCriteria( criteria )
        
        _assertSearchResultsContainsNItems( results, names.length )

        for( let name of names )
        {
            _assertSearchResultsContainsName( results, name )
        }
    }

    function _assertSearchResultsContainsNItems( results: SearchResults, containsNItems: number )
    {
        assert.equal( results.count, containsNItems, "Search results should contain N items" )
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

    it( "createEntryWithFirstLast should add entries with sequential ID values", () => {
        // Given an empty telephone index
        let myIndex = new ArrayBasedTelephoneIndex()

        // When I create three new entries and then search for those three names
        myIndex.createEntryWithFirstLast( "One", "Test" )
        let results1 = myIndex.searchByCriteria( "Test, One" )

        myIndex.createEntryWithFirstLast( "Two", "Test" )
        let results2 = myIndex.searchByCriteria( "Test, Two" )

        myIndex.createEntryWithFirstLast( "Three", "Test" )
        let results3 = myIndex.searchByCriteria( "Test, Three" )

        // Then the first entry has id = 1
        //   and the second entry has id = 2
        //   and the third has id = 3
        _assertSearchResultsContainsEntryWithId( results1, 1 )
        _assertSearchResultsContainsEntryWithId( results2, 2 )
        _assertSearchResultsContainsEntryWithId( results3, 3 )
    })

    function _assertSearchResultsContainsEntryWithId( results: SearchResults, containsId: number )
    {
        for( let entry of results.entries)
        {
            if( entry.id === containsId )
            {
                return 
            }
        }
    
        assert.fail( 'SearchResults does not contain entry with ID: ' + containsId )
    }
});

