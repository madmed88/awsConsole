describe('AWSCosnole', () => {
  it('should correctly login user', () => {
    cy.visit('https://aws-console.herokuapp.com/');
    cy.get('#email').type('medbelh@gmail.com');
    cy.get('#password').type('madmed88');
    cy.get('.Login-button').click();
    cy.get('.grid').should('exist')
  });

  it('should list, filter and sort instances', () => {
    cy.get('header-item:nth-child(2) input').type('999');
    cy.get('.grid > span').should('have.length', 7)
    cy.get('header-item:nth-child(2) input').clear();
    cy.get('header-item:nth-child(1) button').click();
    cy.get('.grid > span').first().should('have.text', 'a');
  });

  it('should log out', () => {
    cy.get('.logout-button').click();
    cy.get('.Login-button').should('exist')
  });
});
