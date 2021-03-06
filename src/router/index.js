import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import NovoUsuario from '../views/NovoUsuario.vue'
import Convencao from '../views/Convencao.vue'
import Login from '../views/Login.vue'
import AreaComum from '../views/AreaComum.vue'
//import 'bootstrap'


const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/convencao',
    name: 'convencao',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: Convencao
  },
  {
    path: '/cadastre-se',
    name: 'novo.usuario',
     component: NovoUsuario
  },
  {
    path: '/login',
    name: 'login',
    component: Login
  },

  {
    path: '/areacomum',
    name: 'areacomum',
    component: AreaComum
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})


export default router
