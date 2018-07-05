import Vue from 'vue'
import App from './App'
import IndexPage from './pages/index'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
Vue.config.productionTip = false;
Vue.use(VueRouter)
Vue.use(VueResource)
let router = new VueRouter({
  routes: [
    {
    path: '/',
    component: IndexPage
    }
 ]
 })
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
