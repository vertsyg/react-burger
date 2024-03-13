import { BurgerIngredientsItemProps } from "../../components/burger-ingredients/ingredient-item/ingredient-item"
import { fetchData } from "../../utils/fetchData"
import { v4 as uuidv4 } from "uuid"
import { sendOrderRequest } from "../../utils/sendOrderRequest"
import { AppDispatch } from "../../types/hooks"
import { request } from "../../utils/request"

export const OPEN_INGREDIENT_MODAL = 'OPEN_INGREDIENT_MODAL'
export const CLOSE_INGREDIENT_MODAL = 'CLOSE_INGREDIENT_MODAL'

export const GET_INGREDIENTS_REQUEST = 'GET_INGREDIENTS_REQUEST'
export const GET_INGREDIENTS_SUCCESS = 'GET_INGREDIENTS_SUCCESS'
export const GET_INGREDIENTS_ERROR = 'GET_INGREDIENTS_ERROR'

export const ADD_INGREDIENT = 'ADD_INGREDIENT'
export const DELETE_INGREDIENT = 'DELETE_INGREDIENT'
export const SORT_INGREDIENTS = 'SORT_INGREDIENTS'
export const CLEAR_CONSTRUCTOR_INGREDIENTS = 'CLEAR_INGREDIENTS'

export const CREATE_ORDER_REQUEST = 'CREATE_ORDER_REQUEST'
export const CREATE_ORDER_SUCCESS = 'CREATE_ORDER_SUCCESS'
export const CREATE_ORDER_ERROR = 'CREATE_ORDER_ERROR'
export const OPEN_ORDER_MODAL = 'OPEN_ORDER_MODAL'
export const CLOSE_ORDER_MODAL = 'CLOSE_ORDER_MODAL'

export const openIngredientModal = (ingredient: BurgerIngredientsItemProps) => {
  return {
    type: OPEN_INGREDIENT_MODAL,
    ingredient
  }
}

export const closeIngredientModal = () => {
  return {
    type: CLOSE_INGREDIENT_MODAL,
  }
}

export const openOrderModal = () => {
  return {
    type: OPEN_ORDER_MODAL,
  }
}

export const closeOrderModal = () => {
  return {
    type: CLOSE_ORDER_MODAL,
  }
}

export const getIngredients = () => (dispatch: AppDispatch) => {
  dispatch({ type: GET_INGREDIENTS_REQUEST });
  fetchData().then(res => {
    dispatch({
      type: GET_INGREDIENTS_SUCCESS,
      ingredients: res.data
  });
  }).catch(err => {
    dispatch({
      type: GET_INGREDIENTS_ERROR,
      err
    });
  });
};

export const createOrder = (ingredients : string[]) => (dispatch: AppDispatch) => {
  dispatch({ type: CREATE_ORDER_REQUEST});
  sendOrderRequest(ingredients).then(res => {
    dispatch({
      type: CREATE_ORDER_SUCCESS,
      orderNumber: res.order.number
    })
  }).catch(err => {
    dispatch({
      type: CREATE_ORDER_ERROR,
      err
    });
  });
}

export const addIngredient = (ingredient: BurgerIngredientsItemProps) => {
  return {
    type: ADD_INGREDIENT,
    ingredient: {
      ...ingredient,
      // передача уникального id для dnd
      uuid: uuidv4()
    }
  }
}

export const deleteIngredient = (uuid: string) => {
  return {
    type: DELETE_INGREDIENT,
    uuid
  }
}

export const sortIngredients = (newIngredients: BurgerIngredientsItemProps[]) => {
  return {
    type: SORT_INGREDIENTS,
    newIngredients
  }
}

export const clearConstructorIngredients = () => {
  return {
    type: CLEAR_CONSTRUCTOR_INGREDIENTS
  }
}