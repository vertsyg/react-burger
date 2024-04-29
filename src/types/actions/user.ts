import { FORGOT_PASSWORD_ERROR, FORGOT_PASSWORD_REQUEST, FORGOT_PASSWORD_SUCCESS, GET_LOGIN_ERROR, GET_LOGIN_REQUEST, GET_LOGIN_SUCCESS, GET_LOGOUT_ERROR, GET_LOGOUT_REQUEST, GET_LOGOUT_SUCCESS, GET_REGISTER_ERROR, GET_REGISTER_REQUEST, GET_REGISTER_SUCCESS, GET_USER_ERROR, GET_USER_REQUEST, GET_USER_SUCCESS, RESET_PASSWORD_ERROR, RESET_PASSWORD_REQUEST, RESET_PASSWORD_SUCCESS, UPDATE_USER_ERROR, UPDATE_USER_REQUEST, UPDATE_USER_SUCCESS } from "../../services/actions/user";

export interface UserInfo {
  email: string,
  name: string
}

interface GetRegisterRequestAction {
  type: typeof GET_REGISTER_REQUEST,
}

interface GetRegisterSuccessAction {
  type: typeof GET_REGISTER_SUCCESS,
  user: UserInfo
}

interface GetRegisterErrorAction {
  type: typeof GET_REGISTER_ERROR,
}

interface GetLoginRequestAction {
  type: typeof GET_LOGIN_REQUEST,
}

interface GetLoginSuccessAction {
  type: typeof GET_LOGIN_SUCCESS,
  user: UserInfo
}

interface GetLoginErrorAction {
  type: typeof GET_LOGIN_ERROR,
}

interface GetUserRequestAction {
  type: typeof GET_USER_REQUEST,
}

interface GetUserSuccessAction {
  type: typeof GET_USER_SUCCESS,
  user: UserInfo
}

interface GetUserErrorAction {
  type: typeof GET_USER_ERROR,
}

interface UpdateUserRequestAction {
  type: typeof UPDATE_USER_REQUEST,
}

interface UpdateUserSuccessAction {
  type: typeof UPDATE_USER_SUCCESS,
  user: UserInfo
}

interface UpdateUserErrorAction {
  type: typeof UPDATE_USER_ERROR,
}

interface ForgotPasswordRequestAction {
  type: typeof FORGOT_PASSWORD_REQUEST,
}

interface ForgotPasswordSuccessAction {
  type: typeof FORGOT_PASSWORD_SUCCESS,
}

interface ForgotPasswordErrorAction {
  type: typeof FORGOT_PASSWORD_ERROR,
}

interface ResetPasswordRequestAction {
  type: typeof RESET_PASSWORD_REQUEST,
}

interface ResetPasswordSuccessAction {
  type: typeof RESET_PASSWORD_SUCCESS,
}

interface ResetPasswordErrorAction {
  type: typeof RESET_PASSWORD_ERROR,
}

interface GetLogoutRequestAction {
  type: typeof GET_LOGOUT_REQUEST,
}

interface GetLogoutSuccessAction {
  type: typeof GET_LOGOUT_SUCCESS,
}

interface GetLogoutErrorAction {
  type: typeof GET_LOGOUT_ERROR,
}

export type UserAction = GetRegisterRequestAction | 
  GetRegisterSuccessAction | GetRegisterErrorAction | 
  GetLoginRequestAction | GetLoginSuccessAction | 
  GetLoginErrorAction | GetUserRequestAction | 
  GetUserSuccessAction | GetUserErrorAction | 
  UpdateUserRequestAction | UpdateUserSuccessAction | 
  UpdateUserErrorAction | ForgotPasswordRequestAction | 
  ForgotPasswordSuccessAction | ForgotPasswordErrorAction | 
  ResetPasswordRequestAction | ResetPasswordSuccessAction | 
  ResetPasswordErrorAction | GetLogoutRequestAction | 
  GetLogoutSuccessAction | GetLogoutErrorAction
