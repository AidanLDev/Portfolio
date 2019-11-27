describe("Home sweet home", function() {
  it("Successfully loads the root page", function() {
    cy.visit("/");
  });
  it("Contains a clickable logo", function() {
    cy.contains("Aidan Lowson");
    cy.get("[class*=logoContainer]").click();
  });
  it("Contains a back to top button", function() {
    cy.scrollTo("bottom");
    cy.get("[class*=backToTopWrapper]").click();
  });
});
