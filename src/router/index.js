import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import SigninPage from '@/components/SigninPage'
import SignupPage from '@/components/SignupPage'

Vue.use(Router)

const publicRoute = [
  {
    path: '/',
    name: 'home',
    component: Home,
    meta: { requireAuth: true },
  },
  {
    path: '/signin',
    name: 'signin',
    component: SigninPage,
    meta: {},
  },
  {
    path: '/signup',
    name: 'signup',
    component: SignupPage,
    meta: {},
  },
]


const router = new Router({
  mode: 'history',
  scrollBehavior(to, from, savedPosition) {
    return { x: 0, y: 0 }
  },
  routes: [...publicRoute],
})

router.beforeEach((to, from, next) => {
  if (to.matched.some(route => route.meta.requireAuth)) {
    if (localStorage.getItem('token')) {
      next()
    } else {
      next({ name: 'signin' })
    }
  } else {
    if (to.name == 'signin' && localStorage.getItem('token')) {
      next(false)
    } else {
      next()
    }
  }
})

router.onError(err => {
  console.log(err.message)
})

export default router
