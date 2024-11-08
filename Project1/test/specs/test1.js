const { expect, browser } = require('@wdio/globals')
const LoginPage = require('../pageobjects/login.page')
const SecurePage = require('../pageobjects/secure.page')

// describe('My Login application', () => {
//     it('should login with valid credentials', async () => {
//         await LoginPage.open()

//         await LoginPage.login('tomsmith', 'SuperSecretPassword!')
//         await expect(SecurePage.flashAlert).toBeExisting()
//         await expect(SecurePage.flashAlert).toHaveText(
//             expect.stringContaining('You logged into a secure area!'))
//         await expect(SecurePage.flashAlert).toMatchElementSnapshot('flashAlert')
//     })
// })

describe('Demo Tests', function () {
    it('My First Test', async () => {
        browser.url('https://google.com')
        
        await $('[class="gLFyf"]').setValue('webdriverIO')
        browser.pause(1000)
        // await $('[name="btnk"]').click()
        browser.keys('Enter')
        browser.pause(3000)

    })
})
