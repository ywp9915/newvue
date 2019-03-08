import Order from "../views/Middle.vue";
import OrderList from "../views/order/Order.vue";


const module = {
    path: "order",
    name: "user_order",
    component: Order,
    children: [
        { path: "", component: OrderList },
    ]
};

export default module;
