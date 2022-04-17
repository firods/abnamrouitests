const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../pageobjects/LoginPage');
const { DashboardPage } = require('../pageobjects/DashboardPage');
const dataset = JSON.parse(JSON.stringify(require("../utils/data.json")));
const otherdataset = JSON.parse(JSON.stringify(require("../utils/otherdata.json")));

test.beforeAll(async ({ browser }) => {
    const context = await browser.newContext();
    const page = await context.newPage();
});

for (const data of dataset) {
    test(`@smoke Login and Logout through cookie ${data.username}`, async ({ page }) => {
        const loginpage = new LoginPage(page);
        const dashboardpage = new DashboardPage(page);

        page.addInitScript(value => {
            window.localStorage.setItem('logged', value);
        }, data.username);

        await loginpage.goTo();
        expect(await loginpage.getPageText(otherdataset.pagetext)).toBeFalsy();
        expect(await dashboardpage.getMenu('Home'));
        expect(await dashboardpage.getMenu('Products'));
        expect(await dashboardpage.getMenu('Contact'));
    });
}