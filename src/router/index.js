import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Create from '@/components/Create'
import List from '@/components/List'

Vue.use(Router)

export default new Router({
  mode: 'hash',
  routes: [
    // {
    //   path: '/home',
    //   name: 'Home',
    //   component: Home
    // },
    {
      path: '/',
      name: 'Create',
      component: Create
    },
    // {
    //   path: '/list',
    //   name: 'List',
    //   component: List
    // },
  ]
})
