import Vue from 'vue'
import App from './App.vue'
import VueResource from "vue-resource"
import router from './router/router.js'

Vue.use(VueResource);
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
