<template>
  <div>
    <form v-on:submit="search" class="row mb-2">
      <input class="col-10" type="text" v-model="term" placeholder="Search" autofocus>
      <input class="col-2" type="submit" value="Search" title="search">
    </form>
    <div>
      <p class="bing-loading" v-if="loading">Loading results...</p>
      <p class="bing-error" v-else-if="error">An error occurred. Please try again later!</p>
      <p class="bing-error" v-else-if="!pages.length && hasSearched">No results found.</p>
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
import { getAsArray } from '@base-cms/object-path';

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
    }
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
        const query = q => Object.keys(q).map(k => encodeURIComponent(k) + '=' + encodeURIComponent(q[k])).join('&');
        const url = `https://api.cognitive.microsoft.com/bing/v5.0/search?${query(payload)}`;
        const headers = { 'Ocp-Apim-Subscription-Key': apiKey };

        const res = await fetch(url, { headers });
        const json = await res.json();

        this.pages = getAsArray(json, 'webPages.value');

      } catch (e) {
        console.error(e);
        this.error = e.message;
      } finally {
        this.loading = false;
        this.hasSearched = true;
      }
    },
  },
};
</script>
