// Import all components
import LoginComponent from "./components/LoginComponent.js";
import CatalogComponent from "./components/CatalogComponent.js";
import StartComponent from "./components/StartComponent.js";
import SettingsComponent from "./components/SettingsComponent.js";
import MovieTypeComponent from "./components/MovieTypeComponent.js";
import MusicTypeComponent from "./components/MusicTypeComponent.js";
import TvTypeComponent from "./components/TvTypeComponent.js";
import AllUsersComponent from "./components/AllUsersComponent.js";
import PreviewComponent from "./components/PreviewComponent.js";

// Vue component
const router = new VueRouter({
    // set routes
    routes: [
      { path: '/', redirect: { name: "start" } },
      { path: '/catalog/:age', name:"catalog", component: CatalogComponent, meta: { requiresAuth: true }},
      { path: '/start', name:"start", component: StartComponent},
      { path: '/movieType/:type/:age', name:"movieType", component: MovieTypeComponent, meta: { requiresAuth: true }},
      { path: '/musicType/:type/:age', name:"musicType", component: MusicTypeComponent, meta: { requiresAuth: true }},
      { path: '/tvType/:type/:age', name:"tvType", component: TvTypeComponent, meta: { requiresAuth: true }},
      { path: '/login', name: "login", component: LoginComponent },
      { path: '/allusers/:group', name: "allusers", component: AllUsersComponent, meta: { requiresAuth: true }},
      { path: '/settings/:group', name: "settings", component: SettingsComponent, meta: { requiresAuth: true }},
      { path: '/preview/:type/:cId', name:"preview", component: PreviewComponent, meta: { requiresAuth: true }},
    ]
});

const vm = new Vue({

    el: "#app",

    data: {
      authenticated: false,
      administrator: false,
      preauthenticated: false,

      loginUser: [],
      user: []
    },

    created: function () {
      // do a localstorage session check and set authenticated to true if the session still exists
      // if the cached user exists, then just navigate to their user home page
      if(localStorage.getItem("PreauthenticatedUser")){
        let preauthenticatedUser = JSON.parse(localStorage.getItem("PreauthenticatedUser"));
        this.preauthenticated = true;
        this.loginUser = preauthenticatedUser;

        if(localStorage.getItem("AuthenticatedUser")){
          let authenticatedUser = JSON.parse(localStorage.getItem("AuthenticatedUser"));
          this.authenticated = true;
          this.administrator = authenticatedUser['user_isadmin'];
          this.user = authenticatedUser;
        }else {
          this.$router.push({ name: 'allusers', params: { group: this.loginUser['login_users']}});
        }

      } else {
        console.log("go to login page");
        this.$router.push({ path: "/start" });
      }
    },

    methods: {
      setAuthenticated(status, data) {
        // this means that authentication has passed and we have a valid user
        this.authenticated = status;
        this.administrator = parseInt(data.user_isadmin);
        this.user = data;
      },

      setPreAuthenticated(status, data) {
        // this means that authentication has passed and we have a valid user
        this.preauthenticated = status;
        this.loginUser = data;
      },

      logout() {
        // delete local session
        if(localStorage.getItem('AuthenticatedUser')){
          localStorage.removeItem('AuthenticatedUser');
        }
        if(localStorage.getItem('PreauthenticatedUser')){
          localStorage.removeItem('PreauthenticatedUser');
        }
        // push user back to login page
        this.$router.push({ path: "/start" });
        this.authenticated = false;
        this.preauthenticated = false;
      },

      openMobileNav(){
        let mobileNav = document.querySelector('.mobile-nav');
        mobileNav.classList.add('mobile-nav-open');
      },

      closeMobileNav(){
        let mobileNav = document.querySelector('.mobile-nav');
        mobileNav.classList.remove('mobile-nav-open');
      }
      
    },

    router
});

router.beforeEach((to,from,next) => {
  let userAuthenticated = vm.authenticated;
  let userPreAuthenticated = vm.preauthenticated;

  if(to.matched.some(record => record.meta.requiresAuth)){
    if(userPreAuthenticated){
      if(userAuthenticated){
        // console.log("redirecting user to next page");
        next();
      } else {
        // next({ path: '/allusers', params: { group: vm.loginUser['login_users']}});
        // console.log("redirect to all users");
        next();
      }
    } else {
      // console.log("redirecting user to login");
      next({name: 'login'});
    }
  } else {
    next();
    // console.log('Page does not require auth');
  }
});