import { GET_INGREDIENTS_ERROR, GET_INGREDIENTS_REQUEST, GET_INGREDIENTS_SUCCESS } from "../actions/ingredients"
import { testBun, testMainIngredient, testSauceIngredient } from "./constructor-reducer.test"
import { dataInitialState, ingredientsReducer } from "./ingredients-reducer"

const testIngredients = [testBun, testMainIngredient, testSauceIngredient]

describe('burger ingredients reducer', () => {
  test('should return the initial state', () => {
    expect(ingredientsReducer(undefined, {} as any)).toEqual(dataInitialState)
  })

  test('should handle GET_INGREDIENTS_REQUEST', () => {
    expect(ingredientsReducer(dataInitialState, { type: GET_INGREDIENTS_REQUEST })).toEqual({
      ...dataInitialState,
      ingredientsRequest: true,
    })
  })

  test('should handle GET_INGREDIENTS_SUCCESS', () => {
    expect(ingredientsReducer(dataInitialState, { type: GET_INGREDIENTS_SUCCESS, ingredients: testIngredients })).toEqual({
      ...dataInitialState,
      ingredients: testIngredients,
      ingredientsRequest: false,
    })
  })
  
  test('should handle GET_INGREDIENTS_ERROR', () => {
    expect(ingredientsReducer(dataInitialState, { type: GET_INGREDIENTS_ERROR })).toEqual({
      ...dataInitialState,
      ingredientsRequest: false,
      ingredientsFailed: true
    })
  })
})