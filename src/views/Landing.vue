<script setup lang="ts">
import Galleria from 'primevue/galleria'
import { ref } from 'vue'
import type { PropType } from 'vue'
import type { RugData } from '@/types/types'

const props = defineProps({
  images: {
    type: Array as PropType<RugData[]>
  }
})

const responsiveOptions = ref([
  {
    breakpoint: '991px',
    numVisible: 4
  },
  {
    breakpoint: '767px',
    numVisible: 3
  },
  {
    breakpoint: '575px',
    numVisible: 1
  }
]);
</script>

<template>
  <Galleria :value="images" 
    :responsiveOptions="responsiveOptions" 
    :numVisible="5" 
    :showItemNavigators="true"
    :autoPlay="false"
    :circular="true">
    <template #item="slotProps" class="gallery-image">
      <img :src="slotProps.item.itemImageSrc" :alt="slotProps.item.alt"/>
    </template>
    <template #thumbnail="slotProps">
      <img :src="slotProps.item.thumbnailImageSrc" :alt="slotProps.item.alt" class="gallery-image-thumbnail"/>
    </template>
  </Galleria>
</template>

<style lang="scss">
.p-galleria-item-prev {
  z-index: 2;
}
.gallery-image, .gallery-image-thumbnail img {
  object-fit: cover;
  background-position: center center;
}
.p-galleria-item {
  width: 80vw;
  aspect-ratio: 4/3;
  background: #0005;
  overflow: hidden;
  img {
    width: 100%;
    object-fit: cover;
  }
}
.gallery-image-thumbnail {
  width: 12rem;
  height: 8rem;
}
</style>