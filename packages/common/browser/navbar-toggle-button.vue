<template>
  <button
    :class="blockName"
    type="button"
    aria-label="Website Navigation Menu"
    @click="toggle"
  >
    <icon
      :name="iconName"
      :modifiers="['site-navbar']"
    />
  </button>
</template>

<script>
import Icon from './icon.vue';

export default {
  components: {
    Icon,
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
  }),
  computed: {
    iconName() {
      if (this.expanded) return 'cross';
      return 'menu';
    },
  },
  methods: {
    toggle() {
      this.expanded = !this.expanded;
      const elements = document.querySelectorAll(this.targets.join(','));
      Array.prototype.forEach.call(elements, el => el.classList.toggle(this.toggleClass));
    },
  },
};
</script>
