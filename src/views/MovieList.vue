<template>
  <div>
    <h1>Movie List</h1>
    <form @submit.prevent="fetchMovies">
      <label for="film" class="form-label">Entrez un film :</label>
      <input
        type="text"
        class="form-control"
        id="city"
        v-model="searchQuery"
        placeholder="Ex: Paris, Tokyo, New York"
        required
      />
      <button type="submit" class="btn btn-primary">Rechercher</button>
    </form>
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
import apiFilm from '@/services/apiFilm'; // Import the API service
import MovieMini from '@/components/MovieMini.vue';

export default {
  components: { MovieMini },
  data() {
    return {
      movies: [],
      searchQuery: 'Batman', // Default search
    };
  },
  async mounted() {
    await this.fetchMovies();
  },
  methods: {
    async fetchMovies() {
      try {
        this.movies = await apiFilm.searchMovies(this.searchQuery);
      } catch (error) {
        console.error('Failed to fetch movies');
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
