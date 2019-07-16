<template>
  <div class="carousel">
    <ol class="carousel-indicators">
      <li
        v-for="(image, index) in images"
        :key="index"
        :class="{ active: index === activeIndex }"
        @click="set(index)"
      />
    </ol>
    <div class="carousel-inner">
      <ImageSlide
        v-for="(image, index) in images"
        :key="index"
        :length="images.length"
        :index="index"
        :image="image"
        :active-index="activeIndex"
      />
    </div>
    <a
      href="#"
      class="carousel-control-prev"
      role="button"
      @click="decrement"
    >
      <span class="carousel-control-prev-icon" aria-hidden="true" />
      <span class="sr-only">Previous</span>
    </a>
    <a
      href="#"
      class="carousel-control-next"
      role="button"
      @click="increment"
    >
      <span class="carousel-control-next-icon" aria-hidden="true" />
      <span class="sr-only">Next</span>
    </a>
  </div>
</template>

<script>
import ImageSlide from './image-slide.vue';

export default {
  components: {
    ImageSlide,
  },
  props: {
    images: {
      type: Array,
      required: true,
    },
  },
  data: () => ({
    activeIndex: 0,
  }),
  methods: {
    set(index) {
      this.activeIndex = index;
    },
    increment() {
      const { activeIndex } = this;
      const { length } = this.images;
      this.activeIndex = (activeIndex + 1 >= length) ? activeIndex : activeIndex + 1;
    },
    decrement() {
      const { activeIndex } = this;
      this.activeIndex = (activeIndex - 1 < 0) ? activeIndex : activeIndex - 1;
    },
  },
};
</script>
