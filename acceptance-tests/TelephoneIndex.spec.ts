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
