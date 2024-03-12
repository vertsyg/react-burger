import { combineReducers } from "redux";
import { burgerOrderReducer, burgerConstructorReducer, ingredientReducer, modalReducer } from "./reducers/ingredientsReducer";
import { configureStore } from "@reduxjs/toolkit";

const rootReducer = combineReducers({
  ingredients: ingredientReducer,
  modal: modalReducer,
  burgerConstructor: burgerConstructorReducer,
  order: burgerOrderReducer
})

export const store = configureStore({
  reducer: rootReducer,
})