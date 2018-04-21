import Vue from 'vue'
import Router from 'vue-router'
import HomePage from '@/components/HomePage'
import LanguagesPage from '@/components/LanguagesPage'
import DevelopersPage from '@/components/DevelopersPage'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/home',
      name: 'Home',
      component: HomePage
    },
    {
      path: '/languages',
      name: 'Languages',
      component: LanguagesPage
    },
    {
      path: '/developers',
      name: 'Developers',
      component: DevelopersPage
    }
  ]
})
