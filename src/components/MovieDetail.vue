<template>
  <div class="affichage_films" v-if="movieDetail">
    <div class="infos_film">
      <div id="image">
        <img :src="movieDetail.Poster" alt="Blade runner" class="film" />
      </div>
      <div id="infos">
        <div id="rated">
          <h1 id="title">{{ movieDetail.Title }}</h1>
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
        <h6>Director : {{ movieDetail.Director }}</h6>
        <h6>Writer : {{ movieDetail.Writer }}</h6>
        <h6>Actors : {{ movieDetail.Actors }}</h6>
        <div class="vide"></div>
        <h5>Description :</h5>
        <h6 style="width: 1000px">{{ movieDetail.Plot }}</h6>
      </div>
    </div>
    <div class="infos_film">
      <div id="infos_supplementaire">
        <h5>Languages :</h5>
        <h6>{{ movieDetail.Language }}</h6>
        <h5>Country :</h5>
        <h6>{{ movieDetail.Country }}</h6>
        <h5>Awards :</h5>
        <h6>{{ movieDetail.Awards }}</h6>
      </div>
    </div>
    <div id="notes">
      <h4 id="evaluation">Evaluation</h4>
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
  width: 96%;
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
  height: 48vh;

}

#infos {
  margin-top: 50px;
  width: 96%;
  height: auto;
  text-align: left;
  padding-left: 10px;
  padding-right: 10px;
  background-color: #fff56e;
  border-radius: 20px;
  border: 2px solid white;
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
  color: black;
  background-color: #fff56e;
  border-radius: 20px;
}

#getback {
  color: black;
  font-size: 25px;
  text-decoration: none;
  background-color: white;
  border-radius: 20px;
  width: 250px;
  height: 40px;
  text-align: center;
  margin-top: 5px;
  border: 2px solid black;
}

#cadre {
  border: 2px solid white;
  width: auto;
  height: 40px;
  margin-right: 50%;
  padding-left: 5px;
  padding-right: 5px;
  border-radius: 10px;
  margin-top: 10px;
  text-align: center;
  margin-left: 20px;
  background-color: #274172;
  color: #fff56e;
}

#infos_supplementaire {
  margin-top: 20px;
  margin-bottom: 10px;
  background-color: #fff56e;
  border-radius: 20px;
  border: 2px solid white;
  padding-left: 10px;
  padding-top: 10px;
  padding-bottom: 10px;
  width: 100%;
}

#evaluation {
  background-color: #8e949d;
  border-radius: 20px;
  border: 2px solid white;
  margin-top: 10px;
  margin-left: 10px;
  padding-bottom: 5px;
  padding-top: 5px;
  width: 96%;
  text-align: center;
}

#title {
  -webkit-text-stroke: 1px white;
  font-family: Stencil Std, fantasy;
}

li {
  background-color: #fff56e;
  border-radius: 20px;
  border: 2px solid white;
  width: 300px;
  height: 80px;
  text-align: center;

  justify-content: center;
}

ul {
  display: flex;
  justify-content: center;
  padding-right: 60px;
}

#notes {
  align-items: center;
  justify-content: center;
}
</style>
