const elements = {
    textOrder: '[class=complete-header]',

}

class CheckoutFinalPage {

    verificarTextoOrder() {
        cy.get(elements.textOrder).invoke('text').then(
            (text) => {
                const expectedTitle = 'Thank you for your order!';

                expect(text).to.equal(expectedTitle)
            }
        )

    }
}
export default new CheckoutFinalPage();