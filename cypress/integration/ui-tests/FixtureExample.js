/// <reference types="Cypress" />


describe('Fixture Demo', function() {

  before(function(){
    cy.fixture('example').then(function(data)
    {
        this.data=data;
        
    });
  });//before

  it('Open SeleniumPractise Page', function() {
    cy.visit('https://rahulshettyacademy.com/angularpractice/');
   
    cy.get('[name="name"]').eq(0).type(this.data.name);
    cy.get('select').select(this.data.gender);
  }) ;//it

  });//describe