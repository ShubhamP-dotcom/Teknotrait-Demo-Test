class LoginPage {

    get UserName() {
        return $('#username');
    }

    get password() {
        return $('#password');
    }

    get logunButton() {
        return $('button[type="submit"]');
    }

    get successMessage() {
        return $('#flash');
    }

    async login(username, password) {
        await this.UserName.setValue(username);
        await this.password.setValue(password);
        await this.logunButton.click();
    }

    async checkMessage(msg) {
        await expect(this.successMessage).toHaveText(expect.stringContaining(msg));

    }



}
module.exports = new LoginPage()    