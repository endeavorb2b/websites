<template>
  <div v-if="hasActiveUser">
    <p>You are currently logged in as {{ activeUser.email }}.</p>
    <a :href="logoutEndpoint" class="btn btn-primary" role="button">Logout</a>
  </div>
  <div v-else-if="complete">
    <h4>Almost Done!</h4>
    <p>We just sent an email to <em>{{ user.email }}</em> with your one-time login link. To finish logging in, open the email message and click the link within.</p>
    <p>Note: please make sure you check your spam and or clutter/junk folders.</p>
  </div>
  <div v-else>
    <form @submit.prevent="loadUser">
      <div class="form-group">
        <label for="login-email">Email Address</label>
        <input id="login-email" v-model="user.email" :disabled="loading" type="email" required="true" class="form-control" placeholder="user@domain.com" />
      </div>
      <div class="form-group">
        <label for="login-given-name">First Name</label>
        <input id="login-given-name" v-model="user.givenName" :disabled="loading" type="text" required="true" class="form-control" />
      </div>
      <div class="form-group">
        <label for="login-family-name">Last Name</label>
        <input id="login-family-name" v-model="user.familyName" :disabled="loading" type="text" required="true" class="form-control" />
      </div>
      <button type="submit" :disabled="loading" class="btn btn-primary">{{ registerButtonLabel }}</button>
      <p v-show="error">An error occurred: {{ error }}</p>
    </form>
  </div>
</template>

<script>
import cleanPath from '../utils/clean-path';

export default {
  props: {
    activeUser: {
      type: Object,
    },
    authEndpoint: {
      type: String,
      default: '/user/authenticate',
    },
    logoutEndpoint: {
      type: String,
      default: '/user/logout',
    },
    registerEndpoint: {
      type: String,
      default: '/user/register',
    },
  },
  data: () => ({
    error: null,
    loading: false,
    user: {},
    complete: false,
  }),
  computed: {
    registerButtonLabel() {
      if (this.loading) return 'Loading...';
      return 'Register';
    },
    authUrl() {
      return `${window.location.origin}/${cleanPath(this.authEndpoint)}`;
    },
    hasActiveUser() {
      return this.activeUser && this.activeUser.id;
    },
    redirectTo() {
      const { pathname } = window.location;
      return pathname === this.registerEndpoint ? undefined : pathname;
    },
  },
  methods: {
    /**
     *
     */
    async loadUser() {
      this.error = null;
      this.loading = true;
      const {
        user,
        redirectTo,
        authUrl,
      } = this;
      try {
        const res = await this.$fetch('/login', {
          user,
          redirectTo,
          authUrl,
        });
        const data = await res.json();
        if (!res.ok) throw new Error(`${res.statusText} (${res.status}): ${data.message}`);

        this.complete = true;
      } catch (e) {
        this.error = e.message;
      } finally {
        this.loading = false;
      }
    },
  },
};
</script>
