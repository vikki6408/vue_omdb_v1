<template>
  <link
    rel="stylesheet"
    href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css"
  />
  <div class="details" v-if="movieDetails">
    <div class="repartition">
      <MovieDetail :movieDetail="movieDetails"></MovieDetail>
    </div>
  </div>
</template>

<script>
import MovieDetail from '@/components/MovieDetail.vue'
import apiFilm from "@/services/apiFilm";

export default {
  name: "DetailView",
  components: {
    MovieDetail,
  },
  data() {
    return {
      movieDetails: null,
    };
  },
  computed:{
    idQuery() {
      return this.$route.query.id || ""
    }
  },
  watch:{
    idQuery:{
      immediate:true,
      handler(id){
        console.log("handle", id)
        this.getMovie(id)
      }
    }
  },
  methods: {
    getMovie(id){
      apiFilm.getMovies(id)
          .then((response) =>{
            this.movieDetails = response.data
          })
          .catch((error) => {
            console.log(error)
          })
    },
    selectTitle(title) {
      this.Title = title
    }
  }
};
</script>

<style>
.repartition{
  display: flex;
  height: 100vh;
}
.menu {
  width: 12%;
  height: auto;
  background-color: #274172;
  color: white;

}
.responsive {
  width: 100%;
  height: auto;
}
</style>
