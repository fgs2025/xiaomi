import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    zh: "123",
    mm: "123",
    merchandise:{}
  },
  mutations: {
    increment(state, merchandise) {
      state.merchandise = merchandise;
    },
  },
  actions: {},
  modules: {},
});
