<template>
  <div v-if="redirecting">
    <p>You've successfully logged in. Redirecting you...</p>
  </div>
  <div v-else-if="loading">
    <p>Logging in...</p>
  </div>
  <div v-else-if="error">
    <p>An error occured!</p>
    <p>{{ error }}</p>
  </div>
</template>

<script>
import redirect from '../utils/redirect';

export default {
  props: {
    token: {
      type: String,
      required: true,
    },
    redirectTo: {
      type: String,
      required: true,
      default: '/',
    },
  },
  data: () => ({
    error: null,
    loading: false,
    redirecting: false,
  }),
  mounted() {
    this.authenticate();
  },
  methods: {
    /**
     *
     */
    async authenticate() {
      this.loading = true;
      try {
        const { token } = this;
        if (!token) throw new Error('No login token was provided.');

        const res = await this.$fetch('/authenticate', { token });
        const data = await res.json();
        if (!res.ok) throw new Error(data.message);
        this.redirect();
      } catch (e) {
        this.error = `Unable to login: ${e.message}`;
      } finally {
        this.loading = false;
      }
    },

    redirect() {
      this.redirecting = true;
      redirect(this.redirectTo);
    },
  },
};
</script>
