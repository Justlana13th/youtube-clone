import axios from "axios"

const BASE_URL = 'https://youtube-v31.p.rapidapi.com'

const options = {
    method: 'GET',
    url: BASE_URL,
    params: {
      maxResults: '50'
    },
    headers: {
      'X-RapidAPI-Key': '218755c7d3msh42b2c2637b73720p1cc878jsn96d25c849fbf',
      'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
    }
  };

  export const fetchApi = async (url) => {
    const response = await axios.get(`${BASE_URL}/${url}`, options);

    return response.data;
  }