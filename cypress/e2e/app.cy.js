describe('Navigation', () => {
  it('Should navigate to available links', () => {
    cy.visit('http://localhost:3000/')

    cy.contains('Blogs').click()
    cy.contains('AL').click()
    cy.url().should('include', '/')
  })
})
