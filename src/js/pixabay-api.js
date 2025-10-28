import axios from 'axios';

const BASE_URL = "https://pixabay.com/api/";

const API_KEY = "52857453-560792bcb66dbe1ba9d4bb66c";

export async function getImagesByQuery(query) {
  const params = {
    key: API_KEY,             
    q: query,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
  };

  const response = await axios.get(BASE_URL, { params });

  return response.data;
}