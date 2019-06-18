<template>
  <div :class="classNames">
    <slot></slot>
  </div>
</template>

<script>
export default {
  props: {
    className: String,
  },
  computed: {
    classNames() {
      const classNames = ['form-group']
      const { className } = this;
      if (className) classNames.push(className);
      return classNames;
    },
  },
};
</script>
