describe('template spec', () => {
  it('passes', () => {
    cy.visit('https://example.cypress.io')
  })
});

describe('Order Pizza Form', () => {
  it('should allow adding text to the special instructions box', () => {
      cy.visit('/pizza');
      
      // Type text in the special instructions input
      cy.get('#special-text').type('Extra cheese, please');

      // Verify that the input value is as expected
      cy.get('#special-text').should('have.value', 'Extra cheese, please');
  });
});

describe('Order Pizza Form', () => {
  it('should allow selecting multiple toppings', () => {
      cy.visit('/pizza');

      // Check multiple checkboxes for toppings
      cy.get('.topping-category').eq(0).find('input[type="checkbox"]').check(['Pepperoni', 'Mushrooms']);

      // Verify that the selected toppings are checked
      cy.get('.topping-category').eq(0).find('input[type="checkbox"]').should('be.checked');
  });
});

describe('Order Pizza Form', () => {
  it('should allow submitting the form', () => {
      cy.visit('/pizza');

      cy.get('#name-input').type('John Doe');
      cy.get('#size-dropdown').select('medium');

      // Submit the form
      cy.get('#order-button').click();

      // Assert that the Thank You page is reached or any other expected behavior
      cy.url().should('include', '/thank-you');
  });
});