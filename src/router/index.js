import { createRouter, createWebHistory } from "vue-router";

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

const routes = [
  { path: "/", name: "Home", component: Home },
  { path: "/about", name: "About", component: About },
  { path: "/contact", name: "Contact", component: Contact },
  { path: "/sandbox", name: "Sandbox", component: Sandbox },
  {
    path: "/docs",
    name: "Docs",
    component: Docs,
    children: [
      { path: "taxonomy", name: "Taxonomy", component: Taxonomy },
      { path: "theme", name: "Theme", component: Theme },
      { path: "color", name: "Color", component: Color },
      { path: "buttons", name: "Buttons", component: Buttons },
      { path: "fields", name: "Fields", component: Fields },
      { path: "layout", name: "Layout", component: Layout },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes: routes,
});

export default router;
