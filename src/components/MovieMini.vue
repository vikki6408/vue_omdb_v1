<template>
  <div class="displayMovie">
    <img id="movieMiniature" :src="poster" />
    <div id="movieFooter">
      <a style="color: blue; font-size: 30px"> {{ title }} </a>
      <p>{{ year }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MovieMini',
  props: {
    title: String,
    year: Number,
    poster: String,
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.displayMovie {
  height: 500px;
  width: 300px;
  background-color: #fff570;
  display: flex;
  flex-direction: column;
  margin: 10px;
}

#movieMiniature {
  height: 400px;
}

#movieFooter {
  color: black;
  font-size: 20px;
  padding: 10px;
}
</style>
