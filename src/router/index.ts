import {createRouter, createWebHistory} from 'vue-router'
import {loadLayoutMiddleware} from "@/router/middleware/loadLayoutMiddleware";

const routes = [
    {
        path: '/',
        name: 'Home',
        component: () => import('@/components/layouts/AppLayout.vue')
    },
    {
        path: '/programming',
        name: 'Programming',
        component: () => import('@/components/views/Programming.vue')
    },
    {
        path: '/web-development',
        name: 'Web Development',
        component: () => import('@/components/views/MobileDevelopment.vue')
    },
    {
        path: '/mobile-development',
        name: 'Mobile Development',
        component: () => import('@/components/views/MobileDevelopment.vue')
    },
    {
        path: '/data-science',
        name: 'Data Science',
        component: () => import('@/components/views/DataScience.vue')
    },
    {
        path: 'ai',
        name: 'Artificial Intelligence',
        component: () => import('@/components/views/ArtificialIntelligence.vue')
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})
router.beforeEach(loadLayoutMiddleware)

export default router