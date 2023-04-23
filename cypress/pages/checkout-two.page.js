const elements = {
    botaoFinish: '[id=finish]',

}

class CheckoutTwoPage {

    completarOrder() {
        cy.get(elements.botaoFinish).click()

    }
}
export default new CheckoutTwoPage();