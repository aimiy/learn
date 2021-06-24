import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

const routes = [
    {
        path: '/', component: resolve => require(['@/components/homeView'], resolve), children: [
            { path: "/home", component: resolve => require(['@/views/home/home'], resolve),meta:{keepAlive:true} },
            { path: "/homeDetail", component: resolve => require(['@/views/home/homeDetail'], resolve) },
            { path: "/home2", component: resolve => require(['@/views/home/home2'], resolve),meta:{keepAlive:true} },
            { path: "/homeDetail2", component: resolve => require(['@/views/home/homeDetail2'], resolve) },
        ]
    },
    {
        path:'/maequee',component:resolve => require(['@/views/marquee'],resolve)
    }
]
const router = new VueRouter({
    routes
});

export default router;