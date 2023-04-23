const elements = {
    adicionarBackpack: '[id=add-to-cart-sauce-labs-backpack]',
    adicionarJacket: '[id=add-to-cart-sauce-labs-fleece-jacket]',
    botaoOpenCart: '[id=shopping_cart_container]',

}

class InventoryPage {

    addProducts() {
        cy.get(elements.adicionarBackpack).click()
        cy.get(elements.adicionarJacket).click()
    }
    openCart() {
        cy.get(elements.botaoOpenCart).click()
    }
}

export default new InventoryPage();