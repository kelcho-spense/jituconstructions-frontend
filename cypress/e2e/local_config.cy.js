/// <reference types="Cypress"/>

describe('Explains local configurations', {
    defaultCommandTimeout: 10000,
    execTimeout : 5000, //cy.exec
    taskTimeout : 4000 //cy.task
},()=>{

    it('configuring test case', {
        // browser: 'firefox',
        execTimeout: 6000
    }, ()=>{
        cy.visit('login.html')
    })
})