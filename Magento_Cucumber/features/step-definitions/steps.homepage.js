const { Given, When, Then } = require('@wdio/cucumber-framework');
const { expect, $ } = require('@wdio/globals')

const HomePage = require('../pageobjects/homepage');
const homepage = require('../pageobjects/homepage');
const Checkout = require('../pageobjects/checkout');
const checkout = require('../pageobjects/checkout');

const pages = {
    homepage: HomePage
}


Given('I am logged in as a customer', async () => {

    await HomePage.getWelcomeText();
    const welcomeText = await HomePage.getWelcomeText();
    console.log(welcomeText);
  });

  When('I search for {string}', async (string) => {
    await homepage.searchTheItem();
    
  });

  When('I add the product to the cart', async () => {
    await homepage.selecTheProduct();
    await homepage.selectProductSize();
    await homepage.selectProductColor();
    await homepage.clcikOnAddToCartButton();
    await browser.pause(2000);
    await homepage.clickOnCart;
    await homepage.clickOnProceedTOCheckoutbutton();
   
  });


//   When('I proceed to checkout', async () => {
//     const shippingDetails = {
//         address: '123 Testing St',
//         city: 'TestVille',
//         zipcode: '12345',
//         phone: '9876756445'
//     }
//     await checkout.fillShippingDetails(shippingDetails);
//     await checkout.selectFlatRate();
  
//   });


  When('I fill in shipping details', async () => {
    const shippingDetails = {
        address: '123 Testing St',
        city: 'TestVille',
        zipcode: '12345',
        phone: '9876756445'
    }
    await checkout.fillShippingDetails(shippingDetails);
    await checkout.selectFlatRate();
    await homepage.clcikOnAddToCartButton();

    await checkout.checkBillingAndShipping();
   
  });


  Then('the order should be successfully placed', async () => {
    await checkout.noticeTheThankYouAndOrderNumber();
    
  });

