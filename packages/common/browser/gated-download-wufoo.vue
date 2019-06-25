<template>
  <div class="button-wrapper" v-if="canDownload">
    <p>Your download should start automatically. If not, click the button below to access this document.</p>
    <a :href="target" class="btn btn-lg btn-primary" target="_blank" rel="noopener noreferer">{{ label }}</a>
  </div>
  <div v-else>
    <strong>To access this piece of premium content, please fill out the following form:</strong>
    <div :id="formId" />
  </div>
</template>

<script>
import cleanPath from './utils/clean-path';

export default {
  props: {
    formHash: {
      type: String,
      required: true,
    },
    userName: {
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
      default: '1000',
    }
  },
  data: () => ({ canDownload: false }),
  async mounted() {
    if (!window.WufooForm) {
      await (new Promise((resolve, reject) => {
        const s = document.createElement('script');
        s.src = 'https://secure.wufoo.com/scripts/embed/form.js';
        s.async = 1;
        s.onerror = () => reject(new Error('Unable to load Wufoo form script.'));
        s.onload = resolve;
        const scr = document.getElementsByTagName('script')[0];
        scr.parentNode.insertBefore(s, scr);
      }));
    }
    this.init();
  },
  methods: {
    init() {
      const options = {
        userName: this.userName,
        formHash: this.formHash,
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
    }
  },
  computed: {
    formId: function() {
      return `wufoo-${this.formHash}`;
    },
    formUrl: function() {
      return `https://${this.userName}.wufoo.com/forms/${cleanPath(this.formHash)}`
    },
  },
};
</script>
