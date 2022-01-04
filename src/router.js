import Vue from 'vue'
import Router from 'vue-router'
import Login from './views/Login'
import Home from './views/Home'
Vue.use(Router)

const router = new Router({
  // mode: 'history',
  base: process.env.BASE_URL,
  routes: [
   {
      path:'/',
      redirect:'/login'
      
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path:'/home',
      name: 'home',
      component:Home,
    }
  ]
})

// 挂在路由导航守卫
router.beforeEach((to,from,next)=>{
    // to将要访问的路径
    // from 代表从哪个路径跳转而来
    // next 一个函数 表示放行
    if(to.path === '/login') return next();
    console.log(to.path)
    const tokenStr = window.sessionStorage.getItem('token')
    if(!tokenStr) return next('/login')
    next()

})


export default router;