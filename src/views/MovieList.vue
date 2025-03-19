<template>
    <div>
      <h1>Movie List</h1>
      <div class="movies-container">
        <MovieMini
          v-for="movie in movies"
          :key="movie.imdbID"
          :title="movie.Title"
          :year="movie.Year"
          :poster="movie.Poster"
        />
      </div>
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  import MovieMini from '../components/MovieMini.vue';
  
  export default {
    components: { MovieMini },
    data() {
      return {
        movies: [],
      };
    },
    async mounted() {
      await this.fetchMovies();
    },
    methods: {
      async fetchMovies() {
        try {
          const response = await axios.get(
            'https://www.omdbapi.com/?apikey=ef8f4414'
          );
          this.movies = response.data.Search; // The API returns movies inside 'Search'
        } catch (error) {
          console.error('Error fetching movies:', error);
        }
      },
    },
  };
  </script>
  
  <style scoped>
  .movies-container {
    display: flex;
    flex-wrap: wrap;
  }
  </style>
  