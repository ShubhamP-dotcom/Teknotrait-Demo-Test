const { Given, When, Then } = require('@wdio/cucumber-framework');
const { expect, $ } = require('@wdio/globals')

const LoginPage = require('../pageobjects/login.page');
const SecurePage = require('../pageobjects/secure.page');
const HomePage = require('../pageobjects/homepage');

const pages = {
    login: LoginPage
}

Given(/^I am on the (\w+) page$/, async (page) => {
    await pages[page].open();
    await browser.maximizeWindow();

});


When(/^I login with (.*) and (.*)$/, async (email, password) => {

	await LoginPage.login(email, password)
});

// When(/^I login with (\w+) and (.+)$/, async (email, password) => {
//     await LoginPage.login(email, password)
// });


// When(/^I login with (\w+) and (.+)$/, async (email, password) => {
//     await LoginPage.login(email, password)
// });


Then(/^I should see a Welcome message on Panel Header$/, async () => {
	await HomePage.getWelcomeText();
    const welcomeText = await HomePage.getWelcomeText();
    console.log(welcomeText);

});


// Then(/^I should see (.*) on Panel Header $/, async (message) => {
//     await HomePage.getWelcomeText();
//     const welcomeText = await HomePage.getWelcomeText();
//     console.log(welcomeText);
//     // await expect(SecurePage.flashAlert).toBeExisting();
//     // await expect(SecurePage.flashAlert).toHaveText(expect.stringContaining(message));
// });



