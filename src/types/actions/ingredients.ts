import { BurgerIngredientsItemProps } from "../../components/burger-ingredients/ingredient-item/ingredient-item";
import { ADD_INGREDIENT, CLEAR_CONSTRUCTOR_INGREDIENTS, CLOSE_INGREDIENT_MODAL, CLOSE_ORDER_MODAL, CREATE_ORDER_ERROR, CREATE_ORDER_REQUEST, CREATE_ORDER_SUCCESS, DELETE_INGREDIENT, GET_INGREDIENTS_ERROR, GET_INGREDIENTS_REQUEST, GET_INGREDIENTS_SUCCESS, OPEN_INGREDIENT_MODAL, OPEN_ORDER_MODAL, SORT_INGREDIENTS } from "../../services/actions/ingredients";

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

export type BurgerConstructorAction = 
  AddIngredientAction | DeleteIngredientAction | 
  SortIngredientsAction | ClearConstructorIngredientAction;

interface GetIngredientsRequestAction {
  type: typeof GET_INGREDIENTS_REQUEST,
} 

interface GetIngredientSuccessAction {
  type: typeof GET_INGREDIENTS_SUCCESS,
  ingredients: BurgerIngredientsItemProps[]
}

interface GetIngredientErrorAction {
  type: typeof GET_INGREDIENTS_ERROR,
}
  
export type BurgerIngredientsAction = 
GetIngredientsRequestAction | GetIngredientSuccessAction | 
GetIngredientErrorAction;

interface OpenIngredientModalAction {
  type: typeof OPEN_INGREDIENT_MODAL,
  ingredient: BurgerIngredientsItemProps
}

interface CloseIngredientModalAction {
  type: typeof CLOSE_INGREDIENT_MODAL,
}

export type IngredientModalAction = OpenIngredientModalAction | CloseIngredientModalAction

interface CreateOrdersRequestAction {
  type: typeof CREATE_ORDER_REQUEST
}

interface CreateOrdersSuccessAction {
  type: typeof CREATE_ORDER_SUCCESS,
  orderNumber: string
}

interface CreateOrdersErrorAction {
  type: typeof CREATE_ORDER_ERROR,
}

interface OpenOrderModalAction {
  type: typeof OPEN_ORDER_MODAL,
}

interface CloseOrderModalAction {
  type: typeof CLOSE_ORDER_MODAL,
}

export type OrderAction = CreateOrdersRequestAction | 
  CreateOrdersSuccessAction | CreateOrdersErrorAction | 
  OpenOrderModalAction | CloseOrderModalAction
