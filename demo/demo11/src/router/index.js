import Vue from 'vue'
import Router from 'vue-router'


Vue.use(Router);
import Home from '../components/home.vue'
import Detail from '../components/detail.vue'

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path:'/home',
      name:'detail',
      component:Detail
    }
  ]
})
