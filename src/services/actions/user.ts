import { AppDispatch } from '../../types/hooks';
import { fetchWithRefresh, forgotPasswordRequest, loginRequest, logoutRequest, registerRequest, resetPasswordRequest } from '../../utils/api';

export const GET_REGISTER_REQUEST = 'GET_REGISTER_REQUEST'
export const GET_REGISTER_SUCCESS = 'GET_REGISTER_SUCCESS'
export const GET_REGISTER_ERROR = 'GET_REGISTER_ERROR'

export const GET_LOGIN_REQUEST = 'GET_LOGIN_REQUEST'
export const GET_LOGIN_SUCCESS = 'GET_LOGIN_SUCCESS'
export const GET_LOGIN_ERROR = 'GET_LOGIN_ERROR'

export const GET_USER_REQUEST = 'GET_USER_REQUEST'
export const GET_USER_SUCCESS = 'GET_USER_SUCCESS'
export const GET_USER_ERROR = 'GET_USER_ERROR'

export const UPDATE_USER_REQUEST = 'UPDATE_USER_REQUEST'
export const UPDATE_USER_SUCCESS = 'UPDATE_USER_SUCCESS'
export const UPDATE_USER_ERROR = 'UPDATE_USER_ERROR'

export const GET_LOGOUT_REQUEST = 'GET_LOGOUT_REQUEST'
export const GET_LOGOUT_SUCCESS = 'GET_LOGOUT_SUCCESS'
export const GET_LOGOUT_ERROR = 'GET_LOGOUT_ERROR'

export const FORGOT_PASSWORD_REQUEST = 'FORGOT_PASSWORD_REQUEST'
export const FORGOT_PASSWORD_SUCCESS = 'FORGOT_PASSWORD_SUCCESS'
export const FORGOT_PASSWORD_ERROR = 'FORGOT_PASSWORD_ERROR'

export const RESET_PASSWORD_REQUEST = 'RESET_PASSWORD_REQUEST'
export const RESET_PASSWORD_SUCCESS = 'RESET_PASSWORD_SUCCESS'
export const RESET_PASSWORD_ERROR = 'RESET_PASSWORD_ERROR'

const saveTokens = (res:any) => {
  localStorage.setItem('accessToken', res.accessToken)
  localStorage.setItem('refreshToken', res.refreshToken)
}

export const getUser = () => (dispatch: AppDispatch) => {
  dispatch({ type: GET_USER_REQUEST})
  fetchWithRefresh('auth/user', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      authorization: localStorage.getItem('accessToken'),
    },
  }).then(res => {
    dispatch({
      type: GET_USER_SUCCESS,
      user: res.user
    })
  }).catch(err => {
    dispatch({
      type: GET_USER_ERROR,
      err
    });
  })
}

export const updateUserInfo = (name: string, email: string, password: string) => (dispatch : AppDispatch) => {
  dispatch({ type: UPDATE_USER_REQUEST})
  fetchWithRefresh('auth/user', {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
      authorization: localStorage.getItem('accessToken'),
    },
    body: JSON.stringify({ name, email, password })
  }).then(res  => {
    dispatch({
      type: UPDATE_USER_SUCCESS,
      user: res.user
    })
  }).catch(err => {
    dispatch({
      type: UPDATE_USER_ERROR,
      err
    });
  })
}

export const register = (email:string, password:string, name:string) => (dispatch: AppDispatch) => {
  dispatch({ type: GET_REGISTER_REQUEST }) 
  registerRequest(email, password, name).then(res => {
    dispatch({
      type: GET_REGISTER_SUCCESS,
      user: res.user
    })
    saveTokens(res)
  }).catch(err => {
    dispatch({
      type: GET_REGISTER_ERROR,
      err
    });
  })
}

export const login = (email:string, password:string) => (dispatch: AppDispatch) => {
  dispatch({ type: GET_LOGIN_REQUEST }) 
  loginRequest(email, password).then(res => {
    dispatch({
      type: GET_LOGIN_SUCCESS,
      user: res.user
    })
    saveTokens(res)
  }).catch(err => {
    dispatch({
      type: GET_LOGIN_ERROR,
      err
    });
  })
}


export const logout = () => (dispatch: AppDispatch) => {
  dispatch({ type: GET_LOGOUT_REQUEST }) 
  logoutRequest().then(_ => {
    dispatch({
      type: GET_LOGOUT_SUCCESS,
    })
    localStorage.removeItem('accessToken')
    localStorage.removeItem('refreshToken')
  }).catch(err => {
    dispatch({
      type: GET_LOGOUT_ERROR,
      err
    });
  })
}

export const forgotPassword = (email:string) => (dispatch: AppDispatch) => {
  dispatch({ type: FORGOT_PASSWORD_REQUEST }) 
  forgotPasswordRequest(email).then(_ => {
    dispatch({
      type: FORGOT_PASSWORD_SUCCESS,
    })
  }).catch(err => {
    dispatch({
      type: FORGOT_PASSWORD_ERROR,
      err
    });
  })
}

export const resetPassword = (password:string, token: string) => (dispatch: AppDispatch) => {
  dispatch({ type: RESET_PASSWORD_REQUEST }) 
  resetPasswordRequest(password, token).then(_ => {
    dispatch({
      type: RESET_PASSWORD_SUCCESS,
    })
  }).catch(err => {
    dispatch({
      type: RESET_PASSWORD_ERROR,
      err
    });
  })
}