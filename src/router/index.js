import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Create from '@/components/Create'
import Ckeditor from '@/components/Ckeditor'
import List from '@/components/List'

Vue.use(Router)

export default new Router({
  mode: 'hash',
  routes: [
    // {
    //   path: '/editor',
    //   name: 'Ckeditor',
    //   component: Ckeditor
    // },
    // {
    //   path: '/',
    //   name: 'Ckeditor',
    //   component: Ckeditor
    // },
    {
      path: '/',
      name: 'Create',
      component: Create
    },
  ]
})
