const {expect} = require('@playwright/test');
const { dashboard } = require('../pageObject/dashboard');


const dashboardPo = new dashboard();

exports.login_Registration_Func = class login_Registration_Func {

    page;

  constructor(page) {
    this.page = page;
  }

  testing() {
    console.log(dashboardPo.locators.searchBar);
  } 
  
};



// I.see(email.substring(0,email.indexOf('@')),dashboard.locators.accountDetailText);