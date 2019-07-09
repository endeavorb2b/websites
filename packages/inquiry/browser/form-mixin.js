import fetch from 'node-fetch'; // polyfilled browser version?

export default {
  props: {
    mountPoint: {
      type: String,
      default: '/__inquiry',
    },
    contentId: {
      type: Number,
      required: true,
    },
  },
  data: () => ({
    complete: false,
    error: null,
    loading: false,
  }),
  computed: {
    incomplete() {
      return !this.complete;
    },
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
    validate() {
      throw new Error('Validate method must be overwritten!');
    },
    async submit() {
      this.error = null;
      this.loading = true;
      // eslint-disable-next-line no-underscore-dangle
      const payload = { ...this._data };
      delete payload.complete;
      delete payload.error;
      delete payload.loading;
      try {
        await this.validate(payload);
        const res = await this.fetch(`/${this.contentId}`, payload);
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
