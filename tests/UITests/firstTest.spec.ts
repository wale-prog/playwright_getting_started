import {test, expect} from '@playwright/test';
import { Person } from '../../class';


test('Validate user can launch the test website', async({page}) => {
    await page.goto('https://saucedemo.com');
    await expect(page).toHaveTitle('Swag Labs')
    const Gabriel = new Person("Gabriel", 31, "Oyo", "Male", 42); 
    await page.locator('[data-test="username"]').fill(Gabriel.name)
    await page.locator('[data-test="password"]').fill(Gabriel.stateOfOrigin)

})
 
test('validate that username field is visible', async({page}) => {
    await page.goto('https://www.w3schools.com/')
})