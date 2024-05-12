import { WS_PROFILE_GET_ORDERS, WS_PROFILE_ORDERS_CLOSE, WS_PROFILE_ORDERS_ERROR, WS_PROFILE_ORDERS_OPEN } from "../actions/web-socket"
import { testOrder } from "./modal-reducer.test"
import { WSProfileOrdersInitialState, WSProfileOrdersReducer } from "./ws-profile-orders-reducer"

describe('web socket feed reducer', () => {
  test('should return the initial state', () => {
    expect(WSProfileOrdersReducer(undefined, {} as any)).toEqual(WSProfileOrdersInitialState)
  })

  test('should handle WS_PROFILE_ORDERS_OPEN', () => {
    expect(WSProfileOrdersReducer(WSProfileOrdersInitialState, { type: WS_PROFILE_ORDERS_OPEN })).toEqual({
      ...WSProfileOrdersInitialState,
      wsConnected: true
    })
  })

  test('should handle WS_PROFILE_ORDERS_ERROR', () => {
    const testError = new Event('test error')
    expect(WSProfileOrdersReducer(WSProfileOrdersInitialState, { type: WS_PROFILE_ORDERS_ERROR, wsError: testError })).toEqual({
      ...WSProfileOrdersInitialState,
      wsError: testError
    })
  })

  test('should handle WS_PROFILE_ORDERS_CLOSE', () => {
    expect(WSProfileOrdersReducer(WSProfileOrdersInitialState, { type: WS_PROFILE_ORDERS_CLOSE })).toEqual({
      ...WSProfileOrdersInitialState,
      wsConnected: false
    })
  })

  test('should handle WS_PROFILE_GET_ORDERS', () => {
    expect(WSProfileOrdersReducer(WSProfileOrdersInitialState, { type: WS_PROFILE_GET_ORDERS, orders: [testOrder], total: 1, totalToday: 0 })).toEqual({
      ...WSProfileOrdersInitialState,
      orders: [testOrder],
      total: 1,
      totalToday: 0
    })
  })
})