import { createHead } from '@vueuse/head';
import { createPinia } from 'pinia';
import { createApp } from 'vue';
import App from './App.vue';
import './app.css';

const app = createApp(App);

Object.entries(import.meta.env).forEach(([env, value]) => {
  app.config.globalProperties[env.replace(/^VITE_/, "")] = value;
});

app.use(createHead());
app.use(createPinia());

app.mount('#app')
