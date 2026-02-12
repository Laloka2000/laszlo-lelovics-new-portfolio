import "./assets/tailwind.css";

import App from "./App.vue";
import { createApp } from "vue";
import router from "./router.js";
import { MotionPlugin } from "@vueuse/motion";
import i18n from './i18n';

createApp(App)
    .use(router)
    .use(MotionPlugin)
    .use(i18n)
    .mount("#app");
