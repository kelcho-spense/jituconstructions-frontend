/// <reference types="Cypress"/>

describe('Submita a login form', ()=>{

    beforeEach(()=>{
        cy.visit('login.html')
    })

    it('submits the login form', ()=>{
        cy.Login()
    })
})