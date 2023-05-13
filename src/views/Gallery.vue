<script setup lang="ts">
import DeferredContent from 'primevue/deferredcontent'
import Image from 'primevue/image'
import { ref } from "vue"

const images = ref([
  {
    itemImageSrc: new URL('@/assets/images/gallery/rugone.png', import.meta.url).href,
    thumbnailImageSrc: new URL('@/assets/images/gallery/rugone.png', import.meta.url).href,
    alt: 'A picture of a rug of Kirby',
    title: 'Kirby',
    description: 'The pink lovable friend'
  },
  {
    itemImageSrc: new URL('@/assets/images/gallery/rugtwo.png', import.meta.url).href,
    thumbnailImageSrc: new URL('@/assets/images/gallery/rugtwo.png', import.meta.url).href,
    alt: 'A picture of a rug of the Bada Bing sign from The Sopranos',
    title: 'Bada Bing'
  }
]);
</script>

<template>
  <div class="gallery">
    <Card v-for="image in images" class="rug-card">
      <template #header>
        <DeferredContent>
          <Image :src="image.itemImageSrc" :alt="image.alt" preview class="deferred-image"/>
        </DeferredContent>
      </template>
      <template #title>
        {{ image.title }}
      </template>
      <template #content>
        {{ image.description }}
      </template>
    </Card>
  </div>
</template>

<style lang="scss">
.gallery {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  justify-content: center;
  align-items: center;
  .rug-card, .deferred-image, .deferred-image img {
    width: min(90vw, 25rem);
  }
  .p-image-preview {
    max-width: 90vw;
    max-height: 90vw;
    width: auto;
    height: auto;
  }
  .p-card-title {
    margin-bottom: 0 !important;
  }
  .p-card-body {
    padding: 0.5rem 1rem !important;
  }
  .p-card-content {
    padding: 0 !important;
  }
}
.p-image-toolbar {
  z-index: 2;
}
</style>