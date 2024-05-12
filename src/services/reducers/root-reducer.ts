import { combineReducers } from "redux";
import { ingredientsReducer } from "./ingredients-reducer";
import { userReducer } from "./user-reducer";
import { WSFeedReducer } from "./ws-feed-reducer";
import { modalReducer } from "./modal-reducer";
import { burgerConstructorReducer } from "./constructor-reducer";
import { burgerOrderReducer } from "./burger-order-reducer";
import { WSProfileOrdersReducer } from "./ws-profile-orders-reducer";

export const rootReducer = combineReducers({
  ingredients: ingredientsReducer,
  modal: modalReducer,
  burgerConstructor: burgerConstructorReducer,
  order: burgerOrderReducer,
  user: userReducer,
  feedOrders: WSFeedReducer,
  profileOrders: WSProfileOrdersReducer
})