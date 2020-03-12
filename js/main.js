// Import all components
import './components/preview-lighbox.js';
import './components/mobile-nav.js';
import './components/banner-slider.js';

import LoginComponent from "./components/LoginComponent.js";
import CatalogComponent from "./components/CatalogComponent.js";
import PreviewComponent from "./components/PreviewComponent.js";
import StartComponent from "./components/StartComponent.js";
import SettingsComponent from "./components/SettingsComponent.js";

// Vue component
const router = new VueRouter({
    // set routes
    routes: [
      { path: '/', redirect: { name: "start" } },
      { path: '/catalog', name:"catalog", component: CatalogComponent, meta: { requiresAuth: true }},
      { path: '/start', name:"start", component: StartComponent},
      { path: '/single', name:"single", component: PreviewComponent, meta: { requiresAuth: true }},
      { path: '/login', name: "login", component: LoginComponent },
      { path: '/settings', name: "settings", component: SettingsComponent, meta: { requiresAuth: true }}
    ]
});

const vm = new Vue({

    el: "#app",

    data: {
      authenticated: false,
      administrator: false,

      // mockAccount: {
      //   username: "user",
      //   password: "password"
      // },

      user: []

      //currentUser: {},
    },

    created: function () {
      // do a localstorage session check and set authenticated to true if the session still exists
      // if the cached user exists, then just navigate to their user home page

      // the localstorage session will persist until logout
    },

    methods: {
      setAuthenticated(status, data) {
        // this means that authentication has passed and we have a valid user
        this.authenticated = status;
        this.administrator = parseInt(data.user_isadmin);
        this.user = data;
      },

      logout() {
        // delete local session

        // push user back to login page
        this.$router.push({ path: "/start" });
        this.authenticated = false;
      }
    },

    router
});

router.beforeEach((to,from,next) => {
    let userStatus = vm.authenticated;

    if(to.matched.some(record => record.meta.requiresAuth)){
      if(userStatus){
        console.log("redirecting user to next page");
        next();
      } else {
        console.log("redirecting user to login");
        next({name: 'login'});
      }
    } else {
      next();
    }
});