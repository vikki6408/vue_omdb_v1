<template>
  <div class="displayMovie">
    <img id="movieMiniature" :src="poster" />
    <div id="movieFooter">
      <h1 @click="handleMovieClick" id="title"> {{ title }} </h1>
      <p>{{ year }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MovieMini',
  props: {
    title: String,
    year: String,
    poster: String,
    imdbkey: String,
  },
  methods:{
    handleMovieClick(){
      console.log("key : ", this.imdbkey)
      this.$router.push({name: 'details', query: {id: this.imdbkey}})
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.displayMovie {
  height: fit-content;
  width: 300px;
  background-color: #fff570;
  display: flex;
  flex-direction: column;
  margin: 40px;
  border: 3px solid black;
  border-radius: 25px;
}

#movieMiniature {
  height: 400px;
  border-radius: 21px;
  border: 2px solid white;

}

#movieFooter {
  color: black;
  font-size: 20px;
  padding-top: 5px;
}

#title {
  color: #274172;
  font-size: 30px;
  -webkit-text-stroke: 1px white;
  font-weight: bold;
}
</style>
