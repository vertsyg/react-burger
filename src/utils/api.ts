export const BASE_URL = 'https://norma.nomoreparties.space/api';
export const WS_BASE_URL = 'wss://norma.nomoreparties.space/orders';

export const checkResponse = (res:Response) => {
  return res.ok ? res.json() : res.json().then((err) => Promise.reject(err))
}

export const request = async (endpoint:string, options?:RequestInit) => {
  const res = await fetch(`${BASE_URL}/${endpoint}`, options)
  return checkResponse(res)
}

export const refreshToken = async () => {
  try {
    const refreshData = await request("auth/token", {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      body: JSON.stringify({
        token: localStorage.getItem("refreshToken"),
      }),
    });

    if (!refreshData.success) {
      return Promise.reject(refreshData);
    }

    localStorage.setItem("refreshToken", refreshData.refreshToken);
    localStorage.setItem("accessToken", refreshData.accessToken);
    
    return refreshData;
  } catch (err) {
    return Promise.reject(err);
  }
};

export const fetchWithRefresh = async (url:string, options:any) => {
  try {
    const res = await request(url, options);
    return res;
  } catch (err:any) {
    console.log(err.message)
    if (err.message === "jwt expired") {
      console.log(err.message)
      try {
        const refreshData = await refreshToken(); //обновляем токен
        options.headers.authorization = refreshData.accessToken;
        const res = await request(url, options); //повторяем запрос
        return res;
      } catch (refreshErr) {
        return Promise.reject(refreshErr);
      }
    } else {
      return Promise.reject(err);
    }
  }
};

export const fetchData = () => {
  return request('ingredients')
};

export const sendOrderRequest = (ingredients : string[]) => {
  return request('orders', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
        authorization: localStorage.getItem('accessToken')!
    },
    body: JSON.stringify({ingredients})
  })
}

export const registerRequest = (email : string, password: string, name: string) => {
  return request('auth/register', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({email, password, name})
  })
}

export const loginRequest = (email : string, password: string) => {
  return request('auth/login', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
    },
    body: JSON.stringify({email, password})
  })
}

export const forgotPasswordRequest = (email : string) => {
  return request('password-reset', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({email})
  })
}

export const resetPasswordRequest = (password : string, token: string) => {
  return request('password-reset/reset', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({password, token})
  })
}

export const logoutRequest = () => {
  return request('auth/logout', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ token: localStorage.getItem('refreshToken')})
  })
}