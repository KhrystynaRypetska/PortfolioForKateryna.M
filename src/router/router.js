import Vue from 'vue'
import Router from 'vue-router'

import Catalog from '../components/Catalog'
import PageItem from '../components/PageItem'
import Info from '../components/Info'

Vue.use(Router);

let router = new Router({
    mode: 'history',
    routes:[
        {
            path: '/',
            name: 'catalog',
            component: Catalog,
            props: true
        },
        {
            path: '/page/:id',
            name: 'page',
            component: PageItem,
        },
        {
            path: '/info',
            name: 'info',
            component: Info,
            props: true
        },
    ]
})

export default router;