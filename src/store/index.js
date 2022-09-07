import { createStore } from 'vuex'

export default createStore({
  state: {
    movieList: []
  },
  getters: {
  },
  mutations: {
    UPDATE_LIST(state, movieList) {
      state.movieList = movieList;
    },
  },
  actions: {
    updateList({commit}, movieList){
      commit('UPDATE_LIST', movieList)
    },
    clearList({commit}){
      commit('UPDATE_LIST', [])
    }
  },
  modules: {
  }
})
