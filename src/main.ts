import { createApp } from 'vue';
import VueAxios from 'vue-axios'
import App from './App.vue';
import './registerServiceWorker';
import router from './router';
import store from './store';
import axios from '@/services/axios';

const app = createApp(App)
app.use(VueAxios, axios)
app.use(store).use(router);
app.mount('#app');