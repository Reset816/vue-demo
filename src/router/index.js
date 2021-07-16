import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

const routes = [{
        path: "/",
        redirect: '/frame'
    },
    {
        path: "/login",
        name: "login",
        component: () =>
            import ( /* webpackChunkName: 'login' */ '@/views/login')
    },
    {
        path: "/frame",
        name: "frame",
        component: () =>
            import ( /* webpackChunkName: 'frame' */ '@/views/Frame.vue'),
        children: [{
                path: "search",
                name: "search",
                component: () =>
                    import ( /* webpackChunkName: 'main' */ '@/views/main/Search.vue')
            },
            {
                path: "report_details",
                name: "report_details",
                component: () =>
                    import ( /* webpackChunkName: 'main' */ '@/views/main/Details.vue')
            }
        ]
    },
    {
        path: "*",
        redirect: '/frame'
    }
];

const router = new Router({
    base: process.env.BASE_URL,
    routes: routes
});

export default router;