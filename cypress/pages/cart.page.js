const elements = {
    botaoCheckout: '[id=checkout]',

}

class CartPage {

    checkout() {
        cy.get(elements.botaoCheckout).click()
    }

}

export default new CartPage();