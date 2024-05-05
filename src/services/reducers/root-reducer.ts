import { combineReducers } from "redux";
import { burgerConstructorReducer, burgerOrderReducer, ingredientReducer, modalReducer } from "./ingredients-reducer";
import { userReducer } from "./user-reducer";
import { WSFeedReducer, WSProfileOrdersReducer } from "./web-socket-reducer";

export const rootReducer = combineReducers({
  ingredients: ingredientReducer,
  modal: modalReducer,
  burgerConstructor: burgerConstructorReducer,
  order: burgerOrderReducer,
  user: userReducer,
  feedOrders: WSFeedReducer,
  profileOrders: WSProfileOrdersReducer
})