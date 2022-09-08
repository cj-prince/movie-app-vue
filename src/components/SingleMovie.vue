<template>
  
  <div class="hello">
   <loadingState v-if="loading"/>
   <div class="content" v-else>
     <div class="poster">
       <img :src="singleList.Poster" alt="">
     </div>
     <div class="movie-details">
      <button class="btn btn-primary" @click="goBack">	&larr; Back</button>
      <div class="side">
        <div class="title">{{singleList.Title}}</div>
        <div class="subtext">
          {{singleList.Type}} &#8226; <span>{{singleList.Released}}</span>
        </div>
      </div>
       <div class="plot">Plot: <span class="font"> {{singleList.Plot}}</span></div>
       <div class="actors">Actors: <span class="font">{{singleList.Actors}}</span> </div>
       <div class="genre" >
       Genre: <span id="genre" v-for="g in singleList.Genre?.split(', ')" :key="g">{{g}} </span> </div>
       <div class="rating">IMDB Rating: <span class="font">{{singleList.imdbRating}} </span> ⭐️</div>
     </div>
   </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'SinglePage',
  data: () => ({
    
  }),
  components:{
    
  },
  mounted(){
    const movieId = this.$route.params.movieId
    this.$store.dispatch('fetchSingleMovie', movieId)
  },
  methods: {
    goBack(){
      this.$router.back()
    }
  },

  computed: {
    ...mapState(['loading', 'singleList'])
  }
  
}

</script>


<style scoped>
  .btn{
    margin-top: 20px;
    padding: 12px 24px;
    font-size: 16px;
    width: 150px; 
  }

  .btn-primary{
    background: transparent;
    box-shadow: 0px 8px 16px rgba(0, 0, 0, 0.15);
    border-radius: 68px;
    cursor: pointer;
    color: #C43838;
    border-color: #C43838;
  }

  .btn-primary:hover{
   opacity: 0.7;
  }

  .poster img{
    width: 100%;
    
  }

  .movie-details{
    display: flex;
    flex-direction: column;
    gap: 20px;
  }

  .title{
    font-weight: 700;
    font-size: 32px;
    line-height: 40px;
    letter-spacing: -0.02em;
  }

  .subtext{
    color: rgba(255, 255, 255, 0.55);
    text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    text-transform: capitalize;
  }
  .font{
    color: rgba(255, 255, 255, 0.55);
  }

  .plot{
    max-width: 346px;
  }
  #genre{
    font-size: 12px;
    line-height: 16px;
    color: rgba(255, 255, 255, 0.4);
    padding: 8px 24px;
    background: #373636;
    border-radius: 50px;
    margin-inline: 8px;
  }
  @media(min-width: 760px){
    .content{
      max-width: 90%;
      margin-inline: auto;
      margin-block: 70px;
      display: grid;
      grid: 1fr / 289px auto;
      gap: 32px;
    }
  }
</style>