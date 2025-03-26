<template>
  <div class="displayMovie">
    <img id="movieMiniature" :src="poster" />
    <div id="movieFooter">
      <h1 @click="handleMovieClick" style="color: blue; font-size: 30px"> {{ title }} </h1>
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
}

#movieMiniature {
  height: 400px;
}

#movieFooter {
  color: black;
  font-size: 20px;
  padding-top: 5px;
}
</style>
