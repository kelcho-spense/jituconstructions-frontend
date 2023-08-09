/// <reference types="Cypress"/>

describe('Navigation', ()=>{
    it('should navigate to and fro', ()=>{
        cy.visit('http://127.0.0.1:5500/');
        cy.get('.jointeam').click()

        cy.location('pathname').should('equal', '/register.html')

        cy.get('[data-cy="login"]').click()

        cy.location('pathname').should('equal', '/login.html')

        cy.go('back')
        cy.location('pathname').should('not.equal', '/login.html')

        cy.go('forward')
        cy.location('pathname').should('equal', '/login.html')
    })
})