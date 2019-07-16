<template>
  <span
    v-if="name"
    :class="classNames"
  >
    <slot />
  </span>
</template>

<script>
export default {
  props: {
    name: {
      type: String,
      required: true,
      default: '',
    },
    modifiers: {
      type: Array,
      default: () => ([]),
    },
  },
  computed: {
    classNames() {
      const { name, modifiers: mods } = this;
      return ['icon', `icon--${name}`, ...mods.map(mod => `icon--${mod}`)];
    },
  },
};
</script>
