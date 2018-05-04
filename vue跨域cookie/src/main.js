// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import rootPath from './config/api.js'

Vue.config.productionTip = false
Vue.http.interceptors.push(function(request, next) {//拦截器
// 跨域携带cookie
  request.credentials = true;
  next()
})
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App },
  data: {
    urlPath : rootPath.pathUrl()//通过api.js 控制 开发 和线上环境
  }
})
