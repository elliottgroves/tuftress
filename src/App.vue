<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import Logo from '@/components/svgs/Logo.vue'
import { ref } from 'vue'

const images = ref([
  {
    itemCarouselSrc: new URL('@/assets/images/carousel/Pool Hearts.webp', import.meta.url).href,
    thumbnailImageSrc: new URL('@/assets/images/thumbnails/Pool Hearts.webp', import.meta.url).href,
    alt: 'A picture of a rug that depicts a racked set of pool balls with hearts instead of numbers',
    title: 'Pool Hearts',
    description: 'Original design'
  },
  {
    itemCarouselSrc: new URL('@/assets/images/carousel/Sonic Adventure.webp', import.meta.url).href,
    thumbnailImageSrc: new URL('@/assets/images/thumbnails/Sonic Adventure.webp', import.meta.url).href,
    alt: 'A picture of a rug of Sonic the Hedgehog from the cover art for the game Sonic Adventure',
    title: 'Sonic Adventure'
  },
  {
    itemCarouselSrc: new URL('@/assets/images/carousel/Out of Love.webp', import.meta.url).href,
    thumbnailImageSrc: new URL('@/assets/images/thumbnails/Out of Love.webp', import.meta.url).href,
    alt: 'A picture of a rug with a medieval flail on a pink and white concentric square background',
    title: 'Out of Love',
    description: 'Original design'
  },
  {
    itemCarouselSrc: new URL('@/assets/images/carousel/grape soda.webp', import.meta.url).href,
    thumbnailImageSrc: new URL('@/assets/images/thumbnails/grape soda.webp', import.meta.url).href,
    alt: 'A picture of a rug in the style of a soda cap, with Fritz the Cat going googly eyed for the soda',
    title: 'Grape Soda'
  },
  {
    itemCarouselSrc: new URL('@/assets/images/carousel/stamp of spring.webp', import.meta.url).href,
    thumbnailImageSrc: new URL('@/assets/images/thumbnails/stamp of spring.webp', import.meta.url).href,
    alt: 'A picture of a rug depicting a stamp with flowers on it',
    title: 'Stamp of Spring',
    description: 'Original design'
  },
  {
    itemCarouselSrc: new URL('@/assets/images/carousel/from the bachelors pad.webp', import.meta.url).href,
    thumbnailImageSrc: new URL('@/assets/images/thumbnails/from the bachelors pad.webp', import.meta.url).href,
    alt: 'A picture of a rug of a frog peeping over a lilypad',
    title: 'From the Bachelor\'s Pad',
    description: 'Original design'
  },
  {
    itemCarouselSrc: new URL('@/assets/images/carousel/pink leaf beetle leafin\' a leaf.webp', import.meta.url).href,
    thumbnailImageSrc: new URL('@/assets/images/thumbnails/pink leaf beetle leafin\' a leaf.webp', import.meta.url).href,
    alt: 'A picture of a rug depicting pink beetle crawling on a plant',
    title: 'Pink Leaf Beetle'
  },
  {
    itemCarouselSrc: new URL('@/assets/images/carousel/Pixel Kirby.webp', import.meta.url).href,
    thumbnailImageSrc: new URL('@/assets/images/thumbnails/Pixel Kirby.webp', import.meta.url).href,
    alt: 'A picture of a rug depicting a pixel art of Kirby',
    title: 'Pixel Kirby'
  },
  {
    itemCarouselSrc: new URL('@/assets/images/carousel/Nice to See You Again by Yoshitomo Nara.webp', import.meta.url).href,
    thumbnailImageSrc: new URL('@/assets/images/thumbnails/Nice to See You Again by Yoshitomo Nara.webp', import.meta.url).href,
    alt: 'A picture of a rug rendition of Nice to See You Again by Yoshitomo Nara',
    title: 'Nice to See You Again',
    description: 'Rendition of Nice to See You Again by artist Yoshitomo Nara'
  },
  {
    itemCarouselSrc: new URL('@/assets/images/carousel/Snoopy Puffy Coat.webp', import.meta.url).href,
    thumbnailImageSrc: new URL('@/assets/images/thumbnails/Snoopy Puffy Coat.webp', import.meta.url).href,
    alt: 'A picture of a rug of Snoopy in a puffy coat',
    title: 'Puffy Coat Snoopy'
  },
  {
    itemCarouselSrc: new URL('@/assets/images/carousel/Felix.webp', import.meta.url).href,
    thumbnailImageSrc: new URL('@/assets/images/thumbnails/Felix.webp', import.meta.url).href,
    alt: 'A picture of a rug of Felix the Cat giving the finger',
    title: 'Flick You Felix'
  },
  {
    itemCarouselSrc: new URL('@/assets/images/carousel/A Vintage Sandylion Sticker.webp', import.meta.url).href,
    thumbnailImageSrc: new URL('@/assets/images/thumbnails/A Vintage Sandylion Sticker.webp', import.meta.url).href,
    alt: 'A picture of a rug rendition of a vintage Sandylion sticker of a green cat',
    title: 'Vintage Sandylion green cat sticker'
  },
  {
    itemCarouselSrc: new URL('@/assets/images/carousel/rainbow sandylion.webp', import.meta.url).href,
    thumbnailImageSrc: new URL('@/assets/images/thumbnails/rainbow sandylion.webp', import.meta.url).href,
    alt: 'A picture of a rug rendition of a vintage Sandylion sticker of a rainbow cat',
    title: 'Vintage Sandylion rainbow cat sticker'
  },
  {
    itemCarouselSrc: new URL('@/assets/images/carousel/blob pool.webp', import.meta.url).href,
    thumbnailImageSrc: new URL('@/assets/images/thumbnails/blob pool.webp', import.meta.url).href,
    alt: 'A picture of a white abstract rug with gold and blue blob shapes',
    title: 'Blob Pool'
  },
  {
    itemCarouselSrc: new URL('@/assets/images/carousel/toad.webp', import.meta.url).href,
    thumbnailImageSrc: new URL('@/assets/images/thumbnails/toad.webp', import.meta.url).href,
    alt: 'A picture of rug of Toad from the Mario franchise',
    title: 'Toad'
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
