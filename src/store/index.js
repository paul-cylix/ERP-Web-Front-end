import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

import authModule from './modules/auth.js';


const store = new Vuex.Store({
  modules: {
    auth: authModule
  },

})


export default store;