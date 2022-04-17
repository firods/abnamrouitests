class DashboardPage {

    constructor(page) {
        this.page = page;
        this.profileIcon = page.locator("[id=user]");
        this.logoutLink = page.locator("[id=logout]");
        this.menu = page.locator("[class='menu']");
    }

    async logout() {
        await this.profileIcon.click()
        await this.logoutLink.click()
    }
    async getMenu(menu) {
        await this.menu.locator("div:has-text('" + menu + "')");
    }
}
module.exports = { DashboardPage };