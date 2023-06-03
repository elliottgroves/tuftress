<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import Logo from '@/components/svgs/Logo.vue'
import { ref } from 'vue'

const images = ref([
  {
    itemImageSrc: new URL('@/assets/images/gallery/Pool Hearts.jpg', import.meta.url).href,
    thumbnailImageSrc: new URL('@/assets/images/thumbnails/Pool Hearts.jpg', import.meta.url).href,
    alt: 'A picture of a rug that depicts a racked set of pool balls with hearts instead of numbers',
    title: 'Pool Hearts',
    description: 'Original design'
  },
  {
    itemImageSrc: new URL('@/assets/images/gallery/Sonic Adventure.jpg', import.meta.url).href,
    thumbnailImageSrc: new URL('@/assets/images/thumbnails/Sonic Adventure.jpg', import.meta.url).href,
    alt: 'A picture of a rug of Sonic the Hedgehog from the cover art for the game Sonic Adventure',
    title: 'Sonic Adventure',
    yOffsetPercentage: 6
  },
  {
    itemImageSrc: new URL('@/assets/images/gallery/Out of Love.jpg', import.meta.url).href,
    thumbnailImageSrc: new URL('@/assets/images/thumbnails/Out of Love.jpg', import.meta.url).href,
    alt: 'A picture of a rug with a medieval flail on a pink and white concentric square background',
    title: 'Out of Love',
    description: 'Original design'
  },
  {
    itemImageSrc: new URL('@/assets/images/gallery/stamp of spring.jpg', import.meta.url).href,
    thumbnailImageSrc: new URL('@/assets/images/thumbnails/stamp of spring.jpg', import.meta.url).href,
    alt: 'A picture of a rug depicting a stamp with flowers on it',
    title: 'Stamp of Spring',
    description: 'Original design'
  },
  {
    itemImageSrc: new URL('@/assets/images/gallery/Pixel Kirby.jpg', import.meta.url).href,
    thumbnailImageSrc: new URL('@/assets/images/thumbnails/Pixel Kirby.jpg', import.meta.url).href,
    alt: 'A picture of a rug depicting a pixel art of Kirby',
    title: 'Pixel Kirby'
  },
  {
    itemImageSrc: new URL('@/assets/images/gallery/pink leaf beetle leafin\' a leaf.jpg', import.meta.url).href,
    thumbnailImageSrc: new URL('@/assets/images/thumbnails/pink leaf beetle leafin\' a leaf.jpg', import.meta.url).href,
    alt: 'A picture of a rug depicting pink beetle crawling on a plant',
    title: 'Pink Leaf Beetle',
    yOffsetPercentage: -10
  },
  {
    itemImageSrc: new URL('@/assets/images/gallery/Nice to See You Again by Yoshitomo Nara.jpg', import.meta.url).href,
    thumbnailImageSrc: new URL('@/assets/images/thumbnails/Nice to See You Again by Yoshitomo Nara.jpg', import.meta.url).href,
    alt: 'A picture of a rug rendition of Nice to See You Again by Yoshitomo Nara',
    title: 'Nice to See You Again',
    description: 'Rendition of Nice to See You Again by artist Yoshitomo Nara'
  },
  {
    itemImageSrc: new URL('@/assets/images/gallery/Snoopy Puffy Coat.jpg', import.meta.url).href,
    thumbnailImageSrc: new URL('@/assets/images/thumbnails/Snoopy Puffy Coat.jpg', import.meta.url).href,
    alt: 'A picture of a rug of Snoopy in a puffy coat',
    title: 'Puffy Coat Snoopy',
    yOffsetPercentage: -16
  },
  {
    itemImageSrc: new URL('@/assets/images/gallery/Felix.jpg', import.meta.url).href,
    thumbnailImageSrc: new URL('@/assets/images/thumbnails/Felix.jpg', import.meta.url).href,
    alt: 'A picture of a rug of Felix the Cat giving the finger',
    title: 'Flick You Felix',
    yOffsetPercentage: -9
  },
  {
    itemImageSrc: new URL('@/assets/images/gallery/A Vintage Sandylion Sticker.jpg', import.meta.url).href,
    thumbnailImageSrc: new URL('@/assets/images/thumbnails/A Vintage Sandylion Sticker.jpg', import.meta.url).href,
    alt: 'A picture of a rug rendition of a vintage Sandylion sticker of a green cat',
    title: 'Vintage Sandylion sticker',
    yOffsetPercentage: -5
  }
])

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
      <p>Made with ❤️ By <a href="https://elliottgrov.es">Elliott Groves Design</a></p>
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
    padding: 3rem 0 5rem 0;
    text-align: right;
    p {
      color: #ff7070;
      background: #ffd0d0bb;
      display: inline;
      padding: 0.5rem;
      box-shadow: 0 0 15px 5px #ffd0d0bb;
      border-radius: 0.65rem;
    }
    a {
      color: #ff7070;
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