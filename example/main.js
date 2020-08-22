import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'

import VueLoading from '../src'
Vue.component('VueLoading', VueLoading)

Vue.config.productionTip = false

new Vue({
  vuetify,
  render: (h) => h(App),
}).$mount('#app')
