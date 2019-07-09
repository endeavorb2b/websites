<template>
  <a :href="target" class="btn btn-lg btn-primary">Request More Information</a>
</template>

<script>
  export default {
    props: {
      contentId: {
        type: Number,
        required: true,
      },
      prefix: {
        type: String,
        default: '__inquiry',
      },
    },
    computed: {
      target() {
        return `${this.prefix}/${this.contentId}`;
      },
    },
  };
</script>
