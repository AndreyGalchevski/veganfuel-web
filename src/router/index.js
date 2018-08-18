import Vue from "vue";
import Router from "vue-router";
import Home from "../components/Home.vue";
import Foods from "../components/Foods.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  routes: [
    {
      path: "/",
      name: "Home",
      component: Home
    },
    {
      path: "/foods/:nutrientId",
      name: "Foods",
      component: Foods
    }
  ]
});
