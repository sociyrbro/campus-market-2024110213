import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/trade',
      name: 'trade',
      component: () => import('@/views/TradeView.vue'),
    },
    {
      path: '/lost-found',
      name: 'lostFound',
      component: () => import('@/views/LostFoundView.vue'),
    },
    {
      path: '/group-buy',
      name: 'groupBuy',
      component: () => import('@/views/GroupBuyView.vue'),
    },
    {
      path: '/errand',
      name: 'errand',
      component: () => import('@/views/ErrandView.vue'),
    },
    {
      path: '/publish',
      name: 'publish',
      component: () => import('@/views/PublishView.vue'),
    },
    {
      path: '/message',
      name: 'message',
      component: () => import('@/views/MessageView.vue'),
    },
    {
      path: '/user-center',
      name: 'userCenter',
      component: () => import('@/views/UserCenterView.vue'),
    },
  ],
})

export default router