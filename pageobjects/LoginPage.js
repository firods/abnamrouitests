class LoginPage {

    constructor(page) {
        this.page = page;
        this.signInbutton = page.locator("input[id=login]");
        this.userName = page.locator("[id=email]");
        this.password = page.locator("[id=password]");
        this.pagetext = page.locator("[id='login'] h1");
    }

    async goTo() {
        const dir = __dirname;
        const url = dir.replace('\\pageobjects', '\\testautomation-web\\index.html');
        await this.page.goto(url.replace('\\\pageobjects', ''));
    }

    async login(username, password) {
        await this.userName.type(username);
        await this.password.type(password);
        await this.signInbutton.click();
    }
    async getPageText(pagetext) {
        await this.pagetext.locator("h1:has-text('" + pagetext + "')");
    }
}
module.exports = { LoginPage };