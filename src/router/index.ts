import {createRouter, createWebHistory} from 'vue-router'
import Home from '../components/views/Home.vue'

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/programming',
        name: 'Programming',
        component: () => import('../components/views/Programming.vue')
    },
    {
        path: '/webdevelopment',
        name: 'Web Development',
        component: () => import('../components/views/WebDevelopment.vue')
    },
    {
        path: '/mobile-development',
        name: 'Mobile Development',
        component: () => import('../components/views/MobileDevelopment.vue')
    },
    {
        path: '/data-science',
        name: 'Data Science',
        component: () => import('../components/views/DataScience.vue')
    },
    {
        path: '/artificial-intelligence',
        name: 'Artificial Intelligence',
        component: () => import('../components/views/ArtificialIntelligence.vue')
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router