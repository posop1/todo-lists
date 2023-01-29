import { createRouter, createWebHistory } from 'vue-router';
import NameView from '@/views/NameView.vue';
import TodoView from '@/views/TodoView.vue';

const routes = [
  {
    path: '/',
    name: 'home',
    component: NameView,
  },
  {
    path: '/todo',
    name: 'todo',
    component: TodoView,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
