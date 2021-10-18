describe('Appointments', () => {
  beforeEach(() => {
    cy.request("GET", "/api/debug/reset");
    cy.visit('/');
    cy.contains('Monday');
  });

  it('should book an interview', () => {
    cy.get('[alt=Add]')
      .first()
      .click();

    cy.get('[data-testid=student-name-input]').type('Lydia Miller-Jones');
    cy.get("[alt='Sylvia Palmer']").click();

    cy.contains('Save').click();

    // Verify that we show the student and interviewer names within and element that has the ".appointment__card--show" class. Don't wait for the Save cicle effect
    cy.contains('.appointment__card--show', 'Lydia Miller-Jones');
    cy.contains('.appointment__card--show', 'Sylvia Palmer');
  });

  it('should edit an interview', () => {
    cy.get('[alt=Edit]')
      .first()
      .click({ force: true });

    cy.get('[data-testid=student-name-input]').clear().type('Jairo Aguirre');
    cy.get("[alt='Tori Malcolm']").click();

    cy.contains('Save').click();
    
    // cy.contains('.appointment__card--show', 'Jairo Aguirre');
    // cy.contains('.appointment__card--show', 'Tori Malcolm');
  });

  it('should cancel an interview', () => {
    cy.get('[alt=Delete]')
      .click({ force: true });

    cy.contains('Confirm').click();
    
    // "Deleting" indicator should exist. Cypress will make sure that we show the "Deleting" indicator before moving to the next command.
    cy.contains("Deleting").should("exist");
    // "Deleting" indicator should not exist. Cypress will keep checking until we remove the indicator, or reach a timeout to move on.
    cy.contains("Deleting").should("not.exist");

    // Check that the ".appointment__card--show" element that contains the text "Archie Cohen" should not exist.
    cy.contains(".appointment__card--show", "Archie Cohen")
      .should("not.exist");
  });
});