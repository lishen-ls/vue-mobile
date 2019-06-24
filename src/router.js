import Vue from 'vue'
import Router from 'vue-router'
import MainCon from '@/views/MainCon'
import NewsContent from '@/views/NewsContent'
import Classify from '@/views/Classify'
import MyComment from '@/views/MyComment'
import NotFound from '@/views/NotFound'

Vue.use(Router)

export default new Router({
  routes: [{
      path: '*',
      redirect:'/NotFound'
  },
    {
      path: '/NotFound',
      component: NotFound,
      meta: {
        title:'鲜果 - 页面没有找到'
      }
    },
    {
      path: '/',
      redirect: '/MainCon'
    },
    {
      path: '/MainCon',
      component: MainCon,
      meta: {
        title: '鲜果 - 新闻如鲜果，过时不堪嚼'
      }
    },
    {
      path: '/NewsContent/:tag/:id',
      component: NewsContent,
      meta: {
        title: '鲜果 - 新闻如鲜果，过时不堪嚼'
      }
    },
    {
      path: '/IT',
      component: Classify,
      meta: {
        title: '鲜果 - IT资讯'
      }
    },
    {
      path: '/Digital',
      component: Classify,
      meta: {
        title: '鲜果 - 数码资讯'
      }
    },
    {
      path: '/Software',
      component: Classify,
      meta: {
        title: '鲜果 - 软件资讯'
      }
    },
    {
      path: '/Game',
      component: Classify,
      meta: {
        title: '鲜果 - 游戏资讯'
      }
    },
    {
      path: '/iOS',
      component: Classify,
      meta: {
        title: '鲜果 - iOS资讯'
      }
    },
    {
      path: '/Android',
      component: Classify,
      meta: {
        title: '鲜果 - 资讯'
      }
    },
    {
      path: '/System',
      component: Classify,
      meta: {
        title: '鲜果 - 系统资讯'
      }
    },
    {
      path: '/Intelligence',
      component: Classify,
      meta: {
        title: '鲜果 - 智能资讯'
      }
    },
    {
      path: '/Science',
      component: Classify,
      meta: {
        title: '鲜果 - 科学资讯'
      }
    },
    {
      path: '/MyComment',
      component: MyComment,
      meta: {
        title: '鲜果 - 我的评论'
      }
    }
  ]
})