import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router);
import Home from '../template/home';
import Detail from '../template/detail';

export default new Router({
    routes:[
        {path:'/',component:Home},
        {path:'/detail',component:Detail}
    ]
})
