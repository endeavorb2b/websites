<template>
  <div class="carousel-item" :class="classNames">
    <img :src="image.src" :alt="image.alt">
    <div class="carousel-caption">
      <h5 v-if="image.displayName">
        {{ image.displayName }}
      </h5>
      <p v-if="image.caption">
        {{ image.caption }}
      </p>
      <p v-if="image.credit">
        {{ image.credit }}
      </p>
    </div>
  </div>
</template>

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
