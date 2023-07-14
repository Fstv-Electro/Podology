import { createRouter, createWebHistory } from "vue-router";
import HelloWorld from "../components/HelloWorld.vue";
// import HomePage from "../views/HomePage.vue";
// import ContactPage from "../views/ContactPage.vue";

const HomePage = () => import("../views/HomePage.vue");
const ContactPage = () => import("../views/ContactPage.vue");
const Services = () => import("../views/Services.vue");

const routes = [
  {
    path: "/",
    name: "home",
    component: HomePage,
  },
  {
    path: "/contacts",
    name: "contacts",
    component: ContactPage,
  },
  {
    path: "/services",
    name: "services",
    component: Services,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
