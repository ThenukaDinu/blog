import Vue from 'vue'
import App from './BlogApp.vue'

Vue.config.productionTip = false

new Vue({
  render: h => h(App)
}).$mount('#app')
