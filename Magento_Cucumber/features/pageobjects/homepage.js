const { $, browser } = require('@wdio/globals')
const Page = require('./page');

class HomePage extends Page {

    get welcomeMessage () {
        return $('.logged-in');
        
    }


    async getWelcomeText() {
        return await this.welcomeMessage.getText();
    }


    get searchField(){
        return $('#search');
    }

    async searchTheItem(item){

        await this.searchTheItem.setValue(item);
        await browser.keys('Enter');
        await browser.pause(2000);
    }

    get product(){
        return $('=Typhon Performance Fleece-lined Jacket')
    }

    async selecTheProduct(){
        await this.product.click();
        await browser.pause(2000);
    }

    get size(){
        return $('#option-label-size-143-item-168')
    }

    async selectProductSize(){
        await this.size.click();
        await browser.pause(2000);
    }

    get color(){
        return $('#option-label-color-93-item-49')
    }

    async selectProductColor(){
        await this.color.click();
        await browser.pause(2000);
    }

    get btnSubmit () {
        return $('button[type="submit"]');
    }

    async clcikOnAddToCartButton(){
        await this.btnSubmit.click();
        await browser.pause(2000);
    }

    get cart(){
        return $('//span[@class="counter qty"]')
    }

    async clickOnCart(){
        await this.cart.click();
        await browser.pause(2000);
    }

    get btnCheckout () {
        return $('#top-cart-btn-checkout');
    }

    async clickOnProceedTOCheckoutbutton(){
        await this.btnCheckout.click();
        await browser.pause(2000);
    }



}
module.exports = new HomePage();