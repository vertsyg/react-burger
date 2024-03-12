const ENDPOINT = 'https://norma.nomoreparties.space/api/orders'

export const sendOrderRequest = async (ingredients : string[]) => {
  const response = await fetch(ENDPOINT, {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({ingredients})
  })
  if (!response.ok) {
    throw new Error(response.statusText);
  }
  const data = await response.json();
  return data;
}