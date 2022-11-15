import Vue from "vue";
import VueRouter from "vue-router";
import HomeView from "@/views/home";
import SigninView from "@/views/signin";
import SignupView from "@/views/signup";
import UserView from "@/views/user";
import ArticleView from "@/views/article";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/signin",
    name: "signin",
    component: SigninView,
  },
  {
    path: "/signup",
    name: "signup",
    component: SignupView,
  },
  {
    path: "/user",
    name: "user",
    component: UserView,
  },
  {
    path: "/article",
    name: "article",
    component: ArticleView,
  },
];

const router = new VueRouter({
  routes,
});

export default router;
