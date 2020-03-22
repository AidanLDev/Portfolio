const url = "";

describe("My first test", function() {
  it("Make an assetion", function() {
    cy.visit("https://example.cypress.io");
    cy.contains("type").click();
    cy.pause();
    cy.url().should("include", "/commands/actions");

    cy.get("#email1")
      .type("fake@email.com")
      .should("have.value", "fake@email.com");
  });
});
