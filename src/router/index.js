import { createRouter, createWebHistory } from 'vue-router'
import FeedbackView from '../components/feedback.vue'
import NewsView from '../components/news.vue'
import MainView from '../components/main.vue'

const routes = [
  {
    path: '/',
    name: 'main',
    component: MainView
  },
  {
    path: '/news',
    name: 'news',
    component: NewsView,
    meta: { requiresAuth: false }
  },
  {
    path: '/feedback',
    name: 'fedback',
    component: FeedbackView,
    meta: { requiresAuth: false }
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

// Навигационный гард для проверки авторизации
router.beforeEach((to, from, next) => {
  const isAuthenticated = localStorage.getItem('isAuthenticated')
  const userRole = localStorage.getItem('userRole')

  if (to.meta.requiresAuth && !isAuthenticated) {
    next('/') // Перенаправляем на страницу входа
  } else if (to.meta.requiresAuth && to.meta.role !== userRole) {
    // Если роль не соответствует
    next(userRole === 'admin' ? '/admin' : '/user')
  } else {
    console.log('[Навигация] from:', from.path, 'to:', to.path);
    next() // Продолжаем навигацию
  }
})

export default router