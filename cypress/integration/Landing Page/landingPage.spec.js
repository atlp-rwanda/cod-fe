describe('BN Landing Page Rendering', () => {
  it('Tests Header Navigation Links & Buttons', () => {
    cy.visit('/');
    expect(cy.findByRole('link', { name: /sign up/i }).click());
    expect(cy.findByRole('heading', { name: /signup to create an account/i }));
    expect(cy.findByTestId('homeBtn').click());
    expect(cy.get('#howItWorks').should('be.visible'));
  });
  it('Tests Landing Page Components', () => {
    expect(cy.get('#howItWorks').scrollIntoView().should('be.visible'));
    expect(cy.get('#section-destinations').scrollIntoView().should('be.visible'));
    expect(cy.findByTestId('nextBtn-topDestination').click());
    expect(cy.findByTestId('prevBtn-topDestination').click());
    expect(cy.get('#section-testimonials').scrollIntoView().should('be.visible'));
    expect(cy.findByTestId('nextBtn-testimonials').click());
    expect(cy.findByTestId('prevBtn-testimonials').click());
    expect(cy.get('#page-footer').scrollIntoView().should('be.visible'));
  });
});
