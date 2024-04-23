import { createRouter, createWebHistory } from 'vue-router';
import Index from './components/Index.vue';
import Login from './components/Login.vue';
import Register from './components/Register.vue';
import ResetPassword from './components/ResetPassword.vue';
import ARPage from './components/ARPage.vue';

const routes = [
  { path: '/', component: Index },
  { path: '/login', component: Login },
  { path: '/register', component: Register },
  { path: '/reset-password', component: ResetPassword },
  { path: '/ar', component: ARPage }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
