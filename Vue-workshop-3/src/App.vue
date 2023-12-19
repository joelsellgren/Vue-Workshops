<template>
    <div id="app">
        <header>
            <nav>
                <router-link to="/">Home</router-link>
                <router-link to="/about">About</router-link>
                <router-link to="/movies">Movies</router-link>
            </nav>
        </header>
        <main><router-view /></main>
        <footer>
            <p>&copy; Joel Sellgren</p>
        </footer>
    </div>
</template>

<script>
    import { defineComponent } from 'vue';
    import Home from './components/Home.vue';
    import About from './components/About.vue';
    import Movies from './components/Movies.vue';
    export default defineComponent({
        name: 'App',
        components: {
            Home,
            About,
            Movies,
        },
    });
</script>

<style scoped>
    nav {
        display: flex;
        justify-content: space-around;
        width: auto;
    }
</style>
