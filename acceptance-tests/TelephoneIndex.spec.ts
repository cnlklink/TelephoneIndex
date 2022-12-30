import { test, expect, Page } from '@playwright/test';

test( 'When I navigate to the home page, the telephone index is displayed', async( {page} ) => {
  
  // Given I have entered the phone book page
  await navigatePageToHome( page )

  // Then the telephone index page is displayed
  await assertTelephoneIndexIsDisplayedOn( page )
})

async function navigatePageToHome( page: Page )
{
  await page.goto( 'http://localhost:3000/' )
}

async function assertTelephoneIndexIsDisplayedOn( on: Page )
{
  // Then...
  // I should see the title banner
  await expect( on ).toHaveTitle( /Telephone Index/ )
}