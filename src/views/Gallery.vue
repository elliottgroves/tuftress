<script setup lang="ts">
import DeferredContent from 'primevue/deferredcontent'
import Image from 'primevue/image'
import type { PropType } from 'vue'
import type { RugData } from '@/types/types'

const props = defineProps({
  images: {
    type: Array as PropType<RugData[]>
  }
})
</script>

<template>
  <div class="gallery">
    <DeferredContent v-for="image in images">
      <Card class="rug-card">
        <template #header>
          <Image :src="image.itemImageSrc" :alt="image.alt" preview class="deferred-image"/>
        </template>
        <template #title>
          {{ image.title }}
        </template>
        <template #content>
          {{ image.description }}
        </template>
      </Card>
    </DeferredContent>
  </div>
</template>

<style lang="scss">
.gallery {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  justify-content: center;
  align-items: center;
  .rug-card {
    background: linear-gradient(45deg, #ffe2ed, #e6e6fa);
  }
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