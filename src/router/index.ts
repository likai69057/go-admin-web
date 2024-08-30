import NProgress from '@/config/nprogress'
//1.导入vue-router模块
import {createRouter, createWebHashHistory} from 'vue-router';
import type {RouterOptions} from "vue-router";

//2.定义一些路由地址，每个路由对应一个组件
const routes = [{
    path: '/',
    name: 'Login',
    meta: {title: '后台管理系统-登录'},
    component: () => import('../views/Login.vue')
}];

//3.创建路由实例并且传递routers实例
const router = createRouter({
    history: createWebHashHistory(),
    routes: routes
} as RouterOptions)

//路由拦截守卫
router.beforeEach(async (to, form, next) =>{
    //1.NProgress启动
    NProgress.start()
    next()
})

//路由跳转结束
router.afterEach(()=>{
    NProgress.done()
})

//路由跳转失败
router.onError(error => {
    NProgress.done()
    console.warn("路由错误", error.message)
})

export default router
