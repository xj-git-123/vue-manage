import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import user from '../views/u_user.vue'
import mall from '../views/mMall.vue'
import homeIndex from '../views/homeIndex.vue'
//懒加载
const pageOne=()=>import ('../views/other/pageOne.vue')
const pageTwo=()=>import ('../views/other/pageTwo.vue')


//1.通过Vue.use（插件），安装插件
Vue.use(VueRouter)
// 路由懒加载
// const home=()=>import('../components/home')
//定义routes
const routes=[
  {
    path:'/',
    //重定向，默认情况下显示Home
    redirect:'/Home'
  },
  {
    path: '/',
    name: 'Home',
    component: Home,
    children:[
      {
        path: '/user',
        name: 'user',
        component: user,
      },
      {
        path: '/homeIndex',
        name: 'homeIndex',
        component: homeIndex,
      },
      {
        path: '/mall',
        name: 'mall',
        component: mall,
      },
      {
        path: '/pageOne',
        name: 'pageOne',
        component: pageOne,
      },
      {
        path: '/pageTwo',
        name: 'pageTwo',
        component: pageTwo,
      }
    ]
  },

]
//定义对象
const router=new VueRouter({
  routes,
  mode:"history"
})
//3.将router对象传入Vue实例中
export default router