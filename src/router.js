import { createRouter, createWebHistory } from "vue-router";

import Home from "./pages/Home.vue";
import Projects from "./pages/Projects.vue";
import Experience from "./pages/Experience.vue";
import Contact from "./pages/Contact.vue";

const routes = [
    {path: '/', name: 'home', component: Home},
    {path: '/projects', name: 'projects', component: Projects},
    {path: '/experience', name: 'experience', component: Experience},
    {path: '/contact', name: 'contact', component: Contact}
]

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;