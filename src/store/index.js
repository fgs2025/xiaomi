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
// state: {
//   count: 0,
//   user:{
//       name:"",
//       account:'',
//       password:'',
//   },
//   car:[]
// },
// getters:{
//   getUser(state){
//       return state.user
//   },
//   getCount(state){
//       return state.count
//   },
//   getCar(state){
//       return state.car
//   }
// },
// mutations: {
//   increment(state) {
//       setTimeout(()=>{
//           state.count++
//       },1000)
//   },
//   setUser(state,val){
//       state.user=val;
//   },
//   setCar(state){
//       state.car = [];
//   },
//   pushCar(state,val){
//       let find = state.car.find(ro=>ro.good_id==val.good_id);
//       if(find){
//           find.num++
//       }else{
//           state.car.push(val)
//       }
//   },
//   optionCar(state,fn){
//       fn(state)
//   }
// },
// actions:{
//   setUser({commit},val) {
//       commit('setUser',val)
//   },
//   setCar({commit},val){
//       commit('setCar',val)
//   },
//   pushCar({commit},val){
//       commit('pushCar',val)
//   },
//   optionCar({commit},val){
//       commit('optionCar',val)
//   }
// }