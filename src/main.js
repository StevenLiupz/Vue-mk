// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
// 引入fastclick - 解决移动端下click事件有300毫秒延迟的问题
import fastclick from 'fastclick';
import VueAwesomeSwiper from 'vue-awesome-swiper'
import '@/assets/css/reset.css'
import '@/assets/css/border.css'
import 'css/iconfont.css'
import 'swiper/dist/css/swiper.css'

Vue.config.productionTip = false
fastclick.attach(document.body)
Vue.use(VueAwesomeSwiper)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
