import axios from "axios";
import {
    baseUrl
} from "./url";
import router from '../router';
import store from '../store';
import {
    LOGOUT
} from "../store/mutation-types";
import {
    getStore
} from '@/utils/tools';
import Qs from 'qs';

axios.defaults.timeout = 60000;
axios.defaults.baseURL = baseUrl;
axios.defaults.headers.post['Content-Type'] = 'application/json';

// http request 拦截器
axios.interceptors.request.use(
    config => {
        let token = getStore('token');
        if (token && config.url.indexOf('oauth') < 0) {
            config.headers.Authorization = token;
        }
        if (config.url.indexOf('oauth') > 0) {
            // 登录认证格式为表单形式提交
            config.headers['Content-Type'] = 'application/x-www-form-urlencoded'
        }
        return config;
    },
    err => {
        return Promise.reject(err);
    }
);

// http response 拦截器
axios.interceptors.response.use(
    response => {
        return response;
    },
    error => {
        if (error.response) {
            switch (error.response.status) {
                case 401:
                    // 401 清除token信息并跳转到登录页面
                    store.commit(LOGOUT);
                    // 只有在当前路由不是登录页面才跳转
                    router.currentRoute.path !== "login" &&
                        router.replace({
                            path: "login",
                            query: {
                                redirect: router.currentRoute.path
                            }
                        });
            }
        }
        return Promise.reject(error.response.data);
    }
);

//封装axios的get请求
export function get(url, params) {
    return new Promise((resolve, reject) => {
        axios
            .get(url, {
                params: params
            })
            .then(response => {
                resolve(response);
            })
            .catch(error => {
                reject(error);
            });
    });
}

//封装axios的post请求
export function post(url, data = {}) {
    return new Promise((resolve, reject) => {
        axios
            .post(url, data)
            .then(response => {
                resolve(response);
            })
            .catch(error => {
                reject(error);
            });
    });
}

//封装axios的post请求-序列化
export function postStringify(url, data = {}) {
    return new Promise((resolve, reject) => {
        axios({
                method: 'post',
                url: url,
                data: Qs.stringify(data)
            })
            .then(response => {
                resolve(response);
            })
            .catch(error => {
                reject(error);
            });
    });
}

//封装axios的下载数据流转换成excel
export function DownLoadToExcel(url, data = {}, fileName) {
    fileName = fileName + ".xls";
    return new Promise((resolve, reject) => {
        axios
            .post(url, data, {
                responseType: "blob"
            })
            .then(response => {
                const blob = new Blob([response.data], {
                    type: "application/vnd.ms-excel"
                });
                if ("download" in document.createElement("a")) {
                    // 非IE下载
                    const elink = document.createElement("a");
                    elink.download = fileName;
                    elink.style.display = "none";
                    elink.href = URL.createObjectURL(blob);
                    document.body.appendChild(elink);
                    elink.click();
                    URL.revokeObjectURL(elink.href);
                    document.body.removeChild(elink);
                } else {
                    // IE10+下载
                    navigator.msSaveBlob(blob, fileName);
                }
            })
            .catch(error => {
                console.log(error);
            });
    });
}