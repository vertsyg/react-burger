import { WsFeedAction, WsProfileOrdersAction } from "../../types/actions/web-socket"
import { WS_FEED_CLOSE, WS_FEED_ERROR, WS_FEED_GET_ORDERS, WS_FEED_OPEN, WS_PROFILE_GET_ORDERS, WS_PROFILE_ORDERS_CLOSE, WS_PROFILE_ORDERS_ERROR, WS_PROFILE_ORDERS_OPEN } from "../actions/web-socket"

export interface OrderInfo {
  ingredients: string[]
  _id: string,
  status: string,
  number: number,
  createdAt: string,
  updatedAt: string,
  name: string,
}

interface WSOrdersState {
  wsConnected: boolean,
  orders: OrderInfo[],
  total: number,
  totalToday: number,
  wsError?: Event
}

const WSFeedInitialState : WSOrdersState = {
  wsConnected: false,
  orders: [],
  total: 0,
  totalToday: 0
}

export const WSFeedReducer = (state = WSFeedInitialState, action: WsFeedAction) => {
  switch (action.type) {
    case WS_FEED_OPEN: {
      return {
        ...state,
        wsConnected: true
      }
    }
    case WS_FEED_ERROR: {
      return {
        ...state,
        wsError: action.wsError
      }
    }
    case WS_FEED_CLOSE: {
      return {
        ...state,
        wsConnected: false
      }
    }
    case WS_FEED_GET_ORDERS: {
      return {
        ...state,
        orders: action.orders,
        total: action.total,
        totalToday: action.totalToday
      }
    }
    default:
      return state
  }
}

const WSProfileOrdersInitialState : WSOrdersState = {
  wsConnected: false,
  orders: [],
  total: 0,
  totalToday: 0
}

export const WSProfileOrdersReducer = (state = WSProfileOrdersInitialState, action: WsProfileOrdersAction) => {
  switch (action.type) {
    case WS_PROFILE_ORDERS_OPEN: {
      return {
        ...state,
        wsConnected: true
      }
    }
    case WS_PROFILE_ORDERS_ERROR: {
      return {
        ...state,
        wsError: action.wsError
      }
    }
    case WS_PROFILE_ORDERS_CLOSE: {
      return {
        ...state,
        wsConnected: false
      }
    }
    case WS_PROFILE_GET_ORDERS: {
      return {
        ...state,
        orders: action.orders,
        total: action.total,
        totalToday: action.totalToday
      }
    }
    default:
      return state
  }
}