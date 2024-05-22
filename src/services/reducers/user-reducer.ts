import { UserAction, UserInfo } from '../../types/actions/user'
import { FORGOT_PASSWORD_ERROR, 
  FORGOT_PASSWORD_REQUEST, 
  FORGOT_PASSWORD_SUCCESS, 
  GET_LOGIN_ERROR, 
  GET_LOGIN_REQUEST, 
  GET_LOGIN_SUCCESS, 
  GET_LOGOUT_ERROR, 
  GET_LOGOUT_REQUEST, 
  GET_LOGOUT_SUCCESS, 
  GET_REGISTER_ERROR, 
  GET_REGISTER_REQUEST, 
  GET_REGISTER_SUCCESS, 
  GET_USER_ERROR, 
  GET_USER_REQUEST, 
  GET_USER_SUCCESS, 
  RESET_PASSWORD_ERROR, 
  RESET_PASSWORD_REQUEST, 
  RESET_PASSWORD_SUCCESS, 
  UPDATE_USER_ERROR, 
  UPDATE_USER_REQUEST, 
  UPDATE_USER_SUCCESS } from '../actions/user'

type TUserState = {
  user: UserInfo,
  isAuth: boolean,
  request: boolean,
  requestFailed: boolean,
  isPasswordReset: boolean,
  isPasswordResetSuccess: boolean
}

export const userInitialState : TUserState = {
  user: {
    name: '',
    email: ''
  },
  isAuth: false,
  request: false,
  requestFailed: false,
  isPasswordReset: false,
  isPasswordResetSuccess: false
}

export const userReducer = (state = userInitialState, action : UserAction) : TUserState => {
  switch (action.type) {
    case GET_REGISTER_REQUEST: {
      return {
        ...state,
        request: true,
        requestFailed: false
      }
    }
    case GET_REGISTER_SUCCESS: {
      return {
        ...state,
        isAuth: true,
        request: false,
        user: action.user
      }
    }
    case GET_REGISTER_ERROR: {
      return {
        ...state,
        request: false,
        requestFailed: true
      }
    }
    case GET_LOGIN_REQUEST: {
      return {
        ...state,
        request: true,
        requestFailed: false
      }
    }
    case GET_LOGIN_SUCCESS: {
      return {
        ...state,
        isAuth: true,
        request: false,
        user: action.user
      }
    }
    case GET_LOGIN_ERROR: {
      return {
        ...state,
        request: false,
        requestFailed: true
      }
    }
    case GET_USER_REQUEST: {
      return {
        ...state,
        request: true,
        requestFailed: false
      }
    }
    case GET_USER_SUCCESS: {
      return {
        ...state,
        request: false,
        user: action.user,
        isAuth: true
      }
    }
    case GET_USER_ERROR: {
      return {
        ...state,
        request: false,
        requestFailed: true
      }
    }
    case UPDATE_USER_REQUEST: {
      return {
        ...state,
        request: true,
        requestFailed: false
      }
    }
    case UPDATE_USER_SUCCESS: {
      return {
        ...state,
        request: false,
        user: action.user,
      }
    }
    case UPDATE_USER_ERROR: {
      return {
        ...state,
        request: false,
        requestFailed: true
      }
    }
    case FORGOT_PASSWORD_REQUEST: {
      return {
        ...state,
        request: true,
        requestFailed: false
      }
    }
    case FORGOT_PASSWORD_SUCCESS: {
      return {
        ...state,
        request: false,
        isPasswordReset: true
      }
    }
    case FORGOT_PASSWORD_ERROR: {
      return {
        ...state,
        request: false,
        requestFailed: true
      }
    }
    case RESET_PASSWORD_REQUEST: {
      return {
        ...state,
        request: true,
        requestFailed: false,
        isPasswordResetSuccess: false
      }
    }
    case RESET_PASSWORD_SUCCESS: {
      return {
        ...state,
        request: false,
        isPasswordReset: false,
        isPasswordResetSuccess: true
      }
    }
    case RESET_PASSWORD_ERROR: {
      return {
        ...state,
        request: false,
        requestFailed: true
      }
    }
    case GET_LOGOUT_REQUEST: {
      return {
        ...state,
        request: true,
        requestFailed: false,
      }
    }
    case GET_LOGOUT_SUCCESS: {
      return {
        ...state,
        request: false,
        isAuth: false,
        user: {
          name: '',
          email: ''
        }
      }
    }
    case GET_LOGOUT_ERROR: {
      return {
        ...state,
        request: false,
        requestFailed: true
      }
    }
    default:
      return state
  }
}
