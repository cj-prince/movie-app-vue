<template>
  <div class="home">
    <form class="input-container" @submit.prevent="search">
      <input type="text" v-model="searchKeyword" placeholder="Enter movie title... " >
      <button class="btn btn-primary" >Search</button>
    </form>

    <div class="loading" v-if="loading">
    <div class="lds-roller"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
    </div>

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

import {mapState} from 'vuex'
import {searchMovie} from '@/api/movies'

export default {
  name: 'HomeView',
  data: () => ({
    searchKeyword:'',
    loading: false
  }),

  components: {
   
  },
  methods:{
    
    async search(){
      try {
        this.loading = true;
        const response = await searchMovie(this.searchKeyword)
        const data = response.data
        if (data.Response === 'True'){
          const movieList = response.data.Search 
          this.$store.dispatch('updateList', movieList)
          this.loading = false
        }
      } catch (error) {
        console.log(error)
      } finally{
        this.loading = false
      }
     
      
    },

    goToMovie(movieId){
      this.$router.push(`/${movieId}`)
    }
  },
  computed:{
    ...mapState(['movieList'])
  },

  // mounted(){
  //   this.$store.dispatch('clearList')
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

  .loading{
    min-height: 400px;
    display: grid;
    place-content: center;
  }
  .lds-roller {
  display: inline-block;
  position: relative;
  width: 80px;
  height: 80px;
}
.lds-roller div {
  animation: lds-roller 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
  transform-origin: 40px 40px;
}
.lds-roller div:after {
  content: " ";
  display: block;
  position: absolute;
  width: 7px;
  height: 7px;
  border-radius: 50%;
  background: #fff;
  margin: -4px 0 0 -4px;
}
.lds-roller div:nth-child(1) {
  animation-delay: -0.036s;
}
.lds-roller div:nth-child(1):after {
  top: 63px;
  left: 63px;
}
.lds-roller div:nth-child(2) {
  animation-delay: -0.072s;
}
.lds-roller div:nth-child(2):after {
  top: 68px;
  left: 56px;
}
.lds-roller div:nth-child(3) {
  animation-delay: -0.108s;
}
.lds-roller div:nth-child(3):after {
  top: 71px;
  left: 48px;
}
.lds-roller div:nth-child(4) {
  animation-delay: -0.144s;
}
.lds-roller div:nth-child(4):after {
  top: 72px;
  left: 40px;
}
.lds-roller div:nth-child(5) {
  animation-delay: -0.18s;
}
.lds-roller div:nth-child(5):after {
  top: 71px;
  left: 32px;
}
.lds-roller div:nth-child(6) {
  animation-delay: -0.216s;
}
.lds-roller div:nth-child(6):after {
  top: 68px;
  left: 24px;
}
.lds-roller div:nth-child(7) {
  animation-delay: -0.252s;
}
.lds-roller div:nth-child(7):after {
  top: 63px;
  left: 17px;
}
.lds-roller div:nth-child(8) {
  animation-delay: -0.288s;
}
.lds-roller div:nth-child(8):after {
  top: 56px;
  left: 12px;
}
@keyframes lds-roller {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>
