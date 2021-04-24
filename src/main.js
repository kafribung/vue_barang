import Vue from 'vue'
import Dashboard from './views/Dashboard'

import './assets/css/tailwind.css'
import router from './router'

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(Dashboard)
}).$mount('#app')
