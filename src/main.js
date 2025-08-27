import "./assets/main.css";

import App from "./App.vue";
import { createApp } from "vue";
import router from "./router.js";

createApp(App).use(router).mount("#app");
