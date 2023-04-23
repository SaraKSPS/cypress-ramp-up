const cartPage = require('../../pages/cart.page');
const checkoutFinalPage = require('../../pages/checkout-final.page');
const checkoutOnePage = require('../../pages/checkout-one.page');
const checkoutTwoPage = require('../../pages/checkout-two.page');
const inventoryPage = require('../../pages/inventory.page');
const loginPage = require('../../pages/login.page');

describe("Exemplo com SauceDemo", () => {
    beforeEach(() => {
        loginPage.openPage();
    })
    it("Completar ordem", () => {
        loginPage.login('standard_user', 'secret_sauce');
        inventoryPage.addProducts();
        inventoryPage.openCart();
        cartPage.checkout();
        checkoutOnePage.preencherInfo('Sara', 'Silva', '1325458');
        checkoutOnePage.clickContinue();
        checkoutTwoPage.completarOrder();
        checkoutFinalPage.verificarTextoOrder();

    })

})