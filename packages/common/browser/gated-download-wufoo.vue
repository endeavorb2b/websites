<template>
  <div class="button-wrapper" v-if="canDownload">
    <p>Your download should start automatically. If not, click the button below to access this document.</p>
    <a :href="target" class="btn btn-lg btn-primary" target="_blank"> {{ label }}</a>
  </div>
  <div v-else>
    <strong>To access this piece of premium content, please fill out the following form:</strong>
    <div :id="formId" />
  </div>
</template>

<script>
export default {
  props: {
    surveyId: {
      type: String,
      required: true,
    },
    userName: {
      type: String,
      default: 'cygnuscorporate',
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
    }
  },
  data: () => ({ canDownload: false }),
  mounted() {
    const options = {
      userName: this.userName,
      formHash: this.surveyId,
      autoResize: true,
      height: this.height,
      header: 'hide',
      async: true,
      ssl: true,
      addSubmitListener: (e) => {
        if (e.data === 'wufoo-submit-done') {
          this.canDownload = true;
          window.open(this.target);
        }
      },
    };
    const instance = new WufooForm();
    instance.initialize(options);
    instance.display();
  },
  computed: {
    formId: function() {
      return `wufoo-${this.surveyId}`;
    },
    formUrl: function() {
      return `https://${this.userName}.wufoo.com/forms/${this.surveyId}`
    },
  },
};
</script>
