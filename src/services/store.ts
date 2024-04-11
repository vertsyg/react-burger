import { combineReducers } from 'redux';
import { burgerOrderReducer, burgerConstructorReducer, ingredientReducer, modalReducer } from './reducers/ingredientsReducer';
import { configureStore } from '@reduxjs/toolkit';
import { userReducer } from './reducers/userReducer';

const rootReducer = combineReducers({
  ingredients: ingredientReducer,
  modal: modalReducer,
  burgerConstructor: burgerConstructorReducer,
  order: burgerOrderReducer,
  user: userReducer
})

export const store = configureStore({
  reducer: rootReducer,
})