class CheckoutPage
{
  getItemAmount()
  {
    return cy.get('tr td:nth-child(4) strong');
  }

  getTotal()
  {
    return cy.get('tr td:nth-child(5) h3 strong');
  }


  getCheckoutButton()
  {
      return cy.contains('Checkout');
  }

  getCountry()
  {
    return cy.get('#country');
  }

  getSubmitButton()
  {
    return cy.get('input[type="submit"][value="Purchase"]');
  }
  getAlertSuccessBox()
  {
    return cy.get('.alert-success');
  }

  getAgreeCheckbox()
  {
    return cy.get('#checkbox2');
  }

  getSuggestions()
  {
    return cy.get('.suggestions li a');
  }
}
export default CheckoutPage;