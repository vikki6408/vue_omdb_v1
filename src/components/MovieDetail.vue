<template>
  <div class="affichage_films" v-if="movieDetail">
    <div class="infos_film">
      <div id="image">
        <img :src="movieDetail.Poster" alt="Blade runner" class="film" />
      </div>
      <div id="infos">
        <div id="rated">
          <h1>{{ movieDetail.Title }}</h1>
          <h3 id="cadre">{{ movieDetail.Rated }}</h3>
          <router-link to="/" style="color: #fff56e; font-size: 30px"
            >Get Back</router-link
          >
        </div>
        <h6>
          {{ movieDetail.Released }}, {{ movieDetail.Type }},
          {{ movieDetail.Runtime }}
        </h6>
        <h6>{{ movieDetail.Genre }}</h6>
        <div class="vide"></div>
        <h5>Director : {{ movieDetail.Director }}</h5>
        <h5>Writer : {{ movieDetail.Writer }}</h5>
        <h5>Actors : {{ movieDetail.Actors }}</h5>
        <div class="vide"></div>
        <h5>Description :</h5>
        <h6>{{ movieDetail.Plot }}</h6>
      </div>
    </div>
    <div class="infos_film" style="margin-left: 10px">
      <div>
        <h5>Languages :</h5>
        <h6>{{ movieDetail.Language }}</h6>
        <h5>Country :</h5>
        <h6>{{ movieDetail.Country }}</h6>
        <h5>Awards :</h5>
        <h6>{{ movieDetail.Awards }}</h6>
        <div class="vide"></div>
        <h5>Evaluations :</h5>
        <ul class="ratings">
          <li
            class="rating"
            v-for="item in movieDetail.Ratings"
            :key="item.Value"
          >
            {{ item.Source }} <br />
            {{ item.Value }}
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "MovieDetail",
  props: {
    movieDetail: Object,
  },
};
</script>

<style scoped>
body {
  background-color: #274172;
  font-size: 3vw;
}

div {
  background-color: #274172;
}
.repartition {
  display: flex;
  height: 100vh;
}
.menu {
  width: 12%;
  height: auto;
  background-color: #274172;
  color: white;
}
.affichage_films {
  background-color: #274172;
  width: 88%;
  height: auto;
  display: flex;
  flex-direction: column;
  overflow: auto;
  font-size: 3px;
}

.infos_film {
  background-color: #274172;
  color: white;
  height: auto;
  width: 100%;
  display: flex;
  flex-direction: row;
  gap: 35px;
  font-size: 3px;
}

#image {
  margin-left: 10px;
  margin-top: 60px;
  height: 55vh;
}

#infos {
  margin-top: 50px;
  height: auto;
}

.ratings {
  display: flex;
  flex-direction: row;
}

.rating {
  display: flex;
  flex-direction: column;
  margin-left: 20px;
  margin-right: 30px;
  font-size: 1.2vw;
}

.responsive {
  width: 100%;
  height: auto;
}

.film {
  width: auto;
  height: auto;
}

.vide {
  height: 20px;
}

#rated {
  display: flex;
  justify-content: space-between;
  color: aliceblue;
}

#getback {
  color: #fff56e;
  margin-right: 10vh;
}

#cadre {
  border: 2px solid #fff56e;
  height: 40px;
  width: 55px;
  margin-right: 80vh;
  margin-top: 10px;
  text-align: center;
}
</style>
