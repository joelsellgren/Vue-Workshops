<template>
    <div>
        <h2>Dashboard</h2>
        <div v-if="authStore.isLoggedIn">
            <p>Välkommen! Du är inloggad.</p>
        </div>
        <div v-else>
            <p>Du är inte inloggad.</p>
        </div>
    </div>
</template>

<script setup lang="ts">
    import { useAuthStore } from '../store/auth';
    const authStore = useAuthStore();
</script>

<style scoped>
    /* Din Dashboard-komponentens stilar här */
</style>
