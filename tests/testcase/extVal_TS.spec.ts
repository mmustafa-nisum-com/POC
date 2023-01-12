const { test } = require ('@playwright/test')
import * as loginPageFunction from '../module/loginPage';
import * as extValPageFunction from '../module/extValFunctions';

  test('Login with Data Designer', async ({ page }) => {
        const loginPageObj = new loginPageFunction.loginPage(page)

        await loginPageObj.pageLogin()
});

  test('Create a draft Visit Plan', async ({ page }) => {
        const loginPageObj = new loginPageFunction.loginPage(page)
        const extValPageObj = new extValPageFunction.navbar(page)

        await loginPageObj.pageLogin()
        await extValPageObj.gotoVisitPlanTab()
        await extValPageObj.addSimpleVP()
        await extValPageObj.draftVP()
});

  test('Create a verified Visit Plan', async ({ page }) => {
        const loginPageObj = new loginPageFunction.loginPage(page)
        const extValPageObj = new extValPageFunction.navbar(page)

        await loginPageObj.pageLogin()
        await extValPageObj.gotoVisitPlanTab()
        await extValPageObj.addSimpleVP()
        await extValPageObj.verifyVP()

});

  test.only('Update a draft Visit Plan', async ({ page }) => {
        const loginPageObj = new loginPageFunction.loginPage(page)
        const extValPageObj = new extValPageFunction.navbar(page)

        await loginPageObj.pageLogin()
        await extValPageObj.gotoVisitPlanTab()
        await extValPageObj.addSimpleVP()
        await extValPageObj.draftVP()
        await extValPageObj.updateVP()
  });
