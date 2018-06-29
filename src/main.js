import Vue from 'vue'
import Layout from './components/layout'
import App from './App'
import Router from 'vue-router'
Vue.config.pFroductionTip = false
Vue.use(Router)
/* eslint-disable no-new */
let router = new Router({
})
new Vue({
  el: '#app',
  router,
  components: { Layout },
  template: '<Layout/>'
})
