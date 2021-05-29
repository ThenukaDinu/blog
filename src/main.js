import Vue from 'vue'
import App from './BlogApp.vue'
import CoreuiVue from '@coreui/vue';
import router from './router'

Vue.use(CoreuiVue);

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
