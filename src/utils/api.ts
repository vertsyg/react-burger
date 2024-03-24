const BASE_URL = 'https://norma.nomoreparties.space/api';

export const checkResponse = (res:Response) => {
  return res.ok ? res.json() : Promise.reject(`Ошибка ${res.status}`)
}

export const request = async (endpoint:string, options?:RequestInit) => {
  const res = await fetch(`${BASE_URL}/${endpoint}`, options)
  return checkResponse(res)
}

export const fetchData = async () => {
  return request('ingredients')
};

export const sendOrderRequest = async (ingredients : string[]) => {
  return request('orders', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({ingredients})
  })
}

export const registerRequest = async (email : string, password: string, name: string) => {
  return request('auth/register', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({email, password, name})
  })
}

export const loginRequest = async (email : string, password: string) => {
  return request('auth/login', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
    },
    body: JSON.stringify({email, password})
  })
}

export const forgotPasswordRequest = async (email : string) => {
  return request('password-reset', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({email})
  })
}

export const resetPasswordRequest = async (password : string, token: string) => {
  return request('password-reset/reset', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({password, token})
  })
}