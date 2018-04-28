import Vue from 'vue'
import VueRouter from 'vue-router'
import About from '../components/About.vue'
import Home from '../components/Home.vue'
import news from '../components/news.vue'
import message from '../components/message.vue'
import messageDetail from '../components/message-detail.vue'
/* 声明使用插件 */

Vue.use(VueRouter)

/* 创建路由器，配置路由 */
export default new VueRouter({
  routes:[
    {
      path: '/About',
      component: About
    },
    {
      path: '/Home',
      component: Home,
      children:[
        {
          path: 'news',
          component: news
        },
        {
          path: 'message',
          component: message,
          children:[
            {
              path: 'detail/:id',
              component: messageDetail
            }
          ]
        },
      ]
    },
    {
      path: '/',
      redirect: './Home'
    }
  ]
})
