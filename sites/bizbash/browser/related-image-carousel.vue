<template>
  <carousel :per-page="1" :navigation-enabled="true" :autoplay="true" :autoplay-hover-pause="true">
    <slide v-for="image in images" :key="image.id">
      <img :src="image.src" :alt="image.alt" />
      <div v-if="image.caption || image.credit" class="overlay">
        <p v-if="image.caption">{{ image.caption }}</p>
        <span v-if="image.credit">{{ image.credit }}</span>
      </div>
    </slide>
  </carousel>
</template>

<style scoped>
/* stylelint-disable */
.VueCarousel-slide {
/* stylelint-enable */
  position: relative;
  width: 100%;
  height: 100%;
}
.overlay {
  position: absolute;
  right: 0;
  bottom: 0;
  left: 0;
  padding: 1em 1em 0;
  overflow: hidden;
  color: #fff;
  background: rgba(0, 0, 0, .5);
}
.overlay:empty {
  display: none;
}
.overlay > span {
  display: block;
  margin-bottom: 1em;
}
</style>

<script>
import { Carousel, Slide } from 'vue-carousel';

export default {
  components: {
    Carousel,
    Slide,
  },
  props: {
    images: {
      type: Array,
      required: true,
    },
  },
};
</script>
