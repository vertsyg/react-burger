import { BurgerIngredientsItemProps } from "../../components/burger-ingredients/ingredient-item/ingredient-item"
import { BurgerConstructorAction } from "../../types/actions/ingredients"
import { ADD_INGREDIENT, CLEAR_CONSTRUCTOR_INGREDIENTS, DELETE_INGREDIENT, SORT_INGREDIENTS } from "../actions/ingredients"

type TBurgerConstructorState = {
  bun: BurgerIngredientsItemProps | null,
  ingredients: BurgerIngredientsItemProps[]
}

export const burgerConstructorInitialState: TBurgerConstructorState = {
  bun: null,
  ingredients: [],
}

export const burgerConstructorReducer = (state = burgerConstructorInitialState, action: BurgerConstructorAction) : TBurgerConstructorState => {
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