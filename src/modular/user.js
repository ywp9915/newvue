//定义用户页相关的内容组装

//import User from "../views/user/User.vue";
//import UserHome from "../views/user/UserHome.vue";
import User from "../views/Middle.vue";
import UserHome from "../views/user/User.vue";
import UserCollection from "../views/store/Collection";
import address from "./user_address";
import order from "./user_order";
import Refund from "../views/order/Refund.vue";
import Refunddetail from "../views/order/Refunddetail.vue";

/**
 * {
      path: "/order",
      name: "order",
      component: Order
    },
 */

const module = {
  path: "/user", //用户中心
  name: "user",
  component: User,
  children: [
      { path: "", component: UserHome },
      address,
      order,
      { path: "collection", component: UserCollection },
      { path: "refund", component: Refund },
      { path: "refunddetail", component: Refunddetail },
  ]
};

export default module;
