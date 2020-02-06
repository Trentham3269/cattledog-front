import Vue from 'vue'
import App from './App.vue'
import store from './store';
import axios from 'axios'
import vuetify from './plugins/vuetify';

Vue.config.productionTip = false

Vue.use({
    install (Vue) {
    Vue.prototype.$http = axios.create({
      baseURL: 'http://localhost:8888/'
    })
  }
})

new Vue({
  vuetify,
  store,
  render: h => h(App)
}).$mount('#app')
