<template>
    <div id="app">
        <Header />
        <router-view />
    </div>
</template>

<script lang="ts">
    import Header from './components/Header.vue';

    export default {
        name: 'App',
        components: {
            Header,
        },
    };
</script>

<style></style>
