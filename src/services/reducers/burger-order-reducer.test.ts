import { CLOSE_ORDER_MODAL, CREATE_ORDER_ERROR, CREATE_ORDER_REQUEST, CREATE_ORDER_SUCCESS, OPEN_ORDER_MODAL } from "../actions/ingredients"
import { burgerOrderReducer, orderInitialState } from "./burger-order-reducer"

describe('burger order reducer', () => {
  test('should return the initial state', () => {
    expect(burgerOrderReducer(undefined, {} as any)).toEqual(orderInitialState)
  })

  test('should handle CREATE_ORDER_REQUEST', () => {
    expect(burgerOrderReducer(orderInitialState, { type: CREATE_ORDER_REQUEST})).toEqual({
      ...orderInitialState,
      orderRequest: true
    })
  })

  test('should handle CREATE_ORDER_SUCCESS', () => {
    const testOrderNumber = '123'
    expect(burgerOrderReducer(orderInitialState, { type: CREATE_ORDER_SUCCESS, orderNumber: testOrderNumber })).toEqual({
      ...orderInitialState,
      orderNumber: testOrderNumber,
      orderRequest: false
    })
  })

  test('should handle CREATE_ORDER_ERROR', () => {
    expect(burgerOrderReducer(orderInitialState, { type: CREATE_ORDER_ERROR })).toEqual({
      ...orderInitialState,
      orderRequest: false,
      orderFailed: true
    })
  })

  test('should handle OPEN_ORDER_MODAL', () => {
    expect(burgerOrderReducer(orderInitialState, { type: OPEN_ORDER_MODAL })).toEqual({
      ...orderInitialState,
      isModalOpen: true
    })
  })
    
  test('should handle CLOSE_ORDER_MODAL', () => {
    expect(burgerOrderReducer(orderInitialState, { type: CLOSE_ORDER_MODAL })).toEqual({
      ...orderInitialState,
      isModalOpen: false
    })
  })
})