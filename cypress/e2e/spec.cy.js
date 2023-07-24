describe('Page load behavior', () => {  
  beforeEach(() => {
    cy.intercept('GET', 'http://localhost:3001/api/v1/tricks', {
      statusCode: 200,
      fixture: 'example'
    }).as('pageLoad');
    cy.visit('http://localhost:3000/');
  });
  
  it('Should show page elements', () => {
    cy.wait('@pageLoad').then((intercept) => {
      cy.url().should('eq', 'http://localhost:3000/')
      cy.get('h1').should('contain', 'Sick Trick Wish List');
      cy.get('form')
        .get('select[data-cy="stance"]')
        .get('input[data-cy="name"]')
        .get('select[data-cy="obstacle"]')
        .get('input[data-cy="tutorial"]')
        .get('input[data-cy="submit"]');
      cy.get('section[data-cy="cards-container"]').children().should('have.length', 3);
      cy.get('article').first().children().should('have.length', 4);
      cy.get('article').first().contains('p', 'Regular Treflip');
      cy.get('article').first().contains('p', 'Obstacle: Flat ground');
      cy.get('article').first().contains('p', 'Link to Tutorial:');
      cy.get('article').first().contains('a', 'https://www.youtube.com/watch?v=XGw3YkQmNig');
      cy.get('article').last().children().should('have.length', 4);
      cy.get('article').last().contains('p', 'Regular Frontside 50-50, backside 180 out');
      cy.get('article').last().contains('p', 'Obstacle: Ledge');
      cy.get('article').last().contains('p', 'Link to Tutorial:');
      cy.get('article').last().contains('a', 'https://www.youtube.com/watch?v=9N9swrZU1HA');
    });
  });
});