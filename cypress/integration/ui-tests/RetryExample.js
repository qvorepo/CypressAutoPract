/// <reference types="Cypress" />

//const { has, hasIn } = require("cypress/types/lodash");

describe('Retry Example', () => {
    it('Retry Example', {retries:4},() => {
     const items=[
       {name: 'Bike', price: 100},
       {name: 'TV', price: 200},
       {name: 'Album', price: 10},
       {name: 'Book', price: 5},
       {name: 'Phone', price: 500},
       {name: 'Computer', price: 1000},
       {name: 'Keyboard', price: 25}

     ];

     const filteredItems=items.filter((item)=>{
      expect("a").not.equal("a");//This test will fail and retry.
       return item.price <=100;
       
     });

    
     cy.log(JSON.stringify(items));
     cy.log(JSON.stringify(filteredItems))

     const album=items.filter((item)=>{
      return item.name ==='Album';
    });
    cy.log(JSON.stringify(album));

    const hasInexpensiveItems=items.some((item)=>{
      return item.price <=100;
    });
    cy.log(hasInexpensiveItems);

    const hasExpensiveItems=items.every((item)=>{
      return item.price >=3000;
    });
    cy.log(hasExpensiveItems);

    const total=items.reduce((currTotal,item)=>{
      return item.price + currTotal;
    },0);
    cy.log(total);

    const auto=["Honda", "Toyota", "Chevrolet", "Hyundai"];
    cy.log("The auto array includes Hyundai " + auto.includes("Hyundai"));
         

    }) 

  })