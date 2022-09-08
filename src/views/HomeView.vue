<template>
  <div class="home">
    <form class="input-container" @submit.prevent="search">
      <input type="text" v-model="searchKeyword" placeholder="Enter movie title... " >
      <button class="btn btn-primary" >Search</button>
    </form>
    <div class="error">
      {{error}}
    </div>
    <loadingState v-if="loading"/>

    <div class="img" v-if="!movieList.length && !loading">
      <img src="@/assets/Group.png" alt="">
    </div>
    <div class="container">
      <div class="movie-list" v-if="movieList != 0 && !loading">
        <div class="movie" v-for="movie in movieList" :key='movie.imdbID' @click="goToMovie(movie.imdbID)">
          <div class="image">
            <img :src='movie.Poster' alt="pics">
          </div>
          <div class="title">{{movie.Title}}</div>
          <div class="additional">
            <div class="type">{{movie.Type}}</div> -
            <div class="year">{{movie.Year}}</div>
          </div>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
// @ is an alias to /src

import {mapActions, mapState} from 'vuex'


export default {
  name: 'HomeView',
  data: () => ({
    searchKeyword:'',
  }),

  components: {
   
  },
  methods:{
    ...mapActions(['fetchMovies','clearList']),
    
    search(){
      this.fetchMovies(this.searchKeyword)
    },

    goToMovie(movieId){
      this.$router.push(`/${movieId}`)
    }
  },
  computed:{
    ...mapState(['movieList', 'loading', 'error'])
  },

  // mounted(){
  //   this.clearList()
  // }
}
</script>

<style scoped>
  .input-container{
    width: calc(100vw - 64px);
    max-width: 507px;
    height: 56px;
    padding: 6px;
    background: #313030;
    border-radius: 92px;
    display: flex;
    margin-top: 72px;
    margin-inline: auto;
  }

  .input-container input{
    flex-basis: 100%;
    background: transparent;
    border: none;
    font-size: 16px;
    padding: 20px;
    line-height: 21px;
    color: rgba(255, 255, 255, 0.5);;
  }

  .btn-primary:hover{
   opacity: 0.7;
  }

  .input-container input:focus,
  .input-container input:focus-within,
.input-container input:focus-visible{
    outline: none;
    border: none;
}

  .btn{
    padding: 12px 24px;
    font-size: 16px;
  }

  .btn-primary{
    background: #C53939;
    box-shadow: 0px 8px 16px rgba(0, 0, 0, 0.15);
    border-radius: 68px;
    cursor: pointer;
  }

  .error{
    text-align: center;
    margin-block: 1rem;
    color: #C53939;
    font-size: 32px;
    font-weight:800;
  }

  .img{
    width: 100%;
    margin-block: 80px;
  }

  .img img{
    display: block;
    width: 90%;
    max-width: 715px;
    margin-inline: auto;
  }

  .movie-list{
    display: grid;
    margin-inline: auto;
    grid-template-columns: repeat(auto-fill, minmax(220px, auto));
    gap: 32px;
    margin-top: 72px;
  }

  .movie{
    width: 100%;
    /* transition: transform 300ms ease; */
  }

  .movie:hover{
    transform: scale(1.05);
  }

  .image img{
    width: 100%;
    cursor: pointer;
  }

  .title{
    font-weight: 700;
  }

  .additional{
    display: flex;
    gap: 10px;
    color: rgba(255, 255, 255, 0.55);
    text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  }

  .type{
    text-transform: capitalize;
  }


</style>
