import { expect, Page } from "@playwright/test";
import * as VPPO from '../pageObject/visitPlanPo';
import * as creds from '../utilities/helper';

export class loginPage {
  
    readonly page: Page;
    constructor(page: Page){
    this.page = page;
    }
 
    public async pageLogin(){
        await this.page.goto(creds.URL.dev1);
        await expect(this.page.locator(VPPO.login.loginPageTitle)).toHaveCount(1)
        if (await this.page.$(VPPO.login.loginPageTitle)){
       
        // Common assertions
        await expect(this.page.locator(VPPO.login.userName)).toBeVisible()
        await expect(this.page.locator(VPPO.login.password)).toBeVisible()
        
        //await expect(this.page.locator(VPPO.login.userName)).toHaveText('Username')
        //await expect(this.page.locator(VPPO.login.password)).toHaveText('password')
        //await expect(this.page.locator('[class="field basic-input"]')).toHaveAttribute('class','/.*styles__Label-sc-9qwgme-1 fRXIJC label/')
        //await expect(this.page.locator(VPPO.login.password)).toHaveClass(/.*login.password/)
    
        await this.page.locator(VPPO.login.userName).fill(creds.devPass.ddusername)
        await this.page.locator(VPPO.login.password).fill(creds.devPass.ddpass)
        await this.page.locator(VPPO.login.submitButton).click()
        await expect(this.page).toHaveTitle(VPPO.login.S37logo)
       
       // await this.page.screenshot({ path: 'Add a visit plan.png', fullPage: true });
       // await expect(this.page).toHaveScreenshot('Add a visit plan.png')
        }
    }

}