import Vue from 'vue'
import Router from 'vue-router'
import home from '../views/home.vue'
import notfound from '../views/notfound'
import rayasemat from '../views/rayasemat'
import rayacanggu from '../views/rayacanggu'
import book from '../views/book'

Vue.use(Router)
export default new Router({
    mode: 'history',
    routes: [
        {
            path: '/',
            name: 'home',
            component: home
        },
        {
            path: '/',
            name: 'book',
            component: book
        },
        {
            path: '/',
            name: 'rayasemat',
            component: rayasemat
        },
        {
            path: '/',
            name: 'rayacanggu',
            component: rayacanggu
        },
        {
            path: '*',
            name: 'notfound',
            component: notfound
        }
    ]
})
