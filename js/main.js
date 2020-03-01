// Import all components
import './components/preview-lighbox.js';
import './components/mobile-nav.js';

import LoginComponent from "./components/LoginComponent.js";

// Vue component
let router = new VueRouter({
    // set routes
    routes: [
      { path: '/', redirect: { name: "login" } },
      { path: '/login', name: "login", component: LoginComponent },
    ]
});

const vm = new Vue({

    el: "#login",

    data: {
      authenticated: false,
      administrator: false,

      mockAccount: {
        username: "user",
        password: "password"
      },

      user: [],

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
        this.administrator = parseInt(data.isadmin);
        this.user = data;
      },

      logout() {
        // delete local session

        // push user back to login page
        this.$router.push({ path: "/login" });
        this.authenticated = false;
      }
    },

    router: router
});

router.beforeEach((to,from,next) => {
    console.log('router guard fired');

    if(vm.authenticated == false){
      next("/login");
    } else {
      next();
    }
});