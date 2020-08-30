import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'

import VueLoading from '../src'
// import VueLoading from '../lib/vue-loading-twa.min.js'
Vue.component('VueLoading', VueLoading)

Vue.config.productionTip = false

new Vue({
  vuetify,
  render: (h) => h(App),
}).$mount('#app')
