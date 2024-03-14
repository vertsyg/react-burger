import { BurgerIngredientsItemProps } from "../../components/burger-ingredients/ingredient-item/ingredient-item";
import { ADD_INGREDIENT, CLEAR_CONSTRUCTOR_INGREDIENTS, CLOSE_INGREDIENT_MODAL, CLOSE_ORDER_MODAL, CREATE_ORDER_ERROR, CREATE_ORDER_REQUEST, CREATE_ORDER_SUCCESS, DELETE_INGREDIENT, GET_INGREDIENTS_ERROR, GET_INGREDIENTS_REQUEST, GET_INGREDIENTS_SUCCESS, OPEN_INGREDIENT_MODAL, OPEN_ORDER_MODAL, SORT_INGREDIENTS } from "../actions/ingredients";

// TODO: описать типы экшенов

const dataInitialState = {
  ingredients: [],
  ingredientsRequest: false,
  ingredientsFailed: false,
}

export const ingredientReducer = (state = dataInitialState, action: any) => {
  switch (action.type) {
    case GET_INGREDIENTS_REQUEST: {
      return {
        ...state,
        ingredientsRequest: true,
        ingredientsFailed: false
      }
    }
    case GET_INGREDIENTS_SUCCESS: {
      return {
        ...state, 
        ingredients: action.ingredients,
        ingredientsRequest: false,
      }
    }
    case GET_INGREDIENTS_ERROR: {
      return {
        ...state,
        ingredientsRequest: false,
        ingredientsFailed: true
      }
    }
    default:
      return state
  }
}

const modalInitialState = {
  isModalOpen: false, 
  selectedIngredient: null
} 
 
export const modalReducer = (state = modalInitialState, action: any) => {
  switch (action.type) {
    case OPEN_INGREDIENT_MODAL:
      return {
        ...state,
        isModalOpen: true,
        selectedIngredient: action.ingredient
      }
    case CLOSE_INGREDIENT_MODAL:
      return {
        ...state,
        isModalOpen: false,
        selectedIngredient: null
      }
    default:
      return state
  }
}

interface burgerConstructorState {
  bun: BurgerIngredientsItemProps | null,
  ingredients: BurgerIngredientsItemProps[] 
}

const burgerConstructorInitialState: burgerConstructorState = {
  bun: null,
  ingredients: [],
}

interface AddIngredientAction {
  type: typeof ADD_INGREDIENT,
  ingredient: BurgerIngredientsItemProps
} 

interface DeleteIngredientAction {
  type: typeof DELETE_INGREDIENT,
  uuid: string
}

interface SortIngredientsAction {
  type: typeof SORT_INGREDIENTS,
  newIngredients: BurgerIngredientsItemProps[]
}

interface ClearConstructorIngredientAction {
  type: typeof CLEAR_CONSTRUCTOR_INGREDIENTS
}

type ActionTypes = 
  AddIngredientAction | DeleteIngredientAction | 
  SortIngredientsAction | ClearConstructorIngredientAction;

export const burgerConstructorReducer = (state = burgerConstructorInitialState, action: ActionTypes) => {
  switch (action.type) {
    case ADD_INGREDIENT:
      let newState = { ...state }
      if (action.ingredient.type === 'bun') {
        newState.bun = action.ingredient
      } else {
        newState.ingredients = [...newState.ingredients, action.ingredient]
      }
      return newState
    case DELETE_INGREDIENT:
      return {
        ...state,
        ingredients: state.ingredients.filter(i => i.uuid !== action.uuid)
      }
    case SORT_INGREDIENTS: {
      return {
        ...state,
        ingredients: action.newIngredients
      }
    }
    case CLEAR_CONSTRUCTOR_INGREDIENTS: {
      return {
        ...state,
        bun: null,
        ingredients: []
      }
    }
    default:
      return state
  }
}

interface orderState {
  orderNumber: number | null
  orderRequest: boolean
  orderFailed: boolean
  isModalOpen: boolean 
}

const orderInitialState : orderState = {
  orderNumber: null,
  orderRequest: false,
  orderFailed: false,
  isModalOpen: false
}

export const burgerOrderReducer = (state = orderInitialState, action: any) => {
  switch (action.type) {
    case CREATE_ORDER_REQUEST: 
      return {
        ...state,
        orderRequest: true,
        orderFailed: false
      }
    case CREATE_ORDER_SUCCESS: {
      return {
        ...state,
        orderNumber: action.orderNumber,
        orderRequest: false,
      }
    }
    case CREATE_ORDER_ERROR: {
      return {
        ...state,
        orderRequest: false,
        orderFailed: true
      }
    }
    case OPEN_ORDER_MODAL: {
      return {
        ...state, 
        isModalOpen: true
      }
    }
    case CLOSE_ORDER_MODAL: {
      return {
        ...state, 
        isModalOpen: false
      }
    }
    default:
      return state
  }
}