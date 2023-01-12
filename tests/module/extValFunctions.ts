import { expect, Page, test } from "@playwright/test";
import * as VPPO from '../pageObject/visitPlanPo';


function randomStringGenerator() {
    var text = "";
    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    for (var i = 0; i < 3; i++)
      text += possible.charAt(Math.floor(Math.random() * possible.length));

    return text;
  }

function randomNumGenerator() {
    var num = "";
    var possible = "0123456789";

    for (var i = 0; i < 3; i++)
      num += possible.charAt(Math.floor(Math.random() * possible.length));

    return num;
  }
  
  let vpName = 'Visit Plan Title: ' + randomStringGenerator()

export class navbar{
  
    readonly page: Page;
    constructor(page: Page){
    this.page = page;
    }
  

    public async gotoVisitPlanTab(){
     
    await this.page.locator(VPPO.navbarOptions.tenantDD, {hasText: 'Select Tenant'}).click()
    await this.page.locator(VPPO.navbarOptions.tenantName, {hasText: 'Loki'}).click()   
    await this.page.locator(VPPO.navbarOptions.studyDD, {hasText: 'Select Study'}).click()
    await this.page.locator(VPPO.navbarOptions.studyName, {hasText: /newTRIAL Name here hello.*/}).click()     
    await this.page.locator(VPPO.navbarOptions.selectStudyRow, { hasText: 'Studies' }).click()
    await this.page.locator(VPPO.navbarOptions.addVisitPlanTab, { hasText: 'Study Visit Plan' }).click()   
     }

    public async addSimpleVP(){
      await this.page.locator(VPPO.allButtons.vpAddBtn, {hasText: 'Add Visit Plan'}).click()  

    // add basic vp things
    await this.page.locator(VPPO.vpBasic.vpTitle).fill(vpName)
    await this.page.locator(VPPO.vpBasic.vpDesc).fill('Description of visit plan: '+randomStringGenerator())
    await this.page.locator(VPPO.vpBasic.vpProtocol).fill('protocol version: '+randomNumGenerator())
    
    // add visit types
    await this.page.locator(VPPO.vpVisitType.addVisitType).click()
    await this.page.locator(VPPO.vpVisitType.visitTitle).fill('Visit Title: ' + randomNumGenerator())
    await this.page.locator(VPPO.vpVisitType.visitOid).fill('VisitOID-01-'+randomNumGenerator())  
    await this.page.locator(VPPO.vpVisitType.econsentVisitType).click()
    await this.page.locator(VPPO.allButtons.vpAddFormsBtn).click()
    await this.page.locator(VPPO.vpForms.searchForm).fill('Mustafa ECRF form fixture')
    await this.page.locator(VPPO.vpForms.selectForm).click()
    await this.page.locator(VPPO.vpForms.addFormBtn).click()
    await this.page.locator(VPPO.vpForms.associateForm).click()
    }

    public async verifyVP(){
        await this.page.locator(VPPO.allButtons.vpSaveBtn).click()
        await this.page.locator(VPPO.allButtons.vpEclpseBtn).click()
        await this.page.locator(VPPO.allButtons.vpVerifyBtn, {hasText: 'Verify'}).click()
        await this.page.locator(VPPO.allButtons.vpConfirmBtn).click()

    }
    
    public async draftVP(){
      await this.page.locator(VPPO.allButtons.vpSaveBtn).click()
      await this.page.waitForTimeout(5000)
      await this.page.locator(VPPO.allButtons.vpCloseBtn).click()
      
  }

    public async searchVP(){
       
        await this.page.locator(VPPO.vpBasic.vpSearch).fill(vpName)
        await this.page.locator(VPPO.vpBasic.vpSearchRow, {hasText: vpName}).click()
       
    }
    
    public async updateVP(){
    
      await this.searchVP()    
      await this.page.locator(VPPO.vpBasic.vpTitle).fill(vpName + ': ' + randomNumGenerator())
      await this.draftVP()
    }
}

