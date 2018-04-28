import Vue from 'vue'
import Router from 'vue-router'
import HomePage from '@/components/HomePage'
import LanguagesPage from '@/components/LanguagesPage'
import LangPage from '@/components/LangPage'
import DevelopersPage from '@/components/DevelopersPage'
import ProfilePage from '@/components/ProfilePage'
import OrgPage from '@/components/OrganizationsPage'
import SearchPage from '@/components/SearchPage'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      redirect: 'home'
    },
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
      path: '/languages/:lang',
      name: 'Language',
      component: LangPage
    },
    {
      path: '/developers',
      name: 'Developers',
      component: DevelopersPage
    },
    {
      path: '/developers/:login',
      name: 'Profile',
      component: ProfilePage
    },
    {
      path: '/organizations',
      name: 'Organizations',
      component: OrgPage
    },
    {
      path: '/search',
      name: 'Search',
      component: SearchPage
    }
  ]
})
