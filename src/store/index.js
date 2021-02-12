import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    url: '',
  },
  mutations: {
    setUrl(state, payload) {
      state.url = payload;
    }
  },
  actions: {
    setUrl(context, payload) {
      context.commit("setUrl", payload);
    }
  },
  modules: {
  }
})
