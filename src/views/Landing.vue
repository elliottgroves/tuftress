<script setup lang="ts">
import Galleria from 'primevue/galleria'
import Hero from '@/components/svgs/Hero.vue'
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
    numVisible: 2
  }
])

function imageOffset(rug: RugData) {
  if (rug.hasOwnProperty('yOffsetPercentage')) {
    return { transform: `translateY(${rug.yOffsetPercentage}%)` }
  }
}
</script>

<template>
  <Hero class="mb-4"/>

  <Galleria :value="images" 
    :responsiveOptions="responsiveOptions" 
    :numVisible="5" 
    :showItemNavigators="true"
    :autoPlay="true"
    :circular="true">
    <template #item="slotProps" class="gallery-image">
      <img :src="slotProps.item.itemCarouselSrc" :alt="slotProps.item.alt" :style="imageOffset(slotProps.item)"/>
    </template>
    <template #thumbnail="slotProps">
      <img :src="slotProps.item.thumbnailImageSrc" :alt="slotProps.item.alt" class="gallery-image-thumbnail" :style="imageOffset(slotProps.item)"/>
    </template>
  </Galleria>
</template>

<style lang="scss">
.p-galleria-item-prev {
  z-index: 2;
}
.p-galleria-item {
  aspect-ratio: 4/3;
  background: #0005;
  overflow: hidden;
  img {
    width: 100%;
    object-fit: cover;
  }
}
.p-galleria-thumbnail-item-content {
  width: 8rem;
  aspect-ratio: 3/2;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  img {
    width: 100%;
  }
}
@media screen and (max-width: 575px) {
  .p-galleria-item {
    aspect-ratio: 1/1;
  }
}
</style>