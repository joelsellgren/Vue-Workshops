<template>
    <header>
        <h1>My App</h1>
        <nav>
            <router-link to="/">Home</router-link>
            <router-link v-if="!authStore.isLoggedIn" to="/login">Login</router-link>
            <router-link v-if="authStore.isLoggedIn" to="/" @click="handleLogout">Logout</router-link>
        </nav>
    </header>
</template>

<script setup lang="ts">
    import { useAuthStore } from '../store/auth';
    const authStore = useAuthStore();
    console.log(authStore.isLoggedIn);

    const handleLogout = () => {
        authStore.logout();
    };
</script>

<style scoped></style>
