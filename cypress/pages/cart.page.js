const elements = {
    botaoCheckout: '[id=checkout]',
    botaoRemoveBackpack: '[id=remove-sauce-labs-backpack]',
    botaoRemoveJacket: '[id=remove-sauce-labs-fleece-jacket]',
    botaoContinueShopping: '[id=continue-shopping]',

}

class CartPage {

    checkout() {
        cy.get(elements.botaoCheckout).click()

    }
    removeItens(){
        cy.get(elements.botaoRemoveBackpack).click()
        cy.get(elements.botaoRemoveJacket).click()
    }
    retornarInventoryPage() {
        cy.get(elements.botaoContinueShopping).click()
    }
}

export default new CartPage();