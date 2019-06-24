<template>
  <div class="button-wrapper" v-if="canDownload">
    <p>Your download should start automatically. If not, click the button below to access this document.</p>
    <a v-bind:href="target" class="btn btn-lg btn-primary" target="_blank"> {{ label }}</a>
  </div>
  <iframe v-else v-bind:src="formUrl" frameborder="0" v-bind:width="width" v-bind:height="height"></iframe>
</template>

<script>
export default {
  props: {
    surveyId: {
      type: String,
      required: true,
    },
    surveyHost: {
      type: String,
      default: 'cygnuscorporate.wufoo.com',
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
      default: '1000',
    },
    width: {
      type: String,
      default: '100%',
    }
  },
  data: () => ({ canDownload: false }),
  computed: {
    formUrl: function() {
      return `https://${this.surveyHost}/embed/${this.surveyId}?header=hide`;
    },
  },
};
</script>
