describe('Navigation', () => {
  it('Should navigate to available links', () => {
    cy.visit('http://localhost:3000/')

    // cy.contains('Blogs').click()
    cy.contains('AL').click()
    cy.url().should('include', '/')
  })
})

describe('Display tags correctly', () => {
  it('Displays Body opening and closing tags', () => {
    cy.get('.top-tags').contains('body')
  })
})
