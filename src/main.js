import Vue from 'vue'
import App from './App.vue'

// Tailwind
import './assets/css/tailwind.css'
// Vue Router
import router from './router'
// Vue Vuex
import store from './store'


Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
