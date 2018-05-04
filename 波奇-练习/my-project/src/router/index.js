import Vue from 'vue';
import Router from 'vue-router';
import Home from '../components/Home.vue';
import List from '../components/List.vue';
import Add from '../components/Add.vue';
import My from '../components/My.vue';
import Login from '../components/Login.vue';
import Signout from '../components/Signout.vue';


 Vue.use(Router);
 let routes = [
     {path:'/home',component:Home},
     {path:'/list',component:List},
     {path:'/add',component:Add},
     {path:'/my',component:My},
     {path:'/login',component:Login},
     {path:'/signout',component:Signout}

 ]
export default new Router({
    routes
})
