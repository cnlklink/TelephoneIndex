import { test, expect, Page } from '@playwright/test';

test( 'Navigate to the home page, telephone index is displayed with no results', async( {page} ) => {
  
  // When I navigate to the telephone index home page
  await navigatePageToHome( page )

  // Then the telephone index page is displayed
  await assertTelephoneIndexIsDisplayedOn( page )
  await assertThereAreNoResultsDisplayedOn( page )
})

async function navigatePageToHome( page: Page )
{
  // I navigate to the application home page
  await page.goto( 'http://localhost:3000/' )
}

async function assertTelephoneIndexIsDisplayedOn( on: Page )
{
  // I should see the title banner
  await expect( on ).toHaveTitle( /telephone index/i )
}

async function assertThereAreNoResultsDisplayedOn( on: Page )
{
  // I should see a "No results found" message
  const locator = on.locator( '#search-results-where' )
  await expect( locator ).toHaveText( /no results found/i )
}
