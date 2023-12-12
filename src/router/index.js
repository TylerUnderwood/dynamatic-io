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
    path: "/demo/layout",
    name: "Demo Layout",
    component: () => import("@views/demo/Layout.vue"),
  },
  {
    path: "/demo/section",
    name: "Demo Section",
    component: () => import("@views/demo/Section.vue"),
  },
  {
    path: "/tokens",
    name: "Tokens",
    component: () => import("@views/Tokens.vue"),
  },
  {
    path: "/docs",
    name: "Docs",
    component: () => import("@views/Docs.vue"),
    children: [
      {
        path: "",
        name: "Default",
        component: () => import("@views/docs/Default.vue"),
      },
      {
        path: "theme",
        name: "Theme",
        component: () => import("@views/docs/Theme.vue"),
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
    ],
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes: routes,
});

export default router;
