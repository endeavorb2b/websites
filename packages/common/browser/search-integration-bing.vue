<template>
  <div>
    <form v-on:submit="search" class="row mb-2">
      <input class="col-10" type="text" v-model="term" placeholder="Search">
      <input class="col-2" type="submit" value="Search" title="search">
    </form>
    <div>
      <p class="bing-loading" v-if="loading"> Loading results... </p>
      <p class="bing-error" v-if="error"> An error occurred. Please try again later! </p>
      <div v-else>
        <div class="bing-result" v-for="page in pages">
          <p><a v-bind:href="page.url">{{ page.name }}</a></p>
          <small>{{ page.displayUrl }}</small>
          <p>{{ page.snippet }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    domain: {
      type: String,
      required: true,
    },
    apiKey: {
      type: String,
      required: true,
    },
    mkt: {
      type: String,
      default: 'en-use',
    },
    limit: {
      type: Number,
      default: 50,
    }
  },
  data() {
    return {
      loading: false,
      error: false,
      pages: [],
      term: '',
    };
  },
  methods: {
    search(event) {
      event.preventDefault();
      this.loading = true;
      this.error = false;
      this.pages = [];

      const { term, domain, apiKey, mkt, limit } = this;

      const payload = {
        q: `${term} site:${domain}`,
        count: limit,
        offset: 0,
        mkt,
      };
      const query = q => Object.keys(q).map(k => encodeURIComponent(k) + '=' + encodeURIComponent(q[k])).join('&');
      const url = `https://api.cognitive.microsoft.com/bing/v5.0/search?${query(payload)}`;
      const headers = { 'Ocp-Apim-Subscription-Key': apiKey };

      fetch(url, { headers })
        .then(res => res.json())
        .then((json) => {
          const pages = Array.isArray(json.webPages.value) ? json.webPages.value : [];
          this.pages = pages.map(({ url, name, displayUrl, snippet }) => ({ url, name, displayUrl, snippet }));
        })
        .catch((e) => {
          console.error(e);
          this.error = e.message;
        })
        .finally(() => { this.loading = false; });
    },
  },
};
</script>
