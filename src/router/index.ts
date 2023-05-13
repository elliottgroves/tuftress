import { createRouter, createWebHistory } from 'vue-router'
import Landing from '@/views/Landing.vue'
import Gallery from '@/views/Gallery.vue'
import About from '@/views/About.vue'
import Contact from '@/views/Contact.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'landing',
      component: Landing
    },
    {
      path: '/gallery',
      name: 'gallery',
      component: Gallery 
    },
    {
      path: '/contact',
      name: 'contact',
      component: Contact
    },
    {
      path: '/about',
      name: 'about',
      component: About
    }
  ]
})

export default router
