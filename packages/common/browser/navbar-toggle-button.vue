<template>
  <button
    v-on:click="toggle"
    v-bind:class="blockName"
    type="button"
  >
    <icon v-bind:name="iconName" v-bind:modifiers="['site-navbar']" />
  </button>
</template>

<script>
import Icon from './icon.vue';

export default {
  props: {
    targets: {
      type: Array,
    },
    toggleClass: {
      type: String,
      required: true,
    }
  },
  components: {
    Icon,
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
