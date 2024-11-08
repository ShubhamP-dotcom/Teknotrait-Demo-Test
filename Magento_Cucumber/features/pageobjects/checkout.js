const { $, browser } = require('@wdio/globals')
const Page = require('./page');

class Checkout extends Page{

    get streetAddressInput(){
        return $('#TGF5DA4')
    }

    get cityInput(){
        return $('#DMWUPD2')
    }

    get stateInput(){
        return $('#MIDRXC9')
    }

    get zipCodeInput(){
        return $('#DL5UCQT')
    }

    get phoneinput(){
        return $('#R7UOQKM')
    }



    async fillShippingDetails(details) {
        await this.streetAddressInput.setValue(details.address);
        await browser.pause(1000);
        await this.cityInput(details.city);
        await browser.pause(1000);
        await this.stateInput.selectByAttribute('value', '1');
        await browser.pause(1000);
        await this.zipCodeInput(details.zipcode);
        await browser.pause(1000);
        await this.phoneinput.setValue(details.phone);

    }

    get flatRate(){
        return $('//input[@value="flatrate_flatrate"]');
    }

    async selectFlatRate(){
        await this.flatRate.click();
    }

    get billingAndShippingCheckbox() { 
        return $('span[data-bind*="My billing and shipping address are the same"]');
    }
    
    async checkBillingAndShipping() {
        try{
            const checkbox = await this.billingAndShippingCheckbox;
            const isChecked = await checkbox.isSelected();
            if (!isChecked){
                await checkbox.click();
            }
        } catch (error) {
            console.error('There was an error handling the checkbox:',error);
        }

    }

    get placeOrderButton() { 
        return $('span[data-bind*="Place Order"]'); 
    }

    async clickPlaceOrder() {
        await this.clickPlaceOrder();
    }

    get confirmationMsg(){
        return $('span.base[data-ui-id="page-title-wrapper"]');
    }

    get orderNumber(){
        return $('//a[@class="order-number"]');
    }

    async noticeTheThankYouAndOrderNumber(){
        await this.confirmationMsg.getText();
        await this.orderNumber.getText();

    }

   
}

module.exports = new Checkout();
