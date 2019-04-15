<template>
  <gcse:search v-pre></gcse:search>
</template>

<script>
export default {
  props: {
    apiKey: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      isAndroid: false,
    };
  },
  created() {
    const ua = navigator.userAgent.toLowerCase();
    this.isAndroid = ua.includes('android');
  },
  mounted() {
    const gcse = document.createElement('script');
    gcse.type = 'text/javascript';
    gcse.async = true;
    gcse.src = `https://www.google.com/cse/cse.js?cx=${this.apiKey}`;
    const s = document.getElementsByTagName('script')[0];
    s.parentNode.insertBefore(gcse, s);
    if (this.isAndroid) setTimeout('document.getElementById(\'gsc-i-id1\').focus();', 1000);
  },
};
</script>
