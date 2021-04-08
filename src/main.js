import Vue from 'vue'
import Dashboard from './Dashboard.vue'

import './assets/css/tailwind.css'

Vue.config.productionTip = false

new Vue({
  render: h => h(Dashboard),
}).$mount('#app')
