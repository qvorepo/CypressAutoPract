/// <reference types="Cypress" />

describe('Network Request Test', function() {

var url="https://example.cypress.io/commands/network-requests";

  it('Network Route Post Test', function() {
    

    cy.visit(url);
cy.server();
// Listen to POST to comments
cy.route('POST', '/comments').as('postComment')

// we have code that posts a comment when
// the button is clicked in scripts.js
cy.get('.network-post').click()
cy.wait('@postComment')

// get the route
cy.get('@postComment').should((xhr) => {
  expect(xhr.requestBody).to.include('email')
  expect(xhr.requestHeaders).to.have.property('Content-Type')
  expect(xhr.responseBody).to.have.property('name', 'Using POST in cy.route()')
}) 

  }) ;//it

  });//describe