import axios from "axios";
import Message from "../plugins/message-box";
import global from "../global";
import store from "../store";

let cancel;
let pending = {};

const instance = axios.create({
    headers: {
        "X-Requested-With": "XMLHttpRequest",
        "Content-type": "application/x-www-form-urlencoded"
    },
    transformRequest: [
        function (data) {
            let ret = "";
            for (let it in data) {
                if (data.hasOwnProperty(it)) {
                    ret += encodeURIComponent(it) + "=" + encodeURIComponent(data[it]) + "&";
                }
            }
            return ret;
        }
    ]
});

instance['callapi'] = function (op, post) {
    if (global.BASE_URL) {
        return instance.post(global.API_URL, {
            i: store.state.uniacid,
            op,
            ...post
        });
    } else {
        return instance.get("json/" + op + ".json");
    }
};

if (global.BASE_URL) {
    instance.defaults.baseURL = global.BASE_URL;
}
//请求拦截器
instance.interceptors.request.use(
    config => {
        //发起请求时，取消掉当前正在进行的相同请求
        if (pending[config.url]) {
            pending[config.url]("操作取消");
            pending[config.url] = cancel;
        } else {
            pending[config.url] = cancel;
        }

        return config;
    },
    error => {
        return Promise.reject(error);
    }
);

//响应拦截器即异常处理
instance.interceptors.response.use(
    res => {
        if (res.data.errno === 0) {
            return res;
        }
        if (res.data.errno === -10086 || res.data.errno === -10087) {
            let $scope = 'base';
            if (res.data.errno === -10087) $scope = 'userinfo';

            if (store.state.is_wechat) {//微信浏览器
                window.location.href = global.WECHAT_OAUTH2_URL
                    .replace('$i', store.state.uniacid)
                    .replace('$returl', encodeURIComponent(window.location.href))
                    .replace('$scope', $scope);
                return false;
            }

            if (store.state.is_alipay) {//支付宝浏览器
                window.location.href = global.ALIPAY_OAUTH2_URL
                    .replace('$i', store.state.uniacid)
                    .replace('$returl', encodeURIComponent(window.location.href))
                    .replace('$scope', $scope);
                return false;
            }
        }

        if (res.data.errno === 302) {//重定向
            window.location.href = res.data.message;
            return false;
        }

        Message.error(res.data.message);
        return false;
    },
    err => {
        if (!axios.isCancel(err)) {
            if (err && err.response) {
                switch (err.response.status) {
                    case 400:
                        err.tips = "错误请求";
                        break;
                    case 401:
                        err.tips = "请登录";
                        break;
                    case 403:
                        err.tips = "拒绝访问";
                        break;
                    case 404:
                        err.tips = "请求错误,未找到该资源";
                        break;
                    case 405:
                        err.tips = "请求方法未允许";
                        break;
                    case 408:
                        err.tips = "请求超时";
                        break;
                    case 422: {
                        const {data} = err.response;
                        err.tips = data || {message: "错误请求"};
                        break;
                    }
                    case 500:
                        err.tips = "服务器端出错";
                        break;
                    case 501:
                        err.tips = "网络未实现";
                        break;
                    case 502:
                        err.tips = "网络错误";
                        break;
                    case 503:
                        err.tips = "服务不可用";
                        break;
                    case 504:
                        err.tips = "网络超时";
                        break;
                    case 505:
                        err.tips = "http版本不支持该请求";
                        break;
                    default:
                        err.tips = `连接错误${err.response.status}`;
                }
            } else {
                err.tips = "网络不可用，请检查！";
            }
            Message.error(err.tips);
        }
        return Promise.reject(err);
    }
);

export default instance;
