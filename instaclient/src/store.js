import Vue from 'vue'
import Vuex from 'vuex'
import router from './router' // Added in 

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    api_url: 'http://localhost:3000/',
    isAuthenticated: false,
    feed: []
  },
  mutations: {
    getFeed (state, feed) {
      state.feed = feed;
    },
    isAuthenticated (state) {
      if (localStorage.getItem('jwt') != null) {
        state.isAuthenticated = true;
      } else {
        state.isAuthenticated = false;
      }
    },
    login (state, token) {
      state.isAuthenticated = true;
      localStorage.setItem('jwt', token);
      router.push('/'); // Removed this.$
    },
    logout (state) {
      state.isAuthenticated = false;
      localStorage.removeItem('jwt');
      router.push('/login');  // Removed this.$
    }
  }
})
