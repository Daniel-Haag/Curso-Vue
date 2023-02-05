import { createApp } from "vue";
import axios from "axios";
import VueAxios from "vue-axios";
import App from "./App.vue";

createApp(App).mount("#app").use(VueAxios, axios);
