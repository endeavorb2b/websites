<template>
  <div class="carousel-item" :class="classNames">
    <img class="d-block w-100" :src="image.src" :alt="image.alt" />
    <div class="carousel-caption d-none d-md-block">
      <h5 v-if="image.displayName">{{ image.displayName }}</h5>
      <p v-if="image.caption">{{ image.caption }}</p>
      <p v-if="image.credit">{{ image.credit }}</p>
    </div>
  </div>
</template>

<style scoped>
.carousel-caption {
  right: 0;
  bottom: 0;
  left: 0;
  padding-bottom: 1rem;
  text-shadow: rgba(0, 0, 0, .6) 0 1px 2px;
  background: rgba(0, 0, 0, .75);
}
</style>

<script>
export default {
  props: {
    activeIndex: {
      type: Number,
      required: true,
    },
    index: {
      type: Number,
      required: true,
    },
    length: {
      type: Number,
      required: true,
    },
    image: {
      type: Object,
      required: true,
    },
  },
  computed: {
    classNames() {
      const { activeIndex, index, length } = this;
      const prevIdx = activeIndex - 1 < 0 ? activeIndex : activeIndex - 1;
      const nextIdx = activeIndex + 1 >= length ? activeIndex : activeIndex + 1;
      const active = index === activeIndex;
      const carouselItemLeft = index === prevIdx && activeIndex !== index;
      const carouselItemRight = index === nextIdx && activeIndex !== index;
      return {
        active,
        'carousel-item-prev': carouselItemLeft,
        'carousel-item-next': carouselItemRight,
      };
    },
  },
};
</script>
