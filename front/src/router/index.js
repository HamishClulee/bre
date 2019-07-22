import Vue from 'vue'
import Router from 'vue-router'
import home from '../views/home.vue'
import notfound from '../views/notfound'
import tour from '../views/tour.vue'

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
            path: '/tour/:tourname',
            name: 'tour',
            component: tour,
            props: true
        },
        {
            path: '*',
            name: 'notfound',
            component: notfound
        }
    ]
})
