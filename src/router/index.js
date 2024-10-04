import { createRouter, createWebHistory } from 'vue-router'
import Home from '../veiws/Home.vue'

export const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            component: Home
        },
        {
            path: '/products',
            component: () => import('../veiws/Product.vue')
        },
    ]
})