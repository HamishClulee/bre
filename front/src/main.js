import './style/index.sass'
import Vue from 'vue'
import App from './App.vue'
import store from './store'
import router from './router'
import C from './content.js'

import {VueMasonryPlugin} from 'vue-masonry'

Vue.use(VueMasonryPlugin)

Vue.prototype.$content = C.C
Vue.use(store)
Vue.use(router)
Vue.config.productionTip = false

new Vue({
    store,
    router,
    render: h => h(App),
}).$mount('#app')
