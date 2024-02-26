import '@/assets/css/app.css';
import { createApp } from 'vue';
import App from './App.vue';
import router from './router';


const app = createApp(App);

// Use any additional setup code here, such as configuring plugins or global components.

app.use(router);

app.mount('#app');