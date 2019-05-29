import Vue from 'vue'
import Router from 'vue-router'
import mainPage from '@/components/MainPage'
// import HelloWorld from '@/components/HelloWorld'
import About from '@/components/About'
import Portfolio from '@/components/Portfolio'
import Services from '@/components/Services/AllServices'
import Sales from '@/components/Services/Sales'
import Work from '@/components/PortfolioWork'
import PodServices from '@/components/Services/PodServices'
import Login from '@/components/admin/Auth/Login'
import AdminServices from '@/components/admin/Services'
import AdminPortfolio from '@/components/admin/Portfolio'
import EditSetting from '@/components/admin/EditSetting'
import NewService from '@/components/admin/AddService'

import store from '../store'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Main-page',
      component: mainPage
    },
    {
      path: '/about',
      name: 'About',
      component: About
    },
    {
      path: '/services',
      name: 'Services',
      component: Services
    },
    {
      path: '/sales',
      name: 'Sales',
      component: Sales
    },
    {
      path: '/portfolio',
      name: 'Portfolio',
      component: Portfolio
    },
    {
      path: '/portfolio-work/:id',
      props: true,
      name: 'Portfolio-work',
      component: Work
    },
    {
      path: '/pod-services/:id',
      props: true,
      name: 'Portfolio',
      component: PodServices
    },

    // Admin

    {
      path: '/admin',
      name: 'Admin',
      beforeEnter (to, from, next) {
        store.getters.checkUser ? next('/admin/services') : next('/admin/login')
      }
    },
    {
      path: '/admin/login',
      name: 'Admin',
      component: Login
    },
    {
      path: '/admin/services',
      name: 'Admin Services',
      component: AdminServices,
      // beforeEnter (to, from, next) {
      //   store.getters.checkUser ? next() : next('/admin/login')
      // }
    },
    {
      path: '/admin/portfolio',
      name: 'Admin Portfolio',
      component: AdminPortfolio,
      // beforeEnter (to, from, next) {
      //   store.getters.checkUser ? next() : next('/admin/login')
      // }
    },
    {
      path: '/admin/new-service',
      name: 'New Service',
      component: NewService,
      // beforeEnter (to, from, next) {
      //   store.getters.checkUser ? next() : next('/admin/login')
      // }
    },
    {
      path: '/admin/edit-setting/:id',
      props: true,
      name: 'Edit-Setting',
      component: EditSetting,
      // beforeEnter (to, from, next) {
      //   store.getters.checkUser ? next() : next('/admin/login')
      // }
    }
  ]
})
