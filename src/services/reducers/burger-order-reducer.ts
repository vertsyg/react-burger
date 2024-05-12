import { OrderAction } from "../../types/actions/ingredients"
import { CLOSE_ORDER_MODAL, CREATE_ORDER_ERROR, CREATE_ORDER_REQUEST, CREATE_ORDER_SUCCESS, OPEN_ORDER_MODAL } from "../actions/ingredients"

type TOrderState = {
  orderNumber: string | null
  orderRequest: boolean
  orderFailed: boolean
  isModalOpen: boolean 
}

export const orderInitialState : TOrderState = {
  orderNumber: null,
  orderRequest: false,
  orderFailed: false,
  isModalOpen: false
}

export const burgerOrderReducer = (state = orderInitialState, action: OrderAction) : TOrderState => {
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