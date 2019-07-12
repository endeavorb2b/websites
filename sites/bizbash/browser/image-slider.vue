<template>
  <div id="image-slider" class="carousel slide" data-ride="carousel">
    <ol class="carousel-indicators">
      <li data-target="#image-slider" v-for="(image, index) in images" :data-slide-to="index" :class="{ active: index === activeIndex }" @click="set(index)" />
    </ol>
    <div class="carousel-inner">
      <div v-for="(image, index) in images" class="carousel-item" :class="{ active: index === activeIndex }">
        <img class="d-block w-100" :src="image.src" :alt="image.alt" />
        <div class="carousel-caption d-none d-md-block">
          <h5 v-if="image.displayName">{{ image.displayName }}</h5>
          <p v-if="image.caption">{{ image.caption }}</p>
          <p v-if="image.credit">{{ image.credit }}</p>
        </div>
      </div>
    </div>
    <a href="#" class="carousel-control-prev" role="button" data-slide="prev" @click="decrement">
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="sr-only">Previous</span>
    </a>
    <a href="#" class="carousel-control-next" role="button" data-slide="next" @click="increment">
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="sr-only">Next</span>
    </a>
  </div>
</template>
<style scoped>
.carousel-indicators {
  margin-bottom: 0;
}
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
  data: () => ({
    activeIndex: 0,
  }),
  methods: {
    set(index) {
      this.activeIndex = index;
    },
    increment() {
      const { activeIndex } = this;
      const length = this.images.length; //
      this.activeIndex = (activeIndex + 1 >= length) ? 0 : activeIndex + 1;
    },
    decrement() {
      const { activeIndex } = this;
      const length = this.images.length; //
      this.activeIndex = (activeIndex - 1 < 0) ? length - 1 : activeIndex - 1;
    },
  },
  computed: {

  },
  props: {
    images: {
      type: Array,
      required: true,
    },
  },
};
</script>
