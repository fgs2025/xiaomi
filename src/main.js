import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import advertisement from "@/components/advertisement";
import homeBrickBox from "@/components/home-brick-box"
Vue.config.productionTip = false;
Vue.component("advertisement", advertisement);
Vue.component("homeBrickBox", homeBrickBox);
new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
