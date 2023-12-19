import { createApp } from 'vue';
import App from './App.vue';
import router from './router'; // Import your router instance
import { createPinia } from 'pinia';

const pinia = createPinia();
const app = createApp(App);

app.use(pinia);
app.use(router); // Use the router

app.mount('#app');
