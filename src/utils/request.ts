import { checkResponse } from "./checkResponse";

const BASE_URL = 'https://norma.nomoreparties.space/api';

export const request = async (endpoint:string, options?:RequestInit) => {
  const res = await fetch(`${BASE_URL}/${endpoint}`, options)
  return checkResponse(res)
}