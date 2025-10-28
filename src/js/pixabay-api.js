import axios from 'axios';

const BASE_URL = "https://pixabay.com/api/";
const API_KEY = "52857453-560792bcb66dbe1ba9d4bb66c";

export async function getImagesByQuery(query, page = 1) {
  const params = {
    key: API_KEY,             
    q: query,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
    page,
    per_page: 15,
    };
  try {
    const response = await axios.get(BASE_URL, { params });
    return response.data; 
  } catch (error) {
      console.error("Pixabay API error:", error);
      throw error;
  }
}