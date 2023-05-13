<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import Logo from '@/components/svgs/Logo.vue'
import { ref } from 'vue'

const navMenuItems = ref([
  {
    label: 'Gallery',
    icon: 'pi pi-fw pi-images',
    to: { name: 'gallery' }
  },
  {
    label: 'About',
    icon: 'pi pi-fw pi-book',
    to: { name: 'about' }
  },
  {
    label: 'Instagram',
    icon: 'pi pi-fw pi-instagram',
    url: 'https://instagram.com/thetuftress',
    target: '_blank'
  },
  {
    label: 'Contact Me!',
    icon: 'pi pi-fw pi-envelope',
    to: { name: 'contact' }
  }
])

const images = ref([
  {
    itemImageSrc: new URL('@/assets/images/gallery/Sonic Adventure.jpg', import.meta.url).href,
    thumbnailImageSrc: new URL('@/assets/images/gallery/Sonic Adventure.jpg', import.meta.url).href,
    alt: 'A picture of Sonic the Hedgehog from the cover art for the game Sonic Adventure',
    title: 'Sonic Adventure',
    centerPercentage: 30
  },
  {
    itemImageSrc: new URL('@/assets/images/gallery/Pool Hearts.jpg', import.meta.url).href,
    thumbnailImageSrc: new URL('@/assets/images/gallery/Pool Hearts.jpg', import.meta.url).href,
    alt: 'A picture of a rug that depicts a racked set of pool balls with hearts instead of numbers',
    title: 'Pool Hearts',
    description: 'Custom design'
  },
  {
    itemImageSrc: new URL('@/assets/images/gallery/Nice to See You Again by Yoshitomo Nara.jpg', import.meta.url).href,
    thumbnailImageSrc: new URL('@/assets/images/gallery/Nice to See You Again by Yoshitomo Nara.jpg', import.meta.url).href,
    alt: 'A picture of a rug rendition of Nice to See You Again by Yoshitomo Nara',
    title: 'Nice to See You Again',
    description: 'Rendition of Nice to See You Again by artist Yoshitomo Nara'
  },
  {
    itemImageSrc: new URL('@/assets/images/gallery/Snoopy Puffy Coat.jpg', import.meta.url).href,
    thumbnailImageSrc: new URL('@/assets/images/gallery/Snoopy Puffy Coat.jpg', import.meta.url).href,
    alt: 'A picture of a rug of Snoopy in a puffy coat',
    title: 'Puffy Coat Snoopy',
    centerPercentage: 70
  }
]);
</script>

<template>
  <Menubar :model="navMenuItems" class="main-nav container">
    <template #start>
      <div class="logo-container">
        <RouterLink :to="{ name: 'landing' }">
          <Logo/>
        </RouterLink>
      </div>
    </template>
  </Menubar>
  <div class="main-content container">
    <RouterView :images="images"/>
    <footer class="text-500">
      <p>Made with ❤️ By Elliott Groves Design</p>
    </footer>
  </div>
</template>

<style scoped lang="scss">
.main-nav {
  // background-color: var(--primary-color);
  display: flex;
  justify-content: flex-end;
  position: sticky;
  top: 0;
  z-index: 2;
  .logo-container {
    width: min(200px, 100vw);
    margin-right: auto;
  }
}
.main-content {
  padding: 1rem 1rem 2rem 1rem;
  display: flex;
  flex-flow: column;
  flex-grow: 1;
  footer {
    margin-top: auto;
    padding-top: 1rem;
    text-align: right;
    p {
      color: #ff7777;
    }
  }
}
</style>

<style lang="scss">
.main-nav {
  .p-menubar-start {
    display: flex;
    flex-grow: 1;
  }
}
</style>