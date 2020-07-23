import Vue from 'vue'
import Vuex from 'vuex'

//1.安装插件
Vue.use(Vuex)

//2.创建对象
const store = new Vuex.Store({
  state: {
    rec_on_changing:{
      rec_ID:'',

    }
  },
  mutations: {
//方法,state自动传参
  },
  actions: {},
  getters: {},
  modules: {}
})

//3.导出store对象
export default store
