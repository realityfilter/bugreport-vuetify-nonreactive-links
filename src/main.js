import { createApp } from "vue";
import { createRouter, createMemoryHistory } from "vue-router";
import { createVuetify } from "vuetify";

import "vuetify/styles";
import "./style.css";
import App from "./App.vue";
import HomeView from "./views/HomeView.vue";

const routes = [{ path: "/", component: HomeView }];

const router = createRouter({
  history: createMemoryHistory(),
  routes,
});

const vuetify = createVuetify();

createApp(App).use(router).use(vuetify).mount("#app");
