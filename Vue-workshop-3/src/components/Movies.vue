<template>
    <h1>This is Movies</h1>
    <ul>
        <li v-for="movie of movies" :key="movie.id">
            <router-link :to="{ name: 'MovieDetails', params: { id: movie.id } }">{{ movie.title }}</router-link>
        </li>
    </ul>
</template>

<script>
    import { ref, onMounted } from 'vue';

    export default {
        name: 'Movies',
        setup() {
            const movies = ref([]);

            const fetchMovies = async () => {
                try {
                    const response = await fetch('http://localhost:3000/movies');
                    const data = await response.json();
                    movies.value = data;
                    console.log(movies.value);
                } catch (error) {
                    console.log(error);
                }
            };

            onMounted(() => {
                fetchMovies();
            });

            return {
                movies,
            };
        },
    };
</script>

<style scoped></style>
