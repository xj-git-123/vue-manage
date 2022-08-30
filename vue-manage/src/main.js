import Vue from 'vue'
import App from './App.vue'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import router from '../router/index.js'
import '../src/assets/less/index.less'
import store from '../store'
import axios from 'axios'
import '../api/mock'

Vue.config.productionTip = false
Vue.use(ElementUI)
Vue.prototype.$axios=axios
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
