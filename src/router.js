import Vue from "vue";
import Router from "vue-router";
import store from "./store";

import user from "./modular/user";

import Index from "./views/Index.vue";
import _Switch from "./views/Switch.vue";
 

import Comment from "./views/store/Comment.vue";
import Detail from "./views/store/Detail.vue";

import Collection from "./views/store/Collection.vue";

import FirmOrder from "./views/order/FirmOrder.vue";
import TakeOut from "./views/store/TakeOut.vue";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "index",
      component: Index
    },
      { path: '/switch/:uniacid(\\d+)/:path?',
          name:'switch',
          component: _Switch
       },
      user,
    {
      path:"/comment",
      name:"comment",
      component:Comment
    },
    {
      path:"/detail",
      name:"detail",
      component:Detail
    },
    {
      path:"/collection",
      name:"collection",
      component:Collection
    },
    {
      path:"/firmorder",
      name:"firmorder",
      component:FirmOrder
    },
    {
      path:"/takeout",
      name:"takeout",
      component:TakeOut
    } 
  ]
});
