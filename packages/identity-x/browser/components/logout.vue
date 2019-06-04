<template>
  <div>
    <p>Logging out...</p>
  </div>
</template>

<script>
import redirect from '../utils/redirect';

export default {
  props: {
    redirectTo: {
      type: String,
      default: '/',
    },
  },
  data: () => ({
    error: null,
  }),
  mounted() {
    this.logout();
  },
  methods: {
    /**
     *
     */
    async logout() {
      try {
        const res = await this.$fetch('/logout');
        const data = await res.json();
        if (!res.ok) throw new Error(data.message);
        this.redirect();
      } catch (e) {
        this.error = `Unable to logout: ${e.message}`;
      }
    },

    redirect() {
      redirect(window, this.redirectTo);
    },
  },
};
</script>
