<template>
  <svg :class="classNames">
    <use
      :href="href"
      :xlink:href="href"
    />
  </svg>
</template>

<script>
export default {
  props: {
    name: {
      type: String,
      required: true,
    },
    modifiers: {
      type: Array,
      default: () => ([]),
    },
  },
  data: () => ({ blockName: 'icon' }),
  computed: {
    href() {
      return `#icon-${this.name}`;
    },
    classNames() {
      const { blockName, name, modifiers } = this;
      return [blockName, `${blockName}--${name}`, ...modifiers.map(mod => `${blockName}--${mod}`)];
    },
  },
};
</script>
