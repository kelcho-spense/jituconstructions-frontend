/// <reference types="Cypress"/>

describe('Utilising basic features', ()=>{
    it('uses contains', ()=>{
        cy.visit('register.html')
        cy.get('[data-cy="login"]').contains('LOGIN')
        cy.contains('LOGIN')
        cy.get('a').contains('LOGIN')
    })

    it('should not have forgot password on register page', ()=>{
        cy.visit('register.html')
        cy.get('a').should('not.contain', 'Forgot')
    })

    it('should allow user to reset password', ()=>{
        cy.visit('login.html')
        cy.get('a').should('contain', 'Forgot')
    })

    it ('simulates user interaction', ()=>{
        cy.visit('login.html')

        // cy.get('.txtloginemail').type('john.wachira@yopmail.com')
        // cy.get('.txtloginpwd').type('12345678')
        // cy.get('.btnlogin').click()

        cy.Login()

        cy.get('.successmsg')
    })

    it('selects a value in a dropdown', ()=>{
        cy.visit('register.html')
        cy.get('#select-options').select('close')
    })

    it('differentiate get and find', ()=>{
        cy.visit('login.html')

        cy.get('div input')
        cy.get('form').find('div').find('input')

        cy.get('div').get('input')
    })
})