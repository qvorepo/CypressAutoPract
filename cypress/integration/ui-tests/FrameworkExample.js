/// <reference types="Cypress" />
import HomePage from '../../support/pageObjects/HomePage'
import ProductPage from '../../support/pageObjects/ProductPage';
import CheckoutPage from '../../support/pageObjects/CheckoutPage';

describe('Framework Example', function() {

  before(function(){
    cy.fixture('example').then(function(data)
    {
        this.data=data;
        
    });
  });

  it('Open SeleniumPractise Page', function() {
    
    const homePage=new HomePage();
    const productPage=new ProductPage();
    const checkoutPage=new CheckoutPage();

    cy.visit(Cypress.env('url'));
   
    homePage.getNameEditBox().type(this.data.name);
    homePage.getNameEditBox().should('have.value', this.data.name);
    homePage.getNameEditBox().should('have.attr', 'minlength',2);
   
    homePage.getGender().select(this.data.gender);
    
    homePage.getEntrepreneur().should('be.disabled');

    homePage.getBirthDate().should('have.attr', 'type', 'date');
    homePage.getTwoWayDataBinding().should('have.value', this.data.name);//Name field by the two way binding.

    Cypress.config("defaultCommandTimeout", 10000);
    homePage.getShopTab().click();

    //cy.pause();

    //Iterate over each product name then select it.
    this.data.productName.forEach(function(element)
    {
      cy.selectProduct(element);

    });



    //Checkout
    productPage.getCheckoutButton().click();
    
   var sum=0;

   //Sum
   checkoutPage.getItemAmount().each(($el, index, $list) =>
   {
     var amt=$el.text().split(" ");
     sum=Number(sum) + Number(amt[1].trim());

   }).then(function(){
    cy.log(sum);
   });

   checkoutPage.getTotal().then(function(element)
   {
     //Get amt for the total
     var amt=element.text().split(" ");
     expect(sum).to.equal(Number(amt[1].trim()));//Sum of all items to be equal the total amount.

   });
  

    checkoutPage.getCheckoutButton().click();
    checkoutPage.getCountry().type(this.data.country);
    checkoutPage.getSuggestions().click();
    checkoutPage.getCountry().should('have.value', this.data.country);
    
    checkoutPage.getAgreeCheckbox().click({force: true});
    
    checkoutPage.getSubmitButton().click();
    //checkoutPage.getAlertSuccessBox().should('have.text', this.data.successMessage);
    checkoutPage.getAlertSuccessBox().then(function(element)
    {
       expect(element.text().includes(this.data.successMessage)).to.be.true;
    });


  }) ;//it

  });//describe