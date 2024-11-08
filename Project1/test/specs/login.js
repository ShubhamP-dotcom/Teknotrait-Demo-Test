const LoginPage = require('../pageFolder/loginpage.page')

describe('Login Test', () => {

    it('Login with valid credentials', async () => {
        browser.url('https://the-internet.herokuapp.com/login');
        browser.pause(3000);

        await LoginPage.login('tomsmith', 'SuperSecretPassword!');
        await LoginPage.checkMessage('You logged into a secure area!');

        // const usernameField = await browser.$('#username');
        // await usernameField.setValue('tomsmith');
        // browser.pause(3000);

        // const passwordField = await browser.$('#password');
        // await passwordField.setValue('SuperSecretPassword!');
        // browser.pause(2000);

        // const loginButton = await browser.$('button[type="submit"]');
        // await loginButton.click();
        // browser.pause(2000);

        // const flag = await browser.$('#flash');
        // await flag.getText();

        // await expect($('#flash')).toHaveText(expect.stringContaining('You logged into a secure area!'));
        // // toHaveText('You logged into a secure area!');

    })


})