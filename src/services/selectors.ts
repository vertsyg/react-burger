import { RootState } from '../types/hooks'

export const getIsModalOpen = (state : RootState) => state.modal.isModalOpen
export const getSelectedIngredient = (state : RootState) => state.modal.selectedIngredient
export const getSelectedOrder = (state : RootState) => state.modal.selectedOrder
export const getBurgerIngredients = (state : RootState) => state.ingredients.ingredients
export const getLoading = (state : RootState) => state.ingredients.ingredientsRequest
export const getError = (state : RootState) => state.ingredients.ingredientsFailed
export const getBurgerConstructorBun = (state : RootState) => state.burgerConstructor.bun
export const getBurgerConstructorIngredients = (state : RootState) => state.burgerConstructor.ingredients
export const getBurgerOrderNumber = (state : RootState) => state.order.orderNumber
export const getOrderModalIsOpen = (state : RootState) => state.order.isModalOpen
export const getOrderLoading = (state : RootState) => state.order.orderRequest
export const getUserName = (state : RootState) => state.user.user.name
export const getUserEmail = (state : RootState) => state.user.user.email
export const getIsAuth = (state : RootState) => state.user.isAuth
export const getIsPasswordReset = (state : RootState) => state.user.isPasswordReset
export const getIsPasswordResetSuccess = (state: RootState) => state.user.isPasswordResetSuccess
export const getFeedOrders = (state: RootState) => state.feedOrders.orders
export const getFeedOrdersTotal = (state: RootState) => state.feedOrders.total
export const getFeedOrdersTotalToday = (state: RootState) => state.feedOrders.totalToday