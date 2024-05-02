import { combineReducers } from 'redux';
import { burgerOrderReducer, burgerConstructorReducer, ingredientReducer, modalReducer } from './reducers/ingredients-reducer';
import { configureStore } from '@reduxjs/toolkit';
import { userReducer } from './reducers/user-reducer';
import { WS_FEED_CLOSE, WS_FEED_ERROR, WS_FEED_GET_ORDERS, WS_FEED_INIT, WS_FEED_OPEN, WS_PROFILE_GET_ORDERS, WS_PROFILE_ORDERS_CLOSE, WS_PROFILE_ORDERS_ERROR, WS_PROFILE_ORDERS_INIT, WS_PROFILE_ORDERS_OPEN } from './actions/web-socket';
import { TWSActions, socketMiddleware } from './middleware/socket-middleware';
import { WSFeedReducer, WSProfileOrdersReducer } from './reducers/web-socket-reducer';

const rootReducer = combineReducers({
  ingredients: ingredientReducer,
  modal: modalReducer,
  burgerConstructor: burgerConstructorReducer,
  order: burgerOrderReducer,
  user: userReducer,
  feedOrders: WSFeedReducer,
  profileOrders: WSProfileOrdersReducer
})

const WSFeedActions : TWSActions = {
  wsInit: WS_FEED_INIT,
  wsOpen: WS_FEED_OPEN,
  wsMessage: WS_FEED_GET_ORDERS,
  wsError: WS_FEED_ERROR,
  wsClose: WS_FEED_CLOSE
}

const WSProfileOrdersActions : TWSActions = {
  wsInit: WS_PROFILE_ORDERS_INIT,
  wsOpen: WS_PROFILE_ORDERS_OPEN,
  wsMessage: WS_PROFILE_GET_ORDERS,
  wsError: WS_PROFILE_ORDERS_ERROR,
  wsClose: WS_PROFILE_ORDERS_CLOSE
}

const WSFeed = socketMiddleware(WSFeedActions)
const WSProfileOrders = socketMiddleware(WSProfileOrdersActions)

export const store = configureStore({
  reducer: rootReducer,
  middleware: getDefaultMiddleware => getDefaultMiddleware().concat(WSFeed, WSProfileOrders)
})