import Vue from 'vue'
import App from './App.vue'
import store from './vuex/store'
import router from './router/router'

// reset style and normalize.css
import 'reset-css'
import 'normalize.css'

//style.scss
import './assets/scss/style.scss'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  store,
  router
}).$mount('#app')
