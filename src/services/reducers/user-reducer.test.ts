import { FORGOT_PASSWORD_ERROR, FORGOT_PASSWORD_REQUEST, FORGOT_PASSWORD_SUCCESS, GET_LOGIN_ERROR, GET_LOGIN_REQUEST, GET_LOGIN_SUCCESS, GET_LOGOUT_ERROR, GET_LOGOUT_REQUEST, GET_LOGOUT_SUCCESS, GET_REGISTER_ERROR, GET_REGISTER_REQUEST, GET_REGISTER_SUCCESS, GET_USER_ERROR, GET_USER_REQUEST, GET_USER_SUCCESS, RESET_PASSWORD_ERROR, RESET_PASSWORD_REQUEST, RESET_PASSWORD_SUCCESS, UPDATE_USER_ERROR, UPDATE_USER_REQUEST, UPDATE_USER_SUCCESS } from "../actions/user"
import { userInitialState, userReducer } from "./user-reducer"

const testUser = {
  email: 'test@test.com',
  name: 'test name'
}

describe('user reducer', () => {
  test('should return the initial state', () => {
    expect(userReducer(undefined, {} as any)).toEqual(userInitialState)
  })

  test('should handle GET_REGISTER_REQUEST', () => {
    expect(userReducer(userInitialState, { type: GET_REGISTER_REQUEST })).toEqual({
      ...userInitialState,
      request: true,
    })
  })

  test('should handle GET_REGISTER_SUCCESS', () => {
    expect(userReducer(userInitialState, { type: GET_REGISTER_SUCCESS, user: testUser })).toEqual({
      ...userInitialState,
      isAuth: true,
      request: false,
      user: testUser
    })
  })

  test('should handle GET_REGISTER_ERROR', () => {
    expect(userReducer(userInitialState, { type: GET_REGISTER_ERROR })).toEqual({
      ...userInitialState,
      request: false,
      requestFailed: true
    })
  })

  test('should handle GET_LOGIN_REQUEST', () => {
    expect(userReducer(userInitialState, { type: GET_LOGIN_REQUEST })).toEqual({
      ...userInitialState,
      request: true,
    })
  })

  test('should handle GET_LOGIN_SUCCESS', () => {
    expect(userReducer(userInitialState, { type: GET_LOGIN_SUCCESS, user: testUser })).toEqual({
      ...userInitialState,
      isAuth: true,
      request: false,
      user: testUser
    })
  })

  test('should handle GET_LOGIN_ERROR', () => {
    expect(userReducer(userInitialState, { type: GET_LOGIN_ERROR })).toEqual({
      ...userInitialState,
      request: false,
      requestFailed: true
    })
  })

  test('should handle GET_USER_REQUEST', () => {
    expect(userReducer(userInitialState, { type: GET_USER_REQUEST })).toEqual({
      ...userInitialState,
      request: true,
    })
  })

  test('should handle GET_USER_SUCCESS', () => {
    expect(userReducer(userInitialState, { type: GET_USER_SUCCESS, user: testUser })).toEqual({
      ...userInitialState,
      isAuth: true,
      request: false,
      user: testUser
    })
  })

  test('should handle GET_USER_ERROR', () => {
    expect(userReducer(userInitialState, { type: GET_USER_ERROR })).toEqual({
      ...userInitialState,
      request: false,
      requestFailed: true
    })
  })

  test('should handle UPDATE_USER_REQUEST', () => {
    expect(userReducer(userInitialState, { type: UPDATE_USER_REQUEST })).toEqual({
      ...userInitialState,
      request: true,
    })
  })

  test('should handle UPDATE_USER_SUCCESS', () => {
    const updatedTestUser = {
      email: 'test@test.com',
      name: 'new test name'
    }
    expect(userReducer(userInitialState, { type: UPDATE_USER_SUCCESS, user: updatedTestUser })).toEqual({
      ...userInitialState,
      request: false,
      user: updatedTestUser
    })
  })

  test('should handle UPDATE_USER_ERROR', () => {
    expect(userReducer(userInitialState, { type: UPDATE_USER_ERROR })).toEqual({
      ...userInitialState,
      request: false,
      requestFailed: true
    })
  })

  test('should handle FORGOT_PASSWORD_REQUEST', () => {
    expect(userReducer(userInitialState, { type: FORGOT_PASSWORD_REQUEST })).toEqual({
      ...userInitialState,
      request: true,
    })
  })

  test('should handle FORGOT_PASSWORD_SUCCESS', () => {
    expect(userReducer(userInitialState, { type: FORGOT_PASSWORD_SUCCESS })).toEqual({
      ...userInitialState,
      request: false,
      isPasswordReset: true
    })
  })

  test('should handle FORGOT_PASSWORD_ERROR', () => {
    expect(userReducer(userInitialState, { type: FORGOT_PASSWORD_ERROR })).toEqual({
      ...userInitialState,
      request: false,
      requestFailed: true
    })
  })

  test('should handle RESET_PASSWORD_REQUEST', () => {
    expect(userReducer(userInitialState, { type: RESET_PASSWORD_REQUEST })).toEqual({
      ...userInitialState,
      request: true,
    })
  })

  test('should handle RESET_PASSWORD_SUCCESS', () => {
    expect(userReducer(userInitialState, { type: RESET_PASSWORD_SUCCESS })).toEqual({
      ...userInitialState,
      request: false,
      isPasswordReset: false,
      isPasswordResetSuccess: true
    })
  })

  test('should handle RESET_PASSWORD_ERROR', () => {
    expect(userReducer(userInitialState, { type: RESET_PASSWORD_ERROR })).toEqual({
      ...userInitialState,
      request: false,
      requestFailed: true,
    })
  })

  test('should handle GET_LOGOUT_REQUEST', () => {
    expect(userReducer(userInitialState, { type: GET_LOGOUT_REQUEST })).toEqual({
      ...userInitialState,
      request: true,
    })
  })

  test('should handle GET_LOGOUT_SUCCESS', () => {
    expect(userReducer(userInitialState, { type: GET_LOGOUT_SUCCESS })).toEqual({
      ...userInitialState,
      request: false,
      isAuth: false,
      user: {
        name: '',
        email: ''
      }
    })
  })

  test('should handle GET_LOGOUT_ERROR', () => {
    expect(userReducer(userInitialState, { type: GET_LOGOUT_ERROR })).toEqual({
      ...userInitialState,
      request: false,
      requestFailed: true
    })
  })
})