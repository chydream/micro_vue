import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import demo from '@/components/demo'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/app/index',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/app/index/demo',
      name: 'demo',
      component: demo
    }
  ]
})
