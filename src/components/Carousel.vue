<!-- Thanks to Hyperplexed for the carousel tutorial! https://codepen.io/Hyperplexed/full/MWXBRBp -->

<script setup lang="ts">
let activeIndex = 0;
const images = [
  { src: 'src/assets/images/gallery/rug one.png' },
  { src: 'src/assets/images/gallery/rug two.png' }
]

const track = document.getElementById("carousel");

const handleOnDown = e => {
  const track = document.getElementById("carousel");
  track.dataset.mouseDownAt = e.clientX;
}

const handleOnUp = () => {
  const track = document.getElementById("carousel");
  track.dataset.mouseDownAt = "0";  
  track.dataset.prevPercentage = track.dataset.percentage;
}

const handleOnMove = e => {
  const track = document.getElementById("carousel");
  if(track.dataset.mouseDownAt === "0") return;
  
  const mouseDelta = parseFloat(track.dataset.mouseDownAt) - e.clientX,
        maxDelta = window.innerWidth / 2;
  
  const percentage = (mouseDelta / maxDelta) * -100,
        nextPercentageUnconstrained = parseFloat(track.dataset.prevPercentage) + percentage,
        nextPercentage = Math.max(Math.min(nextPercentageUnconstrained, 0), -100);
  
  track.dataset.percentage = nextPercentage;
  
  track.animate({
    transform: `translate(${nextPercentage}%, -50%)`
  }, { duration: 1200, fill: "forwards" });
  
  for(const image of track.getElementsByClassName("image")) {
    image.animate({
      objectPosition: `${100 + nextPercentage}% center`
    }, { duration: 1200, fill: "forwards" });
  }
}

window.onmousedown = e => handleOnDown(e);

window.ontouchstart = e => handleOnDown(e.touches[0]);

window.onmouseup = e => handleOnUp(e);

window.ontouchend = e => handleOnUp(e.touches[0]);

window.onmousemove = e => handleOnMove(e);

window.ontouchmove = e => handleOnMove(e.touches[0]);
</script>

<template>
  <div class="carousel-container">
    <div id="carousel" data-mouse-down-at="0" data-prev-percentage="0">
      <img v-for="image in images" :src="image.src" alt="" loading="lazy" draggable="false" class="image">
    </div>
  </div>
</template>

<style lang="scss">
.carousel-container {
  display: flex;
  flex-grow: 1;
  position: relative;
  #carousel {
    display: flex;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(0%, -50%);
    gap: 4vmin;
    user-select: none;
    img {
      object-fit: cover;
      object-position: 50% 50%;
      width: 60vmin;
      height: clamp(30vh, 70vmax, 78vh);
    }
  }
}
</style>