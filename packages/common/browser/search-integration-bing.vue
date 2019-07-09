<template>
  <div>
    <form
      class="row mb-2"
      @submit="search"
    >
      <input
        v-model="term"
        class="col-10"
        type="text"
        placeholder="Search"
        autofocus
      >
      <input
        class="col-2"
        type="submit"
        value="Search"
        title="search"
      >
    </form>
    <div>
      <p
        v-if="loading"
        class="bing-loading"
      >
        Loading results...
      </p>
      <p
        v-else-if="error"
        class="bing-error"
      >
        An error occurred. Please try again later!
      </p>
      <p
        v-else-if="!pages.length && hasSearched"
        class="bing-error"
      >
        No results found.
      </p>
      <div v-else>
        <div
          v-for="page in pages"
          :key="page.url"
          class="bing-result"
        >
          <p><a :href="page.url">{{ page.name }}</a></p>
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
      default: 'en-us',
    },
    limit: {
      type: Number,
      default: 50,
    },
  },
  data() {
    return {
      loading: false,
      hasSearched: false,
      error: false,
      pages: [],
      term: '',
    };
  },
  methods: {
    async search(event) {
      event.preventDefault();
      this.loading = true;
      this.error = false;
      this.pages = [];

      try {
        const { term, domain, apiKey } = this;
        const { mkt, limit: count } = this;
        const payload = {
          q: `${term} site:${domain}`,
          count,
          offset: 0,
          mkt,
        };
        const query = q => Object.keys(q).map(k => `${encodeURIComponent(k)}=${encodeURIComponent(q[k])}`).join('&');
        const url = `https://api.cognitive.microsoft.com/bing/v5.0/search?${query(payload)}`;
        const headers = { 'Ocp-Apim-Subscription-Key': apiKey };

        const res = await fetch(url, { headers });
        const json = await res.json();

        this.pages = json && json.webPages && json.webPages.value ? json.webPages.value : [];
      } catch (e) {
        this.error = e.message;
      } finally {
        this.loading = false;
        this.hasSearched = true;
      }
    },
  },
};
</script>
