import { WsProfileOrdersAction } from "../../types/actions/web-socket"
import { WS_PROFILE_GET_ORDERS, WS_PROFILE_ORDERS_CLOSE, WS_PROFILE_ORDERS_ERROR, WS_PROFILE_ORDERS_OPEN } from "../actions/web-socket"
import { TWSOrdersState } from "./ws-feed-reducer"

const WSProfileOrdersInitialState : TWSOrdersState = {
  wsConnected: false,
  orders: [],
  total: 0,
  totalToday: 0
}

export const WSProfileOrdersReducer = (state = WSProfileOrdersInitialState, action: WsProfileOrdersAction) : TWSOrdersState => {
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