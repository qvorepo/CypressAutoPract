class ProductPage
{
  getCheckoutButton()
  {
      return cy.get('ul.navbar-nav li.nav-item').contains('Checkout');
  }
}
export default ProductPage;