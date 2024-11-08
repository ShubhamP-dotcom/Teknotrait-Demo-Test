const { $ } = require('@wdio/globals')
const Page = require('./page');


class LoginPage extends Page {
   
    get signInLink () {
        return $('a[href*="/customer/account/login"]');
    }

    get emailField() {
        return $('#email'); 
    }

    get passwordField() {
        return $('#pass'); 
    }

    get btnSubmit () {
        return $('button[type="submit"]');
    }


    async open() {
        await browser.url('https://magento.softwaretestingboard.com/customer/account/login');
        await browser.waitUntil(async () => await this.loginLink.isDisplayed(), {
            timeout: 5000,
            timeoutMsg: 'Login link not found after 5 seconds'
        });
    }


    async login (email, password) {
        // await this.signInLink.click();
        await emailField.scrollIntoView();
        await this.emailField.setValue(email);
        await this.passwordField.setValue(password);
        await this.loginButton.click();
    }


    open () {
        return super.open('login');
    }
}

module.exports = new LoginPage();
