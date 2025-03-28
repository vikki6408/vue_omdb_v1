import axios from 'axios';

const API_KEY = 'ef8f4414'; // Replace with your actual API key
const BASE_URL = 'https://www.omdbapi.com/';

const apiFilm = {
  async searchMovies(query, type, page) {
    try {
      const response = await axios.get(`${BASE_URL}`, {
        params: {
          s: query,
          type: type,
          page: page,
          apikey: API_KEY,
        },
      });
      return response.data.Search || []; // Return an empty array if no results
    } catch (error) {
      console.error('Error fetching movies:', error);
      throw error; // Rethrow to handle it in the component
    }
  },

  // Used to get the total result (for the page number)
  async getTotalResults(query, type, page) {
    try {
      const response = await axios.get(`${BASE_URL}`, {
        params: {
          s: query,
          type: type,
          page: page,
          apikey: API_KEY,
        },
      });
      return response.data.totalResults || [];
    } catch (error) {
      console.error('Error fetching total results:', error);
      throw error;
    }
  },

  getMovies(id){
    return axios.get(
        `https://www.omdbapi.com/?i=${id}&plot=full&apikey=ef8f4414`
    )
  }


};


export default apiFilm;