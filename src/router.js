import { createRouter, createWebHistory } from "vue-router";

//Import pages
import Home from "./pages/Home.vue";
import Projects from "./pages/Projects.vue";
import Experience from "./pages/Experience.vue";
import Contact from "./pages/Contact.vue";

//Define routes
const routes = [
  { path: "/", name: "home", component: Home },
  { path: "/projects", name: "projects", component: Projects },
  { path: "/experience", name: "experience", component: Experience },
  { path: "/contact", name: "contact", component: Contact },
];

//Create router 
const router = createRouter({ // This line of code is creating a new Vue Router instance. 
  history: createWebHistory(),
  routes,
});

export default router;
