


//1.引入模块
import Vue from "vue"
import VueRouter from "vue-router"
import '../assets/css/reset.scss'

//2.引入页面组件
import Home from 'pages/home'
import Money from 'pages/money'
import Ious from 'pages/ious'
import Raise from 'pages/raise'
// import Download from 'pages/special'

//3.声明使用
Vue.use(VueRouter)


//4.导出路由对象
export default new VueRouter({
    routes: [
        {
            path: "/",
            name: "home",
            component: Home,
        },{
           	path:'/money',
        	name:'money',
        	component:Money,
        },{
            path:'/ious',
            name:'ious',
            component:Ious,
        },{
            path:'/raise',
            name:'raise',
            component:Raise,
        }],
})
