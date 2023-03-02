import  { createRouter, createWebHashHistory } from 'vue-router';

import baseBeacon from '../components/baseBeacon.vue'
import baseTest from '../components/baseTest.vue'

const routes = [
    {
        path: '/',
        component: baseBeacon
    },
    {
        path: '/test',
        component: baseTest
    }
]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

export default router;