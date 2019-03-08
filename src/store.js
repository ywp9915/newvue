import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

//判断是否是微信浏览器的函数
function isWeiXin() {
    //window.navigator.userAgent属性包含了浏览器类型、版本、操作系统类型、浏览器引擎类型等信息，这个属性可以用来判断浏览器类型
    var ua = window.navigator.userAgent.toLowerCase();
    //通过正则表达式匹配ua中是否含有MicroMessenger字符串
    return ua.match(/MicroMessenger/i) === 'micromessenger';
}

function isAlipay() {
    var userAgent = navigator.userAgent.toLowerCase();
    return userAgent.match(/Alipay/i) === "alipay";
}

let def_uniacid = 0;

if (window.localStorage) {
    def_uniacid = parseInt(window.localStorage.getItem("uniacid"));
    if (isNaN(def_uniacid)) def_uniacid = 0;
}

export default new Vuex.Store({
    state: {
        point: {lng: 0, lat: 0}, //坐标定位
        init_geolocation: false, //坐标定位是否已初始化
        uniacid: def_uniacid, //最近的公众号id
        is_wechat: isWeiXin(),
        is_alipay: isAlipay(),
    },
    mutations: {
        update_point(state, point) {
            state.point.lng = point.lng;
            state.point.lat = point.lat;
            state.init_geolocation = true;
        },
        setUniacid(state, uniacid) {
            state.uniacid = uniacid;
            if (window.localStorage) window.localStorage.setItem("uniacid", uniacid);
        }
    },
    actions: {}
});
