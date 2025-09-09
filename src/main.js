import "./assets/tailwind.css";

import App from "./App.vue";
import { createApp } from "vue";
import router from "./router.js";
import { MotionPlugin } from "@vueuse/motion";

createApp(App).use(router).use(MotionPlugin).mount("#app");
