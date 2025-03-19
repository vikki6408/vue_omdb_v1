import axios from 'axios';

const API_KEY = 'ef8f4414'; // Replace with your actual API key
const BASE_URL = 'https://www.omdbapi.com/';

const apiFilm = {
  async searchMovies(query) {
    try {
      const response = await axios.get(`${BASE_URL}`, {
        params: {
          s: query,
          apikey: API_KEY,
        },
      });
      return response.data.Search || []; // Return an empty array if no results
    } catch (error) {
      console.error('Error fetching movies:', error);
      throw error; // Rethrow to handle it in the component
    }
  },

  async getMovieDetails(id) {
    try {
      const response = await axios.get(`${BASE_URL}`, {
        params: {
          i: id,
          apikey: API_KEY,
        },
      });
      return response.data;
    } catch (error) {
      console.error('Error fetching movie details:', error);
      throw error;
    }
  },
};

export default apiFilm;
