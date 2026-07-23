import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    name: "Home",
    path: "/",
    alias: ['/home', '/main', '/index'],
    component: () => import("@views/Home.vue"),
  },
  {
    name: "About",
    path: "/about",
    alias: ['/contact', '/about-us'],
    component: () => import("@views/About.vue"),
  },
  {
    name: "Tinkering",
    path: "/tinkering",
    alias: ['/sandbox'],
    component: () => import("@views/Default.vue"),
    children: [
      {
        path: "",
        name: "TinkeringHome",
        component: () => import("@views/tinkering/Default.vue"),
      },
      {
        path: "components",
        name: "Components",
        component: () => import("@views/tinkering/Components.vue"),
      },
      {
        path: "custom-tailwind-classes",
        name: "CustomTailwindClasses",
        component: () => import("@views/tinkering/CustomTailwindClasses.vue"),
      },
    ]
  },
  {
    name: "Demos",
    path: "/demo",
    redirect: { name: 'DemosHome' },
    component: () => import("@views/Default.vue"),
    children: [
      {
        name: "DemosHome",
        path: "/demos",
        component: () => import("@views/demo/Default.vue"),
      },
      {
        name: "Tokens",
        path: "tokens",
        component: () => import("@views/demo/Tokens.vue"),
      },
      {
        name: "Layout",
        path: "layout",
        component: () => import("@views/demo/Layout.vue"),
      },
      {
        name: "Section",
        path: "section",
        component: () => import("@views/demo/Section.vue"),
      },
    ]
  },
  {
    path: '/demos/:id',
    redirect: to => {
      return { path: '/demo', params: { id: to.params.id } }
    }
  },
  {
    name: "Docs",
    path: "/docs",
    component: () => import("@views/Docs.vue"),
    meta: { template: "Docs" },
    children: [
      {
        name: "Welcome",
        path: "",
        component: () => import("@views/docs/Default.vue"),
      },
      {
        name: "Theme",
        path: "theme",
        component: () => import("@views/docs/Theme.vue"),
      },
      {
        name: "Markup",
        path: "markup",
        component: () => import("@views/docs/Markup.vue"),
      },
      {
        name: "Buttons",
        path: "buttons",
        component: () => import("@views/docs/Buttons.vue"),
      },
      {
        name: "Fields",
        path: "fields",
        component: () => import("@views/docs/Fields.vue"),
      },
      {
        name: "Shapes",
        path: "shapes",
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
