import { test, expect } from '@playwright/test';
const { login_Registration_Func } = require('../module/abc');


test('homepage has title and links to intro page', async ({ page }) => {

  const registration = new login_Registration_Func(page);
  registration.testing();
});
