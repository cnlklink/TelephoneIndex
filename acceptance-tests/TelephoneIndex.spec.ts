import { test, expect, Page } from '@playwright/test';

test( 'Navigate to the home page, telephone index is displayed with no results', async( {page} ) => {
  
  // When I navigate to the telephone index home page
  await navigatePageToHome( page )

  // Then the telephone index page is displayed
  await assertSearchBarIsDisplayedOn( page )
  await assertTelephoneIndexIsDisplayedOn( page )
  await assertThereAreNoResultsDisplayedOn( page )
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
  const locator = on.locator( '#quickindex-item-' + quickIndexItem )
  if( isHighlighted )
  {
    await expect( locator ).toHaveClass( 'quickindex-item-selected' )
  }
  else 
  {
    await expect( locator ).toNotHaveClass( 'quickindex-item-selected' )
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

  // When I click on the 'C' item in the quick index
  await clickQuickIndexItemOn( 'C', page )

  // Then no results are displayed
  await assertThereAreNoResultsDisplayedOn( page )
})