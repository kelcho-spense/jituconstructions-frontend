/// <reference types="Cypress"/>

describe('Uses method chaining', ()=>{

    beforeEach(()=>{
        cy.visit('login.html')
    })

    it('uses aliases and variables', ()=>{

        cy.get('.txtloginemail').type('john.wachira@yopmail.com')
        cy.get('.txtloginpwd').type('12345678')
        // const registerBtn = cy.get('.btnlogin')

        // registerBtn.click()

        cy.get('.btnlogin').as('loginBtn')
        cy.get('@loginBtn').click()

        cy.get('.successmsg')
    })

    it('uses then function', ()=>{
        cy.get('.txtloginemail').type('john.wachira@yopmail.com')
        cy.get('.txtloginpwd').type('12345678')

        cy.get('.btnlogin').as('loginButton')
        // cy.get('@loginButton').click()
        // cy.get('@loginButton').should('contain', 'Loading')
        // cy.get('@loginButton').should('eq', 'Loading')

        cy.get('@loginButton').click().then((el)=>{
            expect(el.val()).to.equal('Loading')
            expect(el.val()).to.contain('Loading')
            cy.get('.successmsg')
        })
    })
})