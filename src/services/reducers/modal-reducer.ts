import { BurgerIngredientsItemProps } from "../../components/burger-ingredients/ingredient-item/ingredient-item"
import { IngredientModalAction } from "../../types/actions/ingredients"
import { CLOSE_INGREDIENT_MODAL, CLOSE_WS_ORDER_MODAL, OPEN_INGREDIENT_MODAL, OPEN_WS_ORDER_MODAL } from "../actions/ingredients"
import { OrderInfo } from "./ws-feed-reducer"

type TModalState = {
  isModalOpen: boolean, 
  selectedIngredient: BurgerIngredientsItemProps | null,
  selectedOrder: OrderInfo| null
}

export const modalInitialState : TModalState = {
  isModalOpen: false, 
  selectedIngredient: null,
  selectedOrder: null
} 
 
export const modalReducer = (state = modalInitialState, action: IngredientModalAction) : TModalState => {
  switch (action.type) {
    case OPEN_INGREDIENT_MODAL:
      return {
        ...state,
        isModalOpen: true,
        selectedIngredient: action.ingredient
      }
    case OPEN_WS_ORDER_MODAL: 
      return {
        ...state,
        isModalOpen: true,
        selectedOrder: action.order
      }
    case CLOSE_INGREDIENT_MODAL:
      return {
        ...state,
        isModalOpen: false,
        selectedIngredient: null
      }
    case CLOSE_WS_ORDER_MODAL:
      return {
        ...state,
        isModalOpen: false,
        selectedOrder: null
      }
    default:
      return state
  }
}