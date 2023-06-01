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
      component: Landing,
      meta: {
        title: 'The Tuftress Hand-Tufted Rugs'
      }
    },
    {
      path: '/gallery',
      name: 'gallery',
      component: Gallery,
      meta: {
        title: 'Gallery - The Tuftress Hand-Tufted Rugs'
      }
    },
    {
      path: '/contact',
      name: 'contact',
      component: Contact,
      meta: {
        title: 'Contact - The Tuftress Hand-Tufted Rugs'
      }
    },
    {
      path: '/about',
      name: 'about',
      component: About,
      meta: {
        title: 'About - The Tuftress Hand-Tufted Rugs'
      }
    }
  ]
})

export default router
