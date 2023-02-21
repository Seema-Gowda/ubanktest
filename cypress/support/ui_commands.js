// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })


import { homePageElements } from '../fixtures/ui/homePage/pageElements'

Cypress.Commands.add('searchItem', (itemToSearch) => {
    cy.get(homePageElements.homepage.txtSearch)
        .should('exist')
        .should('be.visible')
        .type(itemToSearch);
    cy.wait(2000);
    cy.get(homePageElements.homepage.BtnSearch)
        .should('exist')
        .should('be.visible')
        .click();
})

Cypress.Commands.add('cartChk', () => {
    cy.get(homePageElements.homepage.btnShopCart)
        .should('exist')
        .should('be.visible')
        .click()
        .wait(3000);
    cy.get(homePageElements.cartpage.titlCart)
        .should('have.text', 'Shopping cart');
})


