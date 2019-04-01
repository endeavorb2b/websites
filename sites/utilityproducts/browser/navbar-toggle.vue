<template>
  <button
    v-on:click="toggle"
    v-bind:class="{ expanded: isExpanded }"
    id="primary-navbar-toggle"
    class="navbar-toggler"
    type="button"
  >
    <span class="navbar-toggler-icon"></span>
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
  },
  data() {
    return {
      isExpanded: false,
    };
  },
  methods: {
    toggle() {
      this.isExpanded = !this.isExpanded;
      const elementList = document.querySelectorAll(this.targets.join(','));
      elementList.forEach((element) => {
        element.classList.toggle(this.toggleClass);
      });
    },
  },
};
</script>
