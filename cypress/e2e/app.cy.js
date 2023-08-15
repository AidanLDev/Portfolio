describe('Navigation', () => {
  it('Should navigate to available links', () => {
    cy.visit('http://localhost:3000/')

    cy.contains('Blogs').click()
    cy.contains('AL').click()
    cy.url().should('include', '/')
  })
})

describe('Display tags correctly', () => {
  it('Displays Body opening and closing tags', () => {
    cy.get('.top-tags').contains('body')
  })
})

describe('Title and card work', () => {
  it('Displays the title', () => {
    cy.get('[data-testid="first-name-title"]').contains('A')
    cy.get('[data-testid="last-name-title"]').contains('L')
  })
  // it('Displays a card with links', () => {
  //   cy.get('[href="https://twitter.com/AidanL94"] > .chakra-image').click()
  // })
})


/*
describe('Projects display and open project pages', () => {
  it('Displays project image', () => {
    cy.get('.style_projWrapper__sXhZp > :nth-child(1) > a > .chakra-image')
  })
  it('Opens a project', () => {
    cy.get('.style_projWrapper__sXhZp > :nth-child(1) > a > .chakra-image').click()
  })
  it('Opens a projects GitHub if it has one', () => {
    cy.get('[href="https://song-search-web-search.onrender.com/"] > .style_ghOverlay__apx1B > a > .chakra-image').click()
  })
})
*/

/*
describe('Showcase skills', () => {
  it('Displays a list of skills', () => {
    cy.get('.styles_skillsContainer__wKzZK > :nth-child(1) > .chakra-heading').contains('Skills')
    cy.get('.styles_skillsList__Ipq1C > :nth-child(2) > .chakra-text').contains('JavaScript')
  })
})
*/

describe('Certifications section', () => {
  it('Displays certifications header', () => {
    cy.contains('Certifications')
  })
  // it('Displays and opens certification', () => {
  //   cy.get('.styles_certContainer__g9f88 > :nth-child(2) > a > .chakra-image').click()
  // })
})
