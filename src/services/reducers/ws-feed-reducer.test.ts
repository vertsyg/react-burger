import { WS_FEED_CLOSE, WS_FEED_ERROR, WS_FEED_GET_ORDERS, WS_FEED_OPEN } from "../actions/web-socket"
import { testOrder } from "./modal-reducer.test"
import { WSFeedInitialState, WSFeedReducer } from "./ws-feed-reducer"

describe('web socket feed reducer', () => {
  test('should return the initial state', () => {
    expect(WSFeedReducer(undefined, {} as any)).toEqual(WSFeedInitialState)
  })

  test('should handle WS_FEED_OPEN', () => {
    expect(WSFeedReducer(WSFeedInitialState, { type: WS_FEED_OPEN })).toEqual({
      ...WSFeedInitialState,
      wsConnected: true
    })
  })

  test('should handle WS_FEED_ERROR', () => {
    const testError = new Event('test error')
    expect(WSFeedReducer(WSFeedInitialState, { type: WS_FEED_ERROR, wsError: testError })).toEqual({
      ...WSFeedInitialState,
      wsError: testError
    })
  })

  test('should handle WS_FEED_CLOSE', () => {
    expect(WSFeedReducer(WSFeedInitialState, { type: WS_FEED_CLOSE })).toEqual({
      ...WSFeedInitialState,
      wsConnected: false
    })
  })

  test('should handle WS_FEED_GET_ORDERS', () => {
    expect(WSFeedReducer(WSFeedInitialState, { type: WS_FEED_GET_ORDERS, orders: [testOrder], total: 1, totalToday: 0 })).toEqual({
      ...WSFeedInitialState,
      orders: [testOrder],
      total: 1,
      totalToday: 0
    })
  })
})