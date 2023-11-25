import { createRouter, createWebHistory } from 'vue-router';
import ToDo from '../views/ToDo.vue';

const routes = [
  {
    path: '/',
    name: 'ToDo',
    component: ToDo
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('../views/About.vue')
  }
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
})

export default router
