import Vue from 'vue'
import VueRouter from 'vue-router'
import Catalog from '@/views/Catalog.vue'
import Cart from '@/views/Cart.vue'
import Detail from '@/views/Detail.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Catalog',
    component: Catalog
  },
  {
    path: '/cart',
    name: 'Cart',
    component: Cart
  },
  {
    path: '/:page',
    name: 'Catalog',
    component: Catalog
  },
  {
    path: '/products/:id',
    name: 'Detail',
    component: Detail
  }
]

const router = new VueRouter({
  routes
})

export default router
