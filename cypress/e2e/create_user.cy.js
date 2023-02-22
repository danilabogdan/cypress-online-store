


describe('Online store testing', () => {
  it('Create new user', () => {
    cy.visit('https://automationexercise.com/products')

    //cy.get('.form-control.input-lg').type('polo')

    cy.get(".input-lg").type("polo")

    cy.get('.fa.fa-search').click()

    cy.get('.form-control.input-lg').click()

  })
})