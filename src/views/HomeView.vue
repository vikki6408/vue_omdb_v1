<template>
  <div id="app">
    <div class="repartition">
      <div class="side-bar">
        <img class="logo-image" src="../assets/logo.png" />

        <div class="combobox">
          <p>Type</p>
          <select name="type" id="type">
            <option value="film">Film</option>
            <option value="tv-show">Tv-show</option>
          </select>
        </div>
        <div class="combobox">
          <p>Genre</p>
          <select name="genre" id="genre">
            <option>Action</option>
            <option>Thriller</option>
            <option>Documentary</option>
          </select>
        </div>
        <div class="combobox">
          <p>Years</p>
          <select name="years" id="years">
            <option>new generation</option>
            <option>2010-2020</option>
            <option>2000-2010</option>
            <option>1990-2000</option>
            <option>1980-1990</option>
          </select>
        </div>
        <div class="combobox">
          <p>Rating</p>
          <select name="rating" id="rating">
            <option>0-5</option>
            <option>5-10</option>
          </select>
        </div>
      </div>

      <div id="display-home">
        <div id="title-home">Bienvenue sur JEVISIS's films!</div>

        <form id="search-container">
          <div class="search">
            <span class="material-symbols-outlined">search</span>
            <input class="search-input" v-model="searchQuery" placeholder="Search for a movie..." @keyup.enter="fetchMovies" />
          </div>
        </form>

        <div id="display-movies">
          <MovieMini
      é
          :key="movie.imdbID"
          :title="movie.Title"
          :imdbkey="movie.imdbID"
          :year="movie.Year"
          :poster="movie.Poster"
        />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
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
body {
  margin: 0px;
  height: min-content;
}

#app {
  margin: 0px;
  padding: 0px;
  background-color: #274172;
  font-family: 'lexend', sans-serif;
}

.repartition {
  height: max-content;
  margin: 0px;
  display: flex;
}

.side-bar {
  height: auto;
  width: 13%;
  display: flex;
  flex-direction: column;
  background-color: #8e949d;
}

.combobox {
  display: flex;
  flex-direction: column;
  width: auto;
  padding: 4%;
}

.logo-image {
  height: 250px;
  width: auto;
}

#display-home {
  height: auto;
  width: 90%;
  display: flex;
  flex-direction: column;
}

#title-home {
  text-align: center;
  margin-top: 7%;
  width: 100%;
  font-size: 70px;
  color: #fff56e;
}

#search-container {
  width: auto;
  margin-left: auto;
  margin-right: auto;
  margin-top: 5%;
  margin-bottom: 5%;
}

.search {
  width: 400px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 14px;
  border-radius: 28px;
  background: #f6f6f6;
}

.search-input {
  font-size: 16px;
  font-family: 'lexend', sans-serif;
  color: #333333;
  margin-left: 14px;
  outline: none;
  border: none;
  background: transparent;
  width: 400px;
}

#display-movies {
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: space-evenly;
}
</style>
