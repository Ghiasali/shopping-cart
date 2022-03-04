import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import {BootstrapVue} from 'bootstrap-vue'
import  'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import Routes from './routes'
import Store from './store/store'
Vue.use(BootstrapVue)
Vue.use(VueRouter)
// Vue.use(IconPlugin)
Vue.config.productionTip = false
const router=new VueRouter({
  routes:Routes, 
  mode:"history"
})
new Vue({
  render: h => h(App),
  router,
  Store
}).$mount('#app')
