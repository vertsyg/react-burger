import { ADD_INGREDIENT, CLEAR_CONSTRUCTOR_INGREDIENTS, DELETE_INGREDIENT, SORT_INGREDIENTS } from "../actions/ingredients"
import { burgerConstructorInitialState, burgerConstructorReducer } from "./constructor-reducer"

export const testBun = {
  _id: "643d69a5c3f7b9001cfa093c",
  name: "Краторная булка N-200i",
  type: "bun",
  proteins: 80,
  fat: 24,
  carbohydrates: 53,
  calories: 420,
  price: 1255,
  image: "https://code.s3.yandex.net/react/code/bun-02.png",
  image_mobile: "https://code.s3.yandex.net/react/code/bun-02-mobile.png",
  image_large: "https://code.s3.yandex.net/react/code/bun-02-large.png",
  __v: 0,
  uuid: '1'
}

export const testMainIngredient = {
  _id: "643d69a5c3f7b9001cfa0941",
  name: "Биокотлета из марсианской Магнолии",
  type: "main",
  proteins: 420,
  fat: 142,
  carbohydrates: 242,
  calories: 4242,
  price: 424,
  image: "https://code.s3.yandex.net/react/code/meat-01.png",
  image_mobile: "https://code.s3.yandex.net/react/code/meat-01-mobile.png",
  image_large: "https://code.s3.yandex.net/react/code/meat-01-large.png",
  __v: 0,
  uuid: '2'
}

export const testSauceIngredient = {
  _id: "643d69a5c3f7b9001cfa0942",
  name: "Соус Spicy-X",
  type: "sauce",
  proteins: 30,
  fat: 20,
  carbohydrates: 40,
  calories: 30,
  price: 90,
  image: "https://code.s3.yandex.net/react/code/sauce-02.png",
  image_mobile: "https://code.s3.yandex.net/react/code/sauce-02-mobile.png",
  image_large: "https://code.s3.yandex.net/react/code/sauce-02-large.png",
  __v: 0,
  uuid: '3'
}

describe('burger constructor reducer', () => {
  test('should return the initial state', () => {
    expect(burgerConstructorReducer(undefined, {} as any)).toEqual(burgerConstructorInitialState)
  })

  test('should handle ADD_INGREDIENT for bun', () => {
    expect(burgerConstructorReducer(burgerConstructorInitialState, { type: ADD_INGREDIENT, ingredient: testBun})).toEqual({
      ...burgerConstructorInitialState,
      bun: testBun
    })
  })

  test('should handle ADD_INGREDIENT for other ingredients', () => {
    expect(burgerConstructorReducer(burgerConstructorInitialState, { type: ADD_INGREDIENT, ingredient: testMainIngredient})).toEqual({
      ...burgerConstructorInitialState,
      ingredients: [testMainIngredient]
    })
  })
  
  test('should handle DELETE_INGREDIENT', () => {
    expect(burgerConstructorReducer({...burgerConstructorInitialState, ingredients : [testMainIngredient, testSauceIngredient]}, { type: DELETE_INGREDIENT, uuid: '2' })).toEqual({
      ...burgerConstructorInitialState,
      ingredients: [testSauceIngredient]
    })
  })

  test('should handle SORT_INGREDIENTS', () => {
    expect(burgerConstructorReducer(
      {...burgerConstructorInitialState, ingredients : [testMainIngredient, testSauceIngredient]},{ type:SORT_INGREDIENTS, newIngredients: [testSauceIngredient, testMainIngredient] })).toEqual({
      ...burgerConstructorInitialState,
      ingredients: [testSauceIngredient, testMainIngredient]
    })
  })

  test('should handle CLEAR_CONSTRUCTOR_INGREDIENTS', () => {
    expect(burgerConstructorReducer(
      {...burgerConstructorInitialState, bun: testBun, ingredients: [testMainIngredient, testSauceIngredient]},{ type:CLEAR_CONSTRUCTOR_INGREDIENTS })).toEqual({
      ...burgerConstructorInitialState,
      bun: null,
      ingredients: []
    })
  })
})