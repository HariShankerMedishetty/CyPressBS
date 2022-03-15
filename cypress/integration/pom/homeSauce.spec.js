/// <reference types="Cypress" />
import homeSaucePage from "../../page/hmsl/homeSaucePage"
import inventorypage from "../../page/hmsl/inventorypage"

describe ('pom Implementation', () => {

    beforeEach(() => {
        cy.visit ('https://www.saucedemo.com/')
    }    );
            
        it('should login to inventorypage', () =>{
            homeSaucePage.typeUsername('standard_user');
            homeSaucePage.typepassword('secret_sauce');
            homeSaucePage.Clicklogin();

           inventorypage.elements.titlespan().should('have.text','Products');
    })
    });