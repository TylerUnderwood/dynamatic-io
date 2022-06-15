import { createApp } from "vue";
import { createPinia } from "pinia";
import App from "./App.vue";
import theme from '../config/theme.json';

const app = createApp(App);

app.use(createPinia());

app.use(theme)

app.mount("#app");
