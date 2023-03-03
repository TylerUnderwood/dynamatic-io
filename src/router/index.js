import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    name: "Home",
    component: () => import("@views/Home.vue"),
  },
  {
    path: "/about",
    name: "About",
    component: () => import("@views/About.vue"),
  },
  {
    path: "/contact",
    name: "Contact",
    component: () => import("@views/Contact.vue"),
  },
  {
    path: "/sandbox",
    name: "Sandbox",
    component: () => import("@views/Sandbox.vue"),
  },
  {
    path: "/docs",
    name: "Docs",
    component: () => import("@views/Docs.vue"),
    children: [
      {
        path: "taxonomy",
        name: "Taxonomy",
        component: () => import("@views/docs/Taxonomy.vue"),
      },
      {
        path: "theme",
        name: "Theme",
        component: () => import("@views/docs/Theme.vue"),
      },
      {
        path: "color",
        name: "Color",
        component: () => import("@views/docs/Color.vue"),
      },
      {
        path: "markup",
        name: "Markup",
        component: () => import("@views/docs/Markup.vue"),
      },
      {
        path: "buttons",
        name: "Buttons",
        component: () => import("@views/docs/Buttons.vue"),
      },
      {
        path: "fields",
        name: "Fields",
        component: () => import("@views/docs/Fields.vue"),
      },
      {
        path: "shapes",
        name: "Shapes",
        component: () => import("@views/docs/Shapes.vue"),
      },
      {
        path: "layout",
        name: "Layout",
        component: () => import("@views/docs/Layout.vue"),
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes: routes,
});

export default router;
