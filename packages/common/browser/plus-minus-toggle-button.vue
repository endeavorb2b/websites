<template>
  <button
    :class="blockName"
    type="button"
    aria-label="Toggle Menu"
    @click="toggle"
  >
    <icon-dash
      v-if="expanded"
      :modifiers="iconModifiers"
    />
    <icon-plus
      v-else
      :modifiers="iconModifiers"
    />
  </button>
</template>

<script>
import IconPlus from '../icons/vue/plus.vue';
import IconDash from '../icons/vue/dash.vue';

export default {
  components: {
    IconPlus,
    IconDash,
  },
  props: {
    initiallyExpanded: {
      type: Boolean,
      default: false,
    },
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
    blockName: 'plus-minus-toggler',
    iconModifiers: ['md'],
    expanded: false,
  }),
  created() {
    this.expanded = this.initiallyExpanded;
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
