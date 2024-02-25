const BASE_URL = 'https://norma.nomoreparties.space/api/ingredients';

export const fetchData = async () => {
  const response = await fetch(BASE_URL);
  if (!response.ok) {
    throw new Error(response.statusText);
  }
  const data = await response.json();
  return data.data;
};