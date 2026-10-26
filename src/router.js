import { createRouter, createWebHistory } from "vue-router";

//Import pages
import Home from "./pages/Home.vue";
import Results from "./pages/Results.vue";

//Define routes — the site is a single scrolling page; old routes redirect to their section.
const routes = [
  { path: "/", name: "home", component: Home },
  { path: "/projects", redirect: () => ({ path: "/", hash: "#projects" }) },
  { path: "/experience", redirect: () => ({ path: "/", hash: "#experience" }) },
  { path: "/contact", redirect: () => ({ path: "/", hash: "#contact" }) },
  { path: "/results", name: "results", component: Results },
];

//Create router
const router = createRouter({ // This line of code is creating a new Vue Router instance.
  history: createWebHistory(),
  routes,
  scrollBehavior(to) {
    if (to.hash) {
      return { el: to.hash, top: 84, behavior: "smooth" };
    }
    return { top: 0 };
  },
});

export default router;
