import { createStore } from 'vuex'
import { searchMovie, singleMovie } from '@/api/movies';

export default createStore({
  state: {
    movieList: [],
    singleList: [],
    loading: false,
    error: null,
    totalResult: 1
  },
  getters: {
  },
  mutations: {
    UPDATE_LIST(state, movieList) {
      state.movieList = movieList;
    },
    SET_ERROR(state, errorMessage){
      state.error =errorMessage
    },
    SET_LOADING(state, loadingState){
      state.loading = loadingState
    },
    SET_MOVIE(state, movieObj){
      state.singleList = movieObj
    },
    SET_RESULT_COUNT(state, count){
      state.totalResult = parseInt(count) 
    }
  },
  actions: {
    updateList({commit}, movieList){
      commit('UPDATE_LIST', movieList)
    },
    clearList({commit}){
      commit('UPDATE_LIST', [])
    },
    async fetchMovies({commit}, option){
      try {
        const {searchPhrase, page} = option
        commit('SET_LOADING', true)
        const response = await searchMovie(searchPhrase, page)
        const data = response.data
        
        if (data.Response === 'True'){
          const movieList = response.data.Search 
          const totalResult = response.data.totalResults
          commit('UPDATE_LIST', movieList)
          commit('SET_RESULT_COUNT', totalResult)
          commit('SET_ERROR', null)
        }else{
          commit('UPDATE_LIST', [])
          commit('SET_ERROR', data.Error)
        }
      } catch (error) {
        console.log(error)
      } finally {
        commit('SET_LOADING', false)
      }
    },
    async fetchSingleMovie({commit}, movieId){
      try {
        commit('SET_LOADING', true)
        const response = await singleMovie(movieId)
        const {data} = response
        commit('SET_MOVIE', data)
        commit('SET_ERROR', null)
      } catch (error) {
        console.log(error)
        commit('SET_ERROR', error.message)
      } finally{
        commit('SET_LOADING', false)
      }
      
    }
  },
  modules: {
  },

  
})
