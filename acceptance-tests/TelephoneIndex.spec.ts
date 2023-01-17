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

  // Then 1 result is displayed
  await assertThereAreNSearchResultsDisplayedOn( 1, page )
  await assertSearchResultsBeginWithLetterOn( 'A', page )
  await assertNameAppearsInSearchResultsOn( 'Apple, Adam', page )
})

async function clickQuickIndexItemOn( item: string, on: Page )
{
  const itemElement = await on.$( '#quick-index-item-' + item )
  itemElement?.click()
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
  const locator = on.locator( "#search-results-list" )
  await expect( locator ).toHaveText( name )
}