import Vue from 'vue';

import App from './App.vue';
import router from './router/index.js';
import store from './store/'

import iView from 'iview';
import 'iview/dist/styles/iview.css';    // 使用 CSS
Vue.use(iView);

/*
router.beforeEach(({meta, path}, from, next) => {
  var { auth = true } = meta
  var isLogin = Boolean(store.state.user.userName) //true用户已登录， false用户未登录

  if (auth && !isLogin && path !== '/login') {
    return next({ path: '/login' })
  }
  next()
})
*/

new Vue({
    el:'#app',
    render:(h)=>h(App),
    router,
  store
})

