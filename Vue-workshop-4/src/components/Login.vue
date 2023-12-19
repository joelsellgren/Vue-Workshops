<template>
    <h2>Login</h2>
    <form @submit.prevent="loginUser">
        <div>
            <label for="username">Username:</label>
            <input type="text" id="username" v-model="username" required />
        </div>
        <div>
            <label for="password">Password:</label>
            <input type="password" id="password" v-model="password" required />
        </div>
        <div>
            <button type="submit">Login</button>
        </div>
    </form>
</template>

<script setup lang="ts">
    import { useAuthStore } from '../store/auth';
    import { ref } from 'vue';
    import { useRouter } from 'vue-router';

    const authStore = useAuthStore();
    const router = useRouter();

    const username = ref('');
    const password = ref('');

    const loginUser = () => {
        // Perform authentication logic (mocked for demo)
        if (username.value === 'demo' && password.value === 'password') {
            authStore.login();
            router.push('/dashboard');
        } else {
            console.log('Invalid username or password');
        }
    };
</script>

<style lang="scss" scoped></style>
