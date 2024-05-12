import { BurgerIngredientsItemProps } from '../../components/burger-ingredients/ingredient-item/ingredient-item';
import { BurgerIngredientsAction } from '../../types/actions/ingredients';
import { GET_INGREDIENTS_ERROR, GET_INGREDIENTS_REQUEST, GET_INGREDIENTS_SUCCESS } from '../actions/ingredients';

type TDataState = {
  ingredients: BurgerIngredientsItemProps[] | [],
  ingredientsRequest: boolean,
  ingredientsFailed: boolean
}

const dataInitialState : TDataState = {
  ingredients: [],
  ingredientsRequest: false,
  ingredientsFailed: false,
}

export const ingredientsReducer = (state = dataInitialState, action: BurgerIngredientsAction) : TDataState => {
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