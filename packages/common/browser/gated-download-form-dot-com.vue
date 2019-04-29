<template>
  <div class="button-wrapper" v-if="canDownload">
    <a v-bind:href="target" class="btn btn-lg btn-primary" target="_blank"> {{ label }}</a>
  </div>
  <iframe v-else v-bind:src="formUrl" frameborder="0" width="100%" v-bind:height="height"></iframe>
</template>

<script>
export default {
  props: {
    surveyId: {
      type: String,
      required: true,
    },
    label: {
      type: String,
      default: 'Download',
    },
    target: {
      type: String,
      required: true,
    },
    height: {
      type: String,
      default: '550',
    }
  },
  data: () => ({ canDownload: false }),
  mounted() {
    window.addEventListener('message', (e) => {
      if (e.data.indexOf('type:whitepaper-registration') !== -1) {
        this.canDownload = true;
      }
    }, false);
  },
  computed: {
    formUrl: function() {
      return `https://app.form.com${this.surveyId}?cburl=${window.location}`;
    },
  },
};
</script>
