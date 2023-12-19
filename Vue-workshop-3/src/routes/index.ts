import { createRouter, createWebHistory } from 'vue-router';
import Home from '../components/Home.vue';
import About from '../components/About.vue';
import Movies from '../components/Movies.vue';
import MovieDetails from '../components/MovieDetails.vue';

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home,
    },
    {
        path: '/about',
        name: 'About',
        component: About,
    },
    {
        path: '/movies',
        name: 'Movies',
        component: Movies,
    },
    {
        path: '/movies/:id',
        name: 'MovieDetails',
        component: MovieDetails,
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
