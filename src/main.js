// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ViewUI from 'view-design';
import 'view-design/dist/styles/iview.css';
import Global from './global_var'
import store from "./store";
Vue.config.productionTip = false
//Vue.use(router);
Vue.use(ViewUI);

Vue.prototype.GLOBAL = Global
//import css
import 'vue-beauty/package/style/vue-beauty.min.css'
//import components
import vueBeauty from 'vue-beauty'

Vue.use(vueBeauty)

/* eslint-disable no-new */
let root = new Vue({
  el: '#app',
  router,
  store,
  components: {App},
  template: '<App/>'
})
