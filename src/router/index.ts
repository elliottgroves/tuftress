import { createRouter, createWebHistory } from 'vue-router'
const Landing = () => import('@/views/Landing.vue')
const Gallery = () => import('@/views/Gallery.vue')
const About = () => import('@/views/About.vue')
const Contact = () => import('@/views/Contact.vue')

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

router.beforeEach((to, from, next) => {
  if (to.meta.title) {
    document.title = String(to.meta.title)
  }
  next()
})

export default router
