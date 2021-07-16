import Vue from "vue";
import App from "./App.vue";
import router from './router';
import store from './store';
import {
    LOADING
} from "./store/mutation-types";
import {
    setStore,
    getStore
} from './utils/tools';

import ViewUI from "view-design";
import "view-design/dist/styles/iview.css";

import "./assets/css/common.css";

Vue.use(ViewUI);

Vue.prototype.$loading = function(showFlag) {
    Vue.nextTick(function() {
        store.commit(LOADING, showFlag);
    });
};

Vue.config.productionTip = false;

// 保存state，刷新时恢复
let _state = getStore("state");
_state && store.replaceState(Object.assign(store.state, JSON.parse(_state)));
window.addEventListener("beforeunload", () => {
    setStore("state", JSON.stringify(store.state));
});

router.beforeEach((to, from, next) => {
    ViewUI.LoadingBar.start();
    store.commit(LOADING, true);
    if (to.matched.some(r => r.meta.requireAuth)) {
        if (store.state.token) {
            next();
        } else {
            next({
                path: "/login",
                query: {
                    redirect: to.fullPath
                }
            });
        }
    } else {
        next();
    }
});
router.afterEach(() => {
    ViewUI.LoadingBar.finish();
    store.commit(LOADING, false);
});

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount("#app");