<template>
  <button
    v-on:click="toggle"
    v-bind:class="blockName"
    type="button"
  >
    <span v-bind:class="iconClass"></span>
  </button>
</template>

<script>
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
  data: () => ({
    blockName: 'site-navbar-toggler',
    expanded: false,
  }),
  computed: {
    iconClass() {
      const element = `${this.blockName}__icon`;
      const modifier = `${this.blockName}__icon--expanded`;
      const obj = {
        [element]: true,
      };
      if (this.expanded) obj[modifier] = true;
      return obj;
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
