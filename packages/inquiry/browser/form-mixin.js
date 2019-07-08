import fetch from 'node-fetch'; // polyfilled browser version?

export default {
  props: () => ({
    mountPoint: '/__inquiry',
  }),
  data: () => ({
    complete: false,
    error: null,
    loading: false,
  }),
  computed: {
    incomplete: () => !this.complete,
  },
  methods: {
    async fetch(path, body) {
      const endpoint = path.replace(/^\/+/, '');
      const uri = `${this.mountPoint}/${endpoint}`;
      return fetch(uri, {
        method: 'post',
        headers: { 'content-type': 'application/json' },
        body: body ? JSON.stringify(body) : undefined,
      });
    },
    async validate() {
      throw new Error('Validate method must be overwritten!');
    },
    async submit(payload) {
      this.error = null;
      this.loading = true;
      try {
        await this.validate(payload);
        const res = await this.fetch('/submit', payload);
        const data = await res.json();
        if (!res.ok) throw new Error(`${res.statusText} (${res.status}): ${data.message}`);
        if (data.ok) this.complete = true;
      } catch (e) {
        this.error = e.message;
      } finally {
        this.loading = false;
      }
    },
  },

};
