import { test, expect, Page } from '@playwright/test';

test( 'Navigate to the home page, telephone index is displayed with no results', async( {page} ) => {
  
  // When I navigate to the telephone index home page
  await navigatePageToHome( page )

  // Then the telephone index page is displayed
  await assertSearchBarIsDisplayedOn( page )
  await assertTelephoneIndexIsDisplayedOn( page )

  // ... and there are no search results
  await assertThereAreNoResultsDisplayedOn( page )

  // ... and nothing is selected in the quick index
  await assertThereAreNoSelectedQuickIndexItemsOn( page )
})

async function navigatePageToHome( page: Page )
{
  // I navigate to the application home page
  await page.goto( 'http://localhost:3000/' )
}

async function assertSearchBarIsDisplayedOn( on: Page )
{
  // I should see the search bar
  const locator = on.locator( '#search-bar' )
  await expect( locator ).toBeVisible()
}

async function assertTelephoneIndexIsDisplayedOn( on: Page )
{
  // I should see the title banner
  await expect( on ).toHaveTitle( /telephone index/i )

  // And the quick index
  const locator = on.locator( '#quick-index' )
  await expect( locator ).toHaveText( /A/ )
  await expect( locator ).toHaveText( /B/ )
}

async function assertThereAreNoResultsDisplayedOn( on: Page )
{
  // I should see a "No results found" message
  const locator = on.locator( '#search-results-where' )
  await expect( locator ).toHaveText( /no results found/i )
}

async function assertThereAreNoSelectedQuickIndexItemsOn( on: Page ) 
{
  const elements = await on.$$('.quick-index-item-selected');
  expect( elements ).toBeNull
}

test( 'Click on A in Quick Index, 1 result is displayed', async( {page} ) => {

  // Given I have navigated to the telephone index home page
  await navigatePageToHome( page )

  // When I click on the 'A' item in the quick index
  await clickQuickIndexItemOn( 'A', page )

  // Then the 'A' is highlighted
  await assertQuickIndexItemIsHighlightedOn( 'A', true , page )

  // ... and 1 result is displayed
  await assertThereAreNSearchResultsDisplayedOn( 1, page )
  await assertSearchResultsBeginWithLetterOn( 'A', page )
  await assertNameAppearsInSearchResultsOn( 'Apple, Adam', page )
})

async function clickQuickIndexItemOn( item: string, on: Page )
{
  const itemElement = await on.$( '#quick-index-item-' + item )
  itemElement?.click()
}

async function assertQuickIndexItemIsHighlightedOn( quickIndexItem: string, isHighlighted: boolean, on: Page )
{
  const locator = on.locator( '#quick-index-item-' + quickIndexItem )
  if( isHighlighted )
  {
    await expect( locator ).toHaveClass( 'quick-index-item quick-index-item-selected' )
  }
  else 
  {
    await expect( locator ).toHaveClass( 'quick-index-item' )
  }
}

async function assertThereAreNSearchResultsDisplayedOn( n: number, on: Page )
{
  const locator = on.locator( '#search-results-where' )
  await expect( locator ).toHaveText( n + ' results found.' )
}

async function assertSearchResultsBeginWithLetterOn( letter: string, on: Page )
{
  const searchResultDivs = await on.$$( '.search-result' )
  for( const resultDiv of searchResultDivs )
  {
    const fullName = await (await resultDiv.getProperty('textContent')).jsonValue();

    const beginsWithLetter = new RegExp( `^[${letter}]`, "i" )

    expect( fullName ).toMatch( beginsWithLetter )
  }
}

async function assertNameAppearsInSearchResultsOn( name: string, on: Page )
{
  let found = false
  const searchResultDivs = await on.$$( '.search-result' )
  for( const resultDiv of searchResultDivs )
  {
    const thisResultsFullName = await (await resultDiv.getProperty('textContent')).jsonValue();
    if( thisResultsFullName === name )
    {
      found = true
      break
    }
  }

  expect( found ).toBeTruthy()
}

test( 'Click on B in Quick Index, 2 results are displayed', async( {page} ) => {

  // Given I have navigated to the telephone index home page
  await navigatePageToHome( page )

  // When I click on the 'B' item in the quick index
  await clickQuickIndexItemOn( 'B', page )

  // Then 2 results are displayed
  await assertThereAreNSearchResultsDisplayedOn( 2, page )
  await assertSearchResultsBeginWithLetterOn( 'B', page )
  await assertNameAppearsInSearchResultsOn( 'Brown, Bob', page )
  await assertNameAppearsInSearchResultsOn( 'Blueberry, Billy', page )
})

test( 'Click on C in Quick Index after A, 0 results are displayed', async( {page} ) => { 
  // Given the user has already clicked on quick index 'A' and results are being displayed
  await navigatePageToHome( page )
  await clickQuickIndexItemOn( 'A', page )
  await assertThereAreNSearchResultsDisplayedOn( 1, page ) 
  await assertQuickIndexItemIsHighlightedOn( 'A', true, page )

  // When I click on the 'C' item in the quick index
  await clickQuickIndexItemOn( 'C', page )

  // Then no results are displayed
  await assertThereAreNoResultsDisplayedOn( page )

  // ... and only 'C' is selected
  await assertQuickIndexItemIsHighlightedOn( 'A', false, page )
  await assertQuickIndexItemIsHighlightedOn( 'C', true, page )
})

test( 'Empty search, 0 results are displayed and quick index is unselected', async( {page} ) => {
  // Given I am on the home page
  await navigatePageToHome( page )

  // ... and I have selected 'A' from the quick index (which displays 1 telephone entry)
  await clickQuickIndexItemOn( 'A', page )
  await assertThereAreNSearchResultsDisplayedOn( 1, page )
  await assertQuickIndexItemIsHighlightedOn( 'A', true, page )

  // When I search for nothing (note that if you pass an empty string here, playwright no-ops)
  await searchForOn( " ", page )

  // Then there are no results displayed
  await assertThereAreNoResultsDisplayedOn( page )

  // ... and no item in the quick index is selected
  await assertThereAreNoSelectedQuickIndexItemsOn( page )
} )

async function searchForOn( searchInput: string, on: Page )
{
  await on.fill( '#search-criteria', '' )
  await on.type( '#search-criteria', searchInput )
}

test( 'Search for A, 1 result is displayed', async( {page} ) => {
  // Given I am on the home page with no search results shown
  await navigatePageToHome( page )
  await assertThereAreNoResultsDisplayedOn( page )

  // When I search for "A"
  await searchForOn( "A", page )

  // Then there is 1 search result shown for Apple, Adam
  await assertNameAppearsInSearchResultsOn( "Apple, Adam", page )
} )

test( 'Search for A then B, 2 result is displayed', async( {page} ) => {
  // Given I displaying search results for 'A'
  await navigatePageToHome( page )
  await searchForOn( "A", page )
  await assertThereAreNSearchResultsDisplayedOn( 1, page )

  // When I search for "B"
  await searchForOn( "B", page )

  // Then there are 2 search results shown...
  await assertThereAreNSearchResultsDisplayedOn( 2, page )
  await assertNameAppearsInSearchResultsOn( "Brown, Bob", page )
  await assertNameAppearsInSearchResultsOn( "Blueberry, Billy", page )
} )

test( 'Search for John, 2 results are displayed', async( {page} ) => {
  // Given I am on the telephone index page
  await navigatePageToHome( page )
  
  // When I search for "John"
  await searchForOn( "John", page )

  // Then there are 2 search results shown...
  await assertThereAreNSearchResultsDisplayedOn( 2, page )
  await assertNameAppearsInSearchResultsOn( "Dimond, John", page )
  await assertNameAppearsInSearchResultsOn( "Dinglemooh, John", page )
} )

test( 'Search for "Dimond, John", only 1 result is displayed', async( {page} ) => {
  // Given I am on the telephone index page
  await navigatePageToHome( page )
  
  // When I search for "Dimond, John"
  await searchForOn( "Dimond, John", page  )

  // Then only 1 result is shown...
  await assertThereAreNSearchResultsDisplayedOn( 1, page )
  await assertNameAppearsInSearchResultsOn( "Dimond, John", page )
} )

test( 'Click Quick Index B then search, quick index highlight goes away', async( {page} ) => {
  // Given the quick index for 'B' is shown
  await navigatePageToHome( page )
  await clickQuickIndexItemOn( 'B', page )
  await assertThereAreNSearchResultsDisplayedOn( 2, page )
  
  // When I search for...
  await searchForOn( "Dimond, John", page )
  
  // Then 1 result is displayed and nothing is highlighted in the quick index
  await assertThereAreNSearchResultsDisplayedOn( 1, page )
  await assertQuickIndexItemIsHighlightedOn( 'B', false, page )
} )

/*
test( 'Click quick index A, search bar is cleared', async( {page} ) => {
  // Given I have searched for 'Adam' and 1 result is displayed
  await navigatePageToHome( page )
  await searchForOn( 'Adam', page )
  await assertNameAppearsInSearchResultsOn( 'Apple, Adam', page )
  // expect( await page.inputValue( '#search-criteria') ).toBe( 'Adam' )
  
  // When I click 'A' in the quick index
  await clickQuickIndexItemOn( 'B', page )

  // Then the search bar has been emptied
  const criteriaAfter = await page.inputValue( '#search-criteria')
  expect( criteriaAfter ).toBe( '' )
} )
*/

test( 'Navigate to home page, Entry Form is not visible', async( {page} ) => {
  // Given we are entering the telephone index for the first time
  // When I navigate to the home page
  await navigatePageToHome( page )

  // Then the entry form is not displayed
  await assertEntryFormIsVisibleOn( false, page )
} )

async function assertEntryFormIsVisibleOn( isVisible: boolean, on: Page )
{
  if( isVisible )
  {
    await expect( on.locator( '#entry-editor__form' ) ).toBeVisible()
    await expect( on.locator( '#entry-form__createButton' ) ).toBeVisible()
  }
  else 
  {
    await expect( on.locator( '#entry-editor__hidden' ) ).toBeVisible()
  }
}

test( 'Click New Entry, Entry Form is disabled', async( {page} ) => {
  // Given we are entering the telephone index for the first time
  await navigatePageToHome( page )

  // When I click the New Entry button
  await clickNewEntryOn( page )

  // Then the entry form is displayed
  await assertEntryFormIsVisibleOn( true, page )
} )

async function clickNewEntryOn( on: Page )
{
  
}