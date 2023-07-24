describe('Page load behavior', () => {  
  beforeEach(() => {
    cy.loadPage();
  });
  
  it('Should show page header and form', () => {
    cy.wait('@loadPage').then((intercept) => {
      cy.url().should('eq', 'http://localhost:3000/')
      cy.get('h1').should('contain', 'Sick Trick Wish List');
      cy.get('select[data-cy="stance"]');
      cy.get('input[data-cy="name"]');
      cy.get('select[data-cy="obstacle"]');
      cy.get('input[data-cy="tutorial"]');
      cy.get('input[data-cy="submit"]');
    });
  });

  it('Should show tricks', () => {
    cy.wait('@loadPage').then((intercept) => {
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

describe('Form completion and submission', () => {  
  beforeEach(() => {
    cy.loadPage();
  });

  it('Should type/select inputs and add new trick to page', () => {
    cy.wait('@loadPage').then((intercept) => {
      cy.get('select[data-cy="stance"]').select('Switch');
      cy.get('input[data-cy="name"]').type('Rachel\'s Rad Trick')
      cy.get('select[data-cy="obstacle"]').select('Pool');
      cy.get('input[data-cy="tutorial"]').type('pretend this is a link');
      cy.get('input[data-cy="submit"]').click();

      cy.get('article').last().contains('p', 'Switch Rachel\'s Rad Trick');
      cy.get('article').last().contains('p', 'Obstacle: Pool');
      cy.get('article').last().contains('p', 'Link to Tutorial:');
      cy.get('article').last().contains('a', 'pretend this is a link');
    });
  });
});




