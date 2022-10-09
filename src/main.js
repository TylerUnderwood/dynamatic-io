import { createApp } from "vue";
import { createRouter, createWebHistory } from "vue-router";
import { createPinia } from "pinia";
import App from "./App.vue";
import Home from "@views/Home.vue"
import About from "@views/About.vue"
import Theme from "@views/Theme.vue"

const app = createApp(App);

const router = createRouter({
    history: createWebHistory(),
    routes:  [
        { path: '/', name: 'Home', component: Home},
        { path: '/about', name: 'About', component: About},
        { path: '/theme', name: 'Theme', component: Theme}
    ]
})

app.use(createPinia());
app.use(router);

app.mount("#app");
