import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import map from '../views/map.vue'
import scroll from '../views/scroll.vue'
import emotion from '../views/emotion.vue'
import input from '../views/input.vue'
import excel from '../views/excel.vue'
import animate from '../views/vueAnimate.vue'
import reverse from '../views/reverse.vue'

import one from '../views/1.vue';
import two from '../views/2.vue';
import three from '../views/3.vue';

Vue.use(VueRouter)

const routes = [{
    path: '/',
    name: 'Home',
    component: Home
},

    {
        path: '/scroll',
        name: 'scroll',
        component: scroll
    },
    {
        path: '/reverse',
        name: 'reverse',
        component: reverse
    },
    {
        path: '/excel',
        name: 'excel',
        component: excel
    },
    {
        path: '/vue/animate',
        name: 'animate',
        component: animate
    },

    {
        path: '/map',
        name: 'map',
        component: map
    }, {
        path: '/emotion',
        name: 'emotion',
        component: emotion
    },
    {
        path: '/input',
        name: 'input',
        component: input
    },
    {
        path: '/about',
        name: 'About',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import( /* webpackChunkName: "about" */ '../views/About.vue'),
        children: [{
            path: 'two',
            name: '2',
            component: two
        },
            {
                path: 'one',
                name: '1',
                component: one
            }, {
                path: 'three',
                name: '3',
                component: three,
            },
        ]
    }
]

const router = new VueRouter({
    routes
})

export default router
