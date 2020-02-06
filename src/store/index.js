import Vue from 'vue'
import Vuex from 'vuex'

// import your mutation type name constants
import * as types from './mutation-types'

Vue.use(Vuex)

export default new Vuex.Store({
  // Disable strict mode in prod
  strict: process.env.NODE_ENV !== 'production',

  state: {
    user: ''
  },	
  getters: {
    user: state => state.user
  },
  mutations: {
    // mutating your user state
    [types.UPDATE_USER](state, user) {
      state.user = user
    }
  },
  actions: {

  }
})