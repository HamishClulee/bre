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
            path: '/:type/:index/:tourname',
            name: 'tour',
            component: tour
        },
        {
            path: '*',
            name: 'notfound',
            component: notfound
        }
    ]
})
