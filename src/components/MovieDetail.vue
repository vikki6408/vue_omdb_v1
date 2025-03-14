<template>
  <div class="affichage_films">
    <div class="infos_film">
      <div id="image">
        <img :src="Poster" alt="Blade runner" class="film">
      </div>
      <div id="infos">
        <div id="rated">
          <h1>{{Title}}</h1>
          <h3 id="cadre">{{Rated}}</h3>
          <router-link to="/" style="color: #FFF56E; font-size: 30px">Get Back</router-link>

        </div>
        <h6>{{Released}}, {{Type}}, {{Runtime}}</h6>
        <h6>{{Genre}}</h6>
        <div class="vide"></div>
        <h5>Director :  {{Director}}</h5>
        <h5>Writer :  {{Writer}}</h5>
        <h5>Actors :  {{Actors}}</h5>
        <div class="vide"></div>
        <h5>Description :</h5>
        <h6>{{Plot}}</h6>
      </div>
    </div>
    <div class="infos_film" style="margin-left: 10px;">
      <div>
        <h5>Languages :</h5>
        <h6>{{Language}}</h6>
        <h5>Country :</h5>
        <h6>{{Country}}</h6>
        <h5>Awards :</h5>
        <h6>{{Awards}}</h6>
        <div class="vide"></div>
        <h5>Evaluations :</h5>
        <!-- <ul class="ratings">
          <li class="rating" v-for="rating in Ratings">{{rating.Source}} <br> {{rating.Value}}</li>
        </ul> -->
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MovieDetail',
  props: {
    title: String,
    year: Number,
    poster: String,
  },
}
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

#getback{
  color: #FFF56E;
  margin-right: 10vh;
}

#cadre{
  border: 2px solid #FFF56E;
  height: 40px;
  width: 55px;
  margin-right: 80vh;
  margin-top: 10px;
  text-align: center;


}
</style>