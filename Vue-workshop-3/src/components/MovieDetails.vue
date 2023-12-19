<template>
    <div v-if="movie">
        <h1>{{ movie.title }}</h1>
        <p>Director: {{ movie.director }}</p>
        <p>Release year: {{ movie.year_released }}</p>
        <h3>Cast:</h3>
        <p v-for="actor of movie.main_cast">{{ actor }}</p>
    </div>
    <div v-else>
        <p>Loading</p>
    </div>
</template>

<script>
    import { defineComponent, ref, onMounted } from 'vue';
    import { useRoute } from 'vue-router';

    export default defineComponent({
        name: 'MovieDetails',
        setup() {
            const movie = ref(null);
            const route = useRoute();
            console.log(route.params.id);

            const fetchMovie = async (movieId) => {
                try {
                    const response = await fetch(`http://localhost:3000/movies/${movieId}`);
                    const data = await response.json();
                    movie.value = data;
                    console.log(movie.value);
                } catch (error) {
                    console.log(error);
                }
            };

            onMounted(async () => {
                console.log('onmounted');
                const movieId = route.params.id;
                fetchMovie(movieId);
            });

            return {
                movie,
            };
        },
    });
</script>

<style scoped></style>
