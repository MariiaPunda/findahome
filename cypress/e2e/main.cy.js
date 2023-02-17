const selectors = {
  map: '[data-cy="map"]',
  cards: '[data-cy="home-card"]',
  title: '[data-cy="home-title"]',
  image: '[data-cy="home-image"]',
  button: '[data-cy="home-button"]',
}

describe('Find homes page', () => {
  before(() => {
    cy.visit('/')
    cy.injectAxe()
  })

  it('should pass a11y check', () => {
    cy.checkA11y()
  })

  it('should show map and homes with information', () => {
    cy.visit('/')
      .get(selectors.map)
      .should('be.visible')
      .get(selectors.cards)
      .then(cards => {
        expect(cards).to.have.length(20)
      })
      .get(selectors.cards)
      .first()
      .find(selectors.image)
      .should('be.visible')

      .get(selectors.cards)
      .first()
      .find(selectors.title)
      .should('be.visible')

      .get(selectors.cards)
      .first()
      .find(selectors.button)
      .should('be.visible')
  })
})
