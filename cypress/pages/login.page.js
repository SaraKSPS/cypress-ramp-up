const elements = {
    campoUserName: "[id=user-name]",
    campoSenha: "[id=password]",
    botaoLogin: "[id=login-button]",

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
}

export default new LoginPage();