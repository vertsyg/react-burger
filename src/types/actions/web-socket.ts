import { WS_FEED_CLOSE, WS_FEED_ERROR, WS_FEED_GET_ORDERS, WS_FEED_INIT, WS_FEED_OPEN, WS_PROFILE_GET_ORDERS, WS_PROFILE_ORDERS_CLOSE, WS_PROFILE_ORDERS_ERROR, WS_PROFILE_ORDERS_INIT, WS_PROFILE_ORDERS_OPEN } from "../../services/actions/web-socket"
import { OrderInfo } from "../../services/reducers/ws-feed-reducer"

interface WsFeedInitAction {
  type: typeof WS_FEED_INIT,
  payload: string
}

interface WsFeedOpenAction {
  type: typeof WS_FEED_OPEN,
}

interface WsFeedGetOrdersAction {
  type: typeof WS_FEED_GET_ORDERS,
  orders: OrderInfo[],
  total: number,
  totalToday: number
}

interface WsFeedErrorAction {
  type: typeof WS_FEED_ERROR,
  wsError: Event
}

interface WsFeedCloseAction {
  type: typeof WS_FEED_CLOSE,
}

export type WsFeedAction = WsFeedInitAction | 
  WsFeedOpenAction | WsFeedGetOrdersAction | 
  WsFeedErrorAction | WsFeedCloseAction

interface WsProfileOrdersInitAction {
  type: typeof WS_PROFILE_ORDERS_INIT,
}

interface WsProfileOrdersOpenAction {
  type: typeof WS_PROFILE_ORDERS_OPEN,
}

interface WsProfileGetOrdersAction {
  type: typeof WS_PROFILE_GET_ORDERS,
  orders: OrderInfo[],
  total: number,
  totalToday: number
}

interface WsProfileOrdersErrorAction {
  type: typeof WS_PROFILE_ORDERS_ERROR,
  wsError: Event
}

interface WsProfileOrdersCloseAction {
  type: typeof WS_PROFILE_ORDERS_CLOSE,
}

export type WsProfileOrdersAction = WsProfileOrdersInitAction | 
  WsProfileOrdersOpenAction | WsProfileGetOrdersAction | 
  WsProfileOrdersErrorAction | WsProfileOrdersCloseAction