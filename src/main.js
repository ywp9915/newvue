import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import global from "./global";
import "./font-awesome-4.7.0/css/font-awesome.min.css";
import MintUI from "mint-ui";
import "mint-ui/lib/style.css";

import { Swipe, SwipeItem } from "mint-ui";
import api from "./api/api.js";
import BaiduMap from "vue-baidu-map";

Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);

Vue.prototype.$api = api;
Vue.prototype.$global = global;

Vue.config.productionTip = false;
Vue.use(MintUI);
Vue.use(BaiduMap, {
  // ak 是在百度地图开发者平台申请的密钥 详见 http://lbsyun.baidu.com/apiconsole/key */
  ak: global.BAIDU_MAP_AK
});

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
