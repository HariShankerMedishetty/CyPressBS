/// <reference types="Cypress" />

class homeSaucePage{
        elements = {

            usernameInput: () => cy.get('#user-name'),  
            passwordInput: () => cy.get('#password'),
            loginBtn: () => cy.get ('#login-button'),
            errorMessage: () => cy.get ('#h3[data-test="error"]')
                }

    typeUsername(username){
        this.elements.usernameInput().type(username)
    }
    typepassword(password){
        this.elements.passwordInput().type(password)
    }

    Clicklogin(){
        this.elements.loginBtn().click();
    }

}
module.exports = new homeSaucePage();
