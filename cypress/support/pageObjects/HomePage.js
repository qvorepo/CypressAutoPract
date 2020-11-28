class HomePage
{
    getNameEditBox()
    {
        return cy.get('[name="name"]').eq(0);
    }

    getTwoWayDataBinding()
    {
        return cy.get('h4 [name="name"]').eq(0);
    }

    getGender()
    {
        return cy.get('select');
    }

    getEntrepreneur()
    {
        return cy.get('#inlineRadio3');
    }

    getShopTab()
    {
        return cy.get('.navbar-nav').contains('Shop');
    }
    getBirthDate()
    {
        return  cy.get('[name="bday"]');
    }

}
export default HomePage;