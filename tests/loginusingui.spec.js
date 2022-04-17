const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../pageobjects/LoginPage');
const { DashboardPage } = require('../pageobjects/DashboardPage');
const dataset = JSON.parse(JSON.stringify(require("../utils/data.json")));
const otherdataset = JSON.parse(JSON.stringify(require("../utils/otherdata.json")));

for (const data of dataset) {
    test(`@smoke Login and Logout From UI with valid data ${data.username}`, async ({ page }) => {
        const loginpage = new LoginPage(page);
        const dashboardpage = new DashboardPage(page);
        await loginpage.goTo();
        await loginpage.getPageText(otherdataset.pagetext);
        await loginpage.login(data.username, data.password);
        expect(await dashboardpage.getMenu('Home'));
        expect(await dashboardpage.getMenu('Products'));
        expect(await dashboardpage.getMenu('Contact'));
        await dashboardpage.logout();
    });
}
test('@regression Login with invalid data', async ({ page }) => {
    const loginpage = new LoginPage(page);
    const dashboardpage = new DashboardPage(page);
    await loginpage.goTo();
    await loginpage.getPageText(otherdataset.pagetext);
    await loginpage.login(otherdataset.invaliduname, otherdataset.invalidpassword);
    expect(await dashboardpage.getMenu('Home')).toBeFalsy();
});