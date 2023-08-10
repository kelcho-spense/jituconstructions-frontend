/// <reference types="Cypress"/>

describe('Select an element', ()=>{
    before(()=>{
        cy.visit('login.html')
    })

    it('selects by data-cy attribute', ()=>{
        // cy.get('[data-cy="login-email"]')
        cy.getElementByDataCyAttr('login-email')
        // cy.get('[data-cy="login-pwd"]')
        cy.getElementByDataCyAttr('login-pwd')
        // cy.get('[data-cy="login-btn"]')
        cy.getElementByDataCyAttr('login-btn')
    })
})