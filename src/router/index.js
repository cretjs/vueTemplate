import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

const HelloWorld = () => import('@/components/HelloWorld.vue')

const routes = [
    {path: '/', component: HelloWorld},
    {path: '/hello', component: HelloWorld},
]

// 3. 创建 router 实例，然后传 `routes` 配置
const router = new Router({
    scrollBehavior (to, from, savedPosition) {
        // 返回 savedPosition，在按下 后退/前进 按钮时，就会像浏览器的原生表现那样：
        if (savedPosition) {
            return savedPosition
        } else {
            return { x: 0, y: 0 }
        }
    },
    routes: routes // (缩写) 相当于 routes: routes
})

// 路由切换时显示页面loading
router.beforeEach(function (to, from, next) {
    next() // 确保一定要调用 next()
})

router.afterEach(function (to) {

})

export default router