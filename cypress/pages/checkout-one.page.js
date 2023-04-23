const elements = {
    campoFirstName: '[id=first-name]',
    campoLastName: '[id=last-name]',
    campoPostalCode: '[id=postal-code]',
    botaoContinue: '[id=continue]',

}

class CheckoutOnePage {

    preencherInfo(firstName, lastName, postalCode) {
        cy.get(elements.campoFirstName).type(firstName)
        cy.get(elements.campoLastName).type(lastName)
        cy.get(elements.campoPostalCode).type(postalCode)
    }
    clickContinue() {
        cy.get(elements.botaoContinue).click()

    }

}

export default new CheckoutOnePage();