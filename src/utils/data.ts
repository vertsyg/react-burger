const BASE_URL = 'https://norma.nomoreparties.space/api/ingredients';

export const fetchData = async () => {
  try {
    const response = await fetch(BASE_URL);
    if (!response.ok) {
      throw new Error(response.statusText);
    }
    const data = await response.json();
    return data.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};