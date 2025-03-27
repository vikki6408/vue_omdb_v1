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
          <router-link to="/" id="getback"
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
        <h6 style="width: 1000px">{{ movieDetail.Plot }}</h6>
      </div>
    </div>
    <div class="infos_film">
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

.affichage_films {
  padding-left: 50px;
  height: 100vh;
  display: flex;
  flex-direction: column;
  overflow: auto;
  font-size: 3px;
}

.infos_film {
  color: black;
  height: auto;
  width: 100%;
  display: flex;
  flex-direction: row;
  gap: 35px;
  font-size: 3px;
  text-align: left;
  margin-left: 10px;
}

#image {
  margin-left: 10px;
  margin-top: 60px;
  height: 55vh;

}

#infos {
  margin-top: 50px;
  height: auto;
  text-align: left;
  background-color: #fff56e;
  border-radius: 20px;
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

.film {
  width: auto;
  height: auto;
  border: 3px solid white;
  border-radius: 20px;
}

.vide {
  height: 20px;
  background-color: #fff56e;
}

#rated {
  display: flex;
  justify-content: space-between;
  color: aliceblue;
}

#getback {
  color: #fff56e;
  font-size: 30px
}

#cadre {
  border: 2px solid #fff56e;
  width: auto;
  height: 40px;
  margin-right: 80vh;
  margin-top: 10px;
  text-align: center;
  margin-left: 20px;
}
</style>
