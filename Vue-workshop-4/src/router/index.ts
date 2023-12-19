import Home from '../components/Home.vue';
import Login from '../components/Login.vue';
import Dashboard from '../components/Dashboard.vue';
import { createRouter, createWebHistory } from 'vue-router';

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            component: Home,
        },
        {
            path: '/login',
            component: Login,
        },
        {
            path: '/dashboard',
            component: Dashboard,
        },
    ],
});

export default router;
