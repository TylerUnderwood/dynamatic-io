import { createApp } from "vue";
import { createRouter, createWebHistory } from "vue-router";
import { createPinia } from "pinia";
import App from "./App.vue";
import Home from "@views/Home.vue";
import About from "@views/About.vue";
import Contact from "@views/Contact.vue";
import Sandbox from "@views/Sandbox.vue";
import Docs from "@views/Docs.vue";
import Taxonomy from "@views/docs/Taxonomy.vue";
import Theme from "@views/docs/Theme.vue";
import Color from "@views/docs/Color.vue";
import Buttons from "@views/docs/Buttons.vue";
import Fields from "@views/docs/Fields.vue";
import Layout from "@views/docs/Layout.vue";

const app = createApp(App);

const router = createRouter({
    history: createWebHistory(),
    routes:  [
        { path: '/', name: 'Home', component: Home},
        { path: '/about', name: 'About', component: About},
        { path: '/contact', name: 'Contact', component: Contact},
        { path: '/sandbox', name: 'Sandbox', component: Sandbox},
        { path: '/docs', name: 'Docs', component: Docs},
        { path: '/docs/taxonomy', name: 'Taxonomy', component: Taxonomy},
        { path: '/docs/theme', name: 'Theme', component: Theme},
        { path: '/docs/color', name: 'Color', component: Color},
        { path: '/docs/buttons', name: 'Buttons', component: Buttons},
        { path: '/docs/fields', name: 'Fields', component: Fields},
        { path: '/docs/layout', name: 'Layout', component: Layout},
    ]
})

app.use(createPinia());
app.use(router);

app.mount("#app");
