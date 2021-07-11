import Vue from 'vue'
import App from './App.vue'
import router from './router'
import request from "network/request.js"

Vue.config.productionTip = false

Vue.prototype.$request = request;

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
