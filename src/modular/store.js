//定义用户页相关的内容组装

import Middle from "../views/Middle.vue";
import Search from "../views/store/Search.vue";
import Detail from "../views/store/Detail.vue";

const module = {
    path: "/store",
    component: Middle,
    children: [
        {path:"search",component:Search},
        {path:"detail",component:Detail}
    ]
};

export default module;