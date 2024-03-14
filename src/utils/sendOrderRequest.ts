import { request } from "./request";

export const sendOrderRequest = async (ingredients : string[]) => {
  return request('orders', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({ingredients})
  })
}