const elements = {
    campoUserName: "[id=user-name]",
    campoSenha: "[id=password]",
    botaoLogin: "[id=login-button]",
    textVerificationUser: "[data-test=error]",

}

class LoginPage {

    openPage() {
        cy.visit('https://saucedemo.com');

    }
    login(userName, senha) {
        cy.get(elements.campoUserName).type(userName)
        cy.get(elements.campoSenha).type(senha)
        cy.get(elements.botaoLogin).click()
    }
    verificarBlockedUser() {
        cy.get(elements.textVerificationUser).invoke('text').then(
            (text) => {
                const expectedTitle = 'Epic sadface: Sorry, this user has been locked out.';

                expect(text).to.equal(expectedTitle)
            }
        )

    }
}

export default new LoginPage();