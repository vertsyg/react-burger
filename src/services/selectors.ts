import { RootState } from "../types/hooks"

export const getIsModalOpen = (state : RootState) => state.modal.isModalOpen
export const getSelectedIngredient = (state : RootState) => state.modal.selectedIngredient
export const getBurgerIngredients = (state : RootState) => state.ingredients.ingredients
export const getLoading = (state : RootState) => state.ingredients.ingredientsRequest
export const getError = (state : RootState) => state.ingredients.ingredientsFailed
export const getBurgerConstructorBun = (state : RootState) => state.burgerConstructor.bun
export const getBurgerConstructorIngredients = (state : RootState) => state.burgerConstructor.ingredients
export const getBurgerOrderNumber = (state : RootState) => state.order.orderNumber
export const getOrderModalIsOpen = (state : RootState) => state.order.isModalOpen