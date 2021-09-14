import Vue from 'vue'
import './plugins/axios'
import App from './App.vue'
import router from './router'
// import "./plugins/myplugin"
import './assets/animate.min.css'
import './assets/minireset.min.css'
import store  from './store'
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
// console.log(Vue.hello);
// 全局插件调用
// Vue.hello();