<template>
  <!--Link to the magnifying glass icon-->
  <link
    rel="stylesheet"
    href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200&icon_names=search"
  />

  <div id="app">
    <div class="repartition">
      <!--Side nav-->
      <div class="side-bar">
        <img class="logo-image" src="../assets/logo.png" />

        <!--Filter by type-->
        <div class="combobox">
          <p>Type</p>
          <select required name="type" v-model="type" @change="fetchMovies">
            <option value="movie">Movie</option>
            <option value="series">Series</option>
          </select>
        </div>
      </div>

      <!--MAIN  CONTENT-->
      <div id="display-home">
        <!--Title-->
        <div id="title-home">Bienvenue sur JEVISIS's films!</div>

        <!--Search form-->
        <form id="search-container" @submit.prevent="fetchMovies">
          <div class="search">
            <span class="material-symbols-outlined">search</span>
            <input
              type="text"
              class="search-input"
              v-model="searchQuery"
              placeholder="Search for a movie..."
              required
            />
          </div>
          <button type="submit" class="btn btn-primary mt-3">Rechercher</button>
        </form>

        <!-- Display of the movies-->
        <div id="display-movies">
          <MovieMini
            v-for="movie in movies"
            :key="movie.imdbID"
            :title="movie.Title"
            :imdbkey="movie.imdbID"
            :year="movie.Year"
            :poster="movie.Poster"
          />
        </div>
        <!-- page buttons-->
        <div class="btn-display">
          <button class="btn-page" @click="previousPage()">
            Previous page
          </button>
          <!-- displays on wich page we are and how much there is-->
          <p id="page-number">
            Page {{ page }} sur {{ Math.floor(Number(totalResults) / 10 + 1) }}
          </p>
          <button class="btn-page" @click="nextPage()">Next page</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import apiFilm from "@/services/apiFilm"; // Import the API service
import MovieMini from "@/components/MovieMini.vue";

export default {
  components: { MovieMini },
  data() {
    return {
      movies: [],
      searchQuery: "Batman", // Default search
      type: "movie", // Default search
      page: 1,
      totalResults: null,
      totalPages: null
    };
  },
  async mounted() {
    await this.fetchMovies();
  },
  methods: {
    async fetchMovies() {
      try {
        this.movies = await apiFilm.searchMovies(
          this.searchQuery,
          this.type,
          this.page
        );
        this.totalResults = await apiFilm.getTotalResults(
          this.searchQuery,
          this.type,
          this.page
        );
        console.log(this.totalResults);
      } catch (error) {
        console.error("Failed to fetch movies");
      }
    },
    nextPage() {
      // If it is not equal greater than the number of total pages
      if (this.page != Math.floor(Number(this.totalResults) / 10 + 1)) {
        this.page += 1;
        this.fetchMovies();
      }
    },
    previousPage() {
      if (this.page > 1) {
        this.page -= 1;
        this.fetchMovies();
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
  font-family: "lexend", sans-serif;
}

#page-number {
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
}

.repartition {
  height: max-content;
  margin: 0px;
  display: flex;
}

.btn-display {
  display: flex;
  justify-content: center;
}
.btn-page {
  height: 80px;
  width: 250px;
  margin: 30px;
  background: white;
  border-radius: 25px;
  color: #333333;
  font-size: 22px;
  border: 3px solid black;
}

.side-bar {
  position: fixed;
  height: 100%;
  width: 13%;
  display: flex;
  flex-direction: column;
  background-color: #8e949d;
  border-right: 2px solid black;
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
  margin-left: 13%;
}

#title-home {
  text-align: center;
  margin-top: 7%;
  width: 100%;
  font-size: 70px;
  font-family: Blippo, fantasy;
  background-color: #fff56e;
  color: #274172;
  border-top: 2px solid black;
  border-bottom: 2px solid black;
  -webkit-text-stroke: 2px white;
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
  font-family: "lexend", sans-serif;
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
