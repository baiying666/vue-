import Vue from 'vue'
import Router from 'vue-router'
import  VueResource  from 'vue-resource'

import Hello from '@/components/Hello'
import A from '@/components/A'
import B from '@/components/B'
import C from '@/components/C'
Vue.use(Router)
Vue.use(VueResource)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    },{
      path: '/testA',
      name:'A',
      component: A
    },
    {
      path: '/testC',
      name:'B',
      component: C
    }
  ]
})
