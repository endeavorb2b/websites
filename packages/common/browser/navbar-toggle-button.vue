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
    },
    expanded: {
      type: Boolean,
      default: false,
    }
  },
  data: () => ({
    blockName: 'site-navbar-toggler',
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
      const elementList = document.querySelectorAll(this.targets.join(','));
      elementList.forEach((element) => {
        element.classList.toggle(this.toggleClass);
      });
    },
  },
};
</script>
