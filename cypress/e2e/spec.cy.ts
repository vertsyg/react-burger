import { BASE_URL } from "../../src/utils/api"

describe('Application', () => {
  beforeEach(() => {
    cy.visit('/')
    cy.intercept('GET', `${BASE_URL}/ingredients`, { fixture : 'ingredients.json'}).as('getIngredients')
    cy.intercept('GET', `${BASE_URL}/auth/user`, { fixture: 'login.json' }).as('getLogin')

    window.localStorage.setItem(
      'accessToken',
      JSON.stringify('test-accessToken')
    )
    window.localStorage.setItem(
      'refreshToken',
      JSON.stringify('test-refreshToken')
    )
  })

  afterEach(() => {
    cy.clearLocalStorage()
  })

  it('drag&drop is working correctly', () => {
    cy.get('[class^=ingredients-group_link]').contains('Краторная булка N-200i').trigger('dragstart')
    cy.get('[class^=burger-constructor_drop_zone]').trigger('drop')

    cy.get('[class^=ingredients-group_link]').contains('Говяжий метеорит (отбивная)').trigger('dragstart')
    cy.get('[class^=burger-constructor_drop_zone]').trigger('drop')
  })

  it('create order correctly', () => {

    cy.get('[class^=ingredients-group_link]').contains('Краторная булка N-200i').trigger('dragstart')
    cy.get('[class^=burger-constructor_drop_zone]').trigger('drop')

    cy.get('[class^=ingredients-group_link]').contains('Говяжий метеорит (отбивная)').trigger('dragstart')
    cy.get('[class^=burger-constructor_drop_zone]').trigger('drop')

    cy.get('button').contains('Оформить заказ').click()

    cy.intercept('POST', `${BASE_URL}/orders`, { fixture: 'order.json' }).as('postOrder')
  })
})