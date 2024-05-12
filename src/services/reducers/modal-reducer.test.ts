import { CLOSE_INGREDIENT_MODAL, CLOSE_WS_ORDER_MODAL, OPEN_INGREDIENT_MODAL, OPEN_WS_ORDER_MODAL } from "../actions/ingredients"
import { testBun } from "./constructor-reducer.test"
import { modalInitialState, modalReducer } from "./modal-reducer"

export const testOrder = {
  ingredients: ['1', '2'],
  status: 'done', 
  number: 39808,
  createdAt: "2024-05-12T10:17:40.411Z",
  updatedAt: "2024-05-12T10:17:41.068Z",
  name: "Флюоресцентный люминесцентный био-марсианский бургер",
  _id: "6640974497ede0001d06a389"
}

describe('modal reducer', () => {
  test('should return the initial state', () => {
    expect(modalReducer(undefined, {} as any)).toEqual(modalInitialState)
  })

  test('should handle OPEN_INGREDIENT_MODAL', () => {
    expect(modalReducer(modalInitialState, { type: OPEN_INGREDIENT_MODAL, ingredient: testBun})).toEqual({
      ...modalInitialState,
      isModalOpen: true,
      selectedIngredient: testBun
    })
  })

  test('should handle OPEN_WS_ORDER_MODAL', () => {
    expect(modalReducer(modalInitialState, { type: OPEN_WS_ORDER_MODAL, order: testOrder})).toEqual({
      ...modalInitialState,
      isModalOpen: true,
      selectedOrder: testOrder
    })
  })

  test('should handle CLOSE_INGREDIENT_MODAL', () => {
    expect(modalReducer(modalInitialState, { type: CLOSE_INGREDIENT_MODAL})).toEqual({
      ...modalInitialState,
      isModalOpen: false,
      selectedIngredient: null
    })
  })

  test('should handle CLOSE_WS_ORDER_MODAL', () => {
    expect(modalReducer(modalInitialState, { type: CLOSE_WS_ORDER_MODAL})).toEqual({
      ...modalInitialState,
      isModalOpen: false,
      selectedOrder: null
    })
  })
})