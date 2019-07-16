<template>
  <div v-if="error">
    <p>{{ error }}</p>
  </div>
  <div v-else>
    <p>Logging out...</p>
  </div>
</template>

<script>
import redirect from '../utils/redirect';
import getReferringPage from '../utils/get-referring-page';

export default {
  props: {
    redirectTo: {
      type: String,
      default: null,
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
      this.error = null;
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
      const to = this.redirectTo ? this.redirectTo : getReferringPage();
      redirect(to);
    },
  },
};
</script>
