<template>
  <button
    :class="blockName"
    type="button"
    aria-label="Website Navigation Menu"
    @click="toggle"
  >
    <icon-x
      v-if="expanded"
      :modifiers="iconModifiers"
    />
    <icon-three-bars
      v-else
      :modifiers="iconModifiers"
    />
  </button>
</template>

<script>
import IconThreeBars from '../icons/vue/three-bars.vue';
import IconX from '../icons/vue/x.vue';

export default {
  components: {
    IconThreeBars,
    IconX,
  },
  props: {
    targets: {
      type: Array,
      default: () => [],
    },
    toggleClass: {
      type: String,
      required: true,
    },
  },
  data: () => ({
    blockName: 'site-navbar-toggler',
    expanded: false,
    iconModifiers: ['lg'],
  }),
  methods: {
    toggle() {
      this.expanded = !this.expanded;
      const elements = document.querySelectorAll(this.targets.join(','));
      Array.prototype.forEach.call(elements, el => el.classList.toggle(this.toggleClass));
    },
  },
};
</script>
