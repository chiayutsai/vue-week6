import { createRouter, createWebHashHistory } from 'vue-router';
import frontBoard from '../views/FrontBoard.vue';

const routes = [
  {
    path: '/',
    name: 'frontBoard',
    component: frontBoard,
    children: [
      {
        path: 'home',
        name: 'home',
        component: () => import('../views/Home.vue'),
      },
      {
        path: 'shop',
        name: 'shop',
        component: () => import('../views/Shop.vue'),
      },
      {
        path: 'product/:id',
        name: 'product',
        component: () => import('../views/Product.vue'),
      },
      {
        path: 'cart',
        name: 'cart',
        component: () => import('../views/Cart.vue'),
      },
      {
        path: 'checkout',
        name: 'checkout',
        component: () => import('../views/Checkout.vue'),
      },
      {
        path: 'check/:order',
        name: 'check',
        component: () => import('../views/Check.vue'),
      },
      {
        path: 'final/:order',
        name: 'final',
        component: () => import('../views/Final.vue'),
      },
    ],
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('../views/Login.vue'),
  },
  {
    path: '/dashboard',
    name: 'dashboard',
    component: () => import('../views/DashBoard.vue'),
    children: [
      {
        path: 'newProduct',
        name: 'newProduct',
        component: () => import('../views/NewProduct.vue'),
      },
      {
        path: 'admin',
        name: 'admin',
        component: () => import('../views/Admin.vue'),
      },
      {
        path: 'order',
        name: 'order',
        component: () => import('../views/Order.vue'),
      },
    ],
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
  // linkActiveClass: 'bg-primary',
  scrollBehavior() {
    return { top: 0 };
  },
});

export default router;
