/// <reference types = "Cypress"/>
import {homePageElements} from '../../fixtures/ui/homePage/pageElements'

describe ('Verify home page items',()=>{

    beforeEach(()=>{
        cy.visit('https://www.ebay.com.au/')
    })
    it('Should be able to verify Search field ',()=>{
        cy.searchItem('mobile');
    })


    it('Should be able verify Shopping cart window ',()=>{
        cy.cartChk();
    })
})