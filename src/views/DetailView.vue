<template>
  <link
    rel="stylesheet"
    href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css"
  />
  <div class="details">
    <div class="repartition">
      <div class="menu">
        <img class="responsive" src="../assets/logo.png" alt="Logo" />
      </div>
      <MovieDetail></MovieDetail>
    </div>
  </div>
</template>

<script>
import MovieDetail from '@/components/MovieDetail.vue'

export default {
  name: "DetailView",
  components: {
    MovieDetail,
  },
  data() {
    return {
      Title: `Blade Runner`,
      Year: 1982,
      Rated: "R",
      Released: "25 Jun 1982",
      Runtime: "117 min",
      Genre: "Action, Drama, Sci-Fi",
      Director: "Ridley Scott",
      Writer: "Hampton Fancher, David Webb Peoples, Philip K. Dick",
      Actors: "Harrison Ford, Rutger Hauer, Sean Young",
      Plot: 'In the early twenty-first century, the Tyrell Corporation, during what was called the Nexus phase, developed robots, called "replicants", that were supposed to aid society, the replicants which looked and acted like humans. When the superhuman generation Nexus 6 replicants, used for dangerous off-Earth endeavors, began a mutiny on an off-Earth colony, replicants became illegal on Earth. Police units, called "blade runners", have the job of destroying - or in their parlance "retiring" - any replicant that makes its way back to or created on Earth, with anyone convicted of aiding or assisting a replicant being sentenced to death. It\'s now November, 2019 in Los Angeles, California. Rick Deckard, a former blade runner, is called out of retirement when four known replicants, most combat models, have made their way back to Earth, with their leader being Roy Batty. One, Leon Kowalski, tried to infiltrate his way into the Tyrell Corporation as an employee, but has since been able to escape. Beyond following Leon\'s trail in hopes of finding and retiring them all, Deckard believes part of what will help him is figuring out what the replicants wanted with the Tyrell Corporation in trying to infiltrate it. The answer may lie with Tyrell\'s fail-safe backup mechanism. Beyond tracking the four, Deckard faces a possible dilemma in encountering a fifth replicant: Rachael, who works as Tyrell\'s assistant. The issue is that Dr. Elden Tyrell is experimenting with her, to provide her with fake memories so as to be able to better control her. With those memories, Rachael has no idea that she is not human. The problem is not only Rachael\'s assistance to Deckard, but that he is beginning to develop feelings for her.',
      Language:
        "English, German, Cantonese, Japanese, Hungarian, Arabic, Korean",
      Country: "United States, United Kingdom",
      Awards: "Nominated for 2 Oscars. 13 wins & 22 nominations total",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BOWQ4YTBmNTQtMDYxMC00NGFjLTkwOGQtNzdhNmY1Nzc1MzUxXkEyXkFqcGc@._V1_SX300.jpg",
      Ratings: [
        {
          Source: "Internet Movie Database",
          Value: "8.1/10",
        },
        {
          Source: "Rotten Tomatoes",
          Value: "89%",
        },
        {
          Source: "Metacritic",
          Value: "84/100",
        },
      ],
      Metascore: "84",
      imdbRating: "8.1",
      imdbVotes: "842,743",
      imdbID: "tt0083658",
      Type: "movie",
      DVD: "N/A",
      BoxOffice: "$32,914,489",
      Production: "N/A",
      Website: "N/A",
      Response: "True",
    };
  },
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
