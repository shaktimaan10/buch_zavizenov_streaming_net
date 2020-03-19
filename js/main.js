// Import all components
import LoginComponent from "./components/LoginComponent.js";
import CatalogComponent from "./components/CatalogComponent.js";
import MoviePreviewComponent from "./components/MoviePreviewComponent.js";
import MusicPreviewComponent from "./components/MusicPreviewComponent.js";
import TvPreviewComponent from "./components/TvPreviewComponent.js";
import StartComponent from "./components/StartComponent.js";
import SettingsComponent from "./components/SettingsComponent.js";
import MovieTypeComponent from "./components/MovieTypeComponent.js";
import MusicTypeComponent from "./components/MusicTypeComponent.js";
import TvTypeComponent from "./components/TvTypeComponent.js";
import AllUsersComponent from "./components/AllUsersComponent.js";

// Vue component
const router = new VueRouter({
    // set routes
    routes: [
      { path: '/', redirect: { name: "start" } },
      { path: '/catalog/:age', name:"catalog", component: CatalogComponent, meta: { requiresAuth: true }},
      { path: '/start', name:"start", component: StartComponent},
      { path: '/singleMovie/:cId', name:"singleMovie", component: MoviePreviewComponent, meta: { requiresAuth: true }},
      { path: '/singleMusic/:cId', name:"singleMusic", component: MusicPreviewComponent, meta: { requiresAuth: true }},
      { path: '/singleTv/:cId', name:"singleTv", component: TvPreviewComponent, meta: { requiresAuth: true }},
      { path: '/movieType/:type/:age', name:"movieType", component: MovieTypeComponent, meta: { requiresAuth: true }},
      { path: '/musicType/:type/:age', name:"musicType", component: MusicTypeComponent, meta: { requiresAuth: true }},
      { path: '/tvType/:type/:age', name:"tvType", component: TvTypeComponent, meta: { requiresAuth: true }},
      { path: '/login', name: "login", component: LoginComponent },
      { path: '/allusers/:group', name: "allusers", component: AllUsersComponent, meta: { requiresAuth: true }},
      { path: '/settings', name: "settings", component: SettingsComponent, meta: { requiresAuth: true }}
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

      // the localstorage session will persist until logout
      // this.checkAuthenticated();
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
      },

      checkAuthenticated(){
        const url = `./includes/index.php?checkAuth=1`;
        fetch(url)
        .then(res => res.json())
        .then(data => {
          console.log(`checkAuthentiacted = ${data}`);
          this.authenticated = data;
        })
        .catch((err) => {console.error(err)})
      }
      
    },

    router
});

router.beforeEach((to,from,next) => {
  let userAuthenticated = vm.authenticated;
  let userPreAuthenticated = vm.preauthenticated;

  if(to.matched.some(record => record.meta.requiresAuth)){
    if(userAuthenticated || userPreAuthenticated){
      console.log("redirecting user to next page");
      next();
    } 
    else {
      console.log("redirecting user to login");
      next({name: 'login'});
    }
  } else {
    next();
    console.log('Page does not require auth');
  }
});