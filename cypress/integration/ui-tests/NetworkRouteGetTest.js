/// <reference types="Cypress" />

describe('Network Route Get Test', function() {

var url="https://example.cypress.io/commands/network-requests";

  it('Network Route Get Test', function() {
    

    cy.visit(url);
cy.server();
// Listen to GET to comments/1
cy.route('GET', 'comments/*').as('getComment')

// we have code that gets a comment when
// the button is clicked in scripts.js
cy.get('.network-btn').click()

// https://on.cypress.io/wait
cy.wait('@getComment').its('status').should('eq', 200)



  }) ;//it

  });//describe