<template>
  <div class="bing-search">
    <form
      class="bing-search__form"
      @submit="search"
    >
      <input
        v-model="term"
        class="form-control bing-search__input"
        type="text"
        placeholder="Search"
        autofocus
      >
      <button type="submit" class="btn btn-primary bing-search__button">
        <span class="icon icon--search">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 16 16"
          >
            <path
              fill-rule="evenodd"
              d="M15.7 13.3l-3.81-3.83A5.93 5.93 0 0 0 13 6c0-3.31-2.69-6-6-6S1 2.69 1 6s2.69 6 6 6c1.3 0 2.48-.41 3.47-1.11l3.83 3.81c.19.2.45.3.7.3.25 0 .52-.09.7-.3a.996.996 0 0 0 0-1.41v.01zM7 10.7c-2.59 0-4.7-2.11-4.7-4.7 0-2.59 2.11-4.7 4.7-4.7 2.59 0 4.7 2.11 4.7 4.7 0 2.59-2.11 4.7-4.7 4.7z"
            />
          </svg>
        </span>
      </button>
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
        <ul class="item-list">
          <div
            v-for="page in pages"
            :key="page.url"
            class="item-list__contents bing-result"
          >
            <li class="item-list__item">
              <div class="item">
                <div class="item__contents">
                  <h5 class="item__title">
                    <a :href="page.url">{{ page.name }}</a>
                  </h5>
                  <div class="item__description">
                    {{ page.snippet }}
                  </div>
                </div>
              </div>
            </li>
          </div>
        </ul>
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
