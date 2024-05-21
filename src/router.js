import Vue from "vue";
import router from "vue-router";
import Signup from "./components/Signup.vue";
import Login from "./components/Login.vue";

// Vue.use(router);

// export default router({
//   routes: [
//     {path: "/", component: Login},
//     {path: "/SignUp", component: SignUp},
//   ],
// });

const routes = [
  {
    path: "/",
    name: "login",
    component: Login,
  },
  {
    path: "/signup",
    name: "signup",
    component: Signup,
  },
];

export default router;
