import Vue from 'vue'
import Router from 'vue-router'
import main from '@/components/main'
import Users from '@/components/Users'
import contact from '@/components/contact'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'main',
      component: main
    },
    {
      path: '/users',
      name: 'Users',
      component: Users
    },
    {
      path: '/contact',
      name: 'contact',
      component: contact
    }
  ]
})
