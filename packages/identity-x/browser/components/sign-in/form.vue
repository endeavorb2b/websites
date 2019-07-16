<template>
  <div v-if="hasActiveUser">
    <p>You are currently logged in as {{ activeUser.email }}.</p>
    <a
      :href="logoutEndpoint"
      class="btn btn-primary"
      role="button"
    >
      {{ logoutButtonLabel }}
    </a>
  </div>
  <div v-else-if="complete">
    <h4>Almost Done!</h4>
    <p>
      We just sent an email to <em>{{ user.email }}</em> with your one-time login link.
      To finish logging in, open the email message and click the link within.
    </p>
    <p>Note: please make sure you check your spam and or clutter/junk folders.</p>
  </div>
  <div v-else-if="needsInput">
    <p>To complete this sign-on process, please fill out these remaining fields.</p>
    <form @submit.prevent="handle">
      <fieldset :disabled="loading">
        <given-name v-model="user.givenName" />
        <family-name v-model="user.familyName" />
        <button
          type="submit"
          class="btn btn-primary"
        >
          {{ buttonLabel }}
        </button>
      </fieldset>
      <p v-show="error">
        An error occurred: {{ error }}
      </p>
    </form>
  </div>
  <div v-else>
    <form @submit.prevent="handle">
      <fieldset :disabled="loading">
        <email v-model="user.email" />
        <button
          type="submit"
          class="btn btn-primary"
        >
          {{ buttonLabel }}
        </button>
      </fieldset>
      <p v-show="error">
        An error occurred: {{ error }}
      </p>
    </form>
  </div>
</template>

<script>
import Email from './fields/email.vue';
import GivenName from './fields/given-name.vue';
import FamilyName from './fields/family-name.vue';
import cleanPath from '../../utils/clean-path';

export default {
  components: {
    Email,
    GivenName,
    FamilyName,
  },
  props: {
    activeUser: {
      type: Object,
      default: () => {},
    },
    authEndpoint: {
      type: String,
      default: '/user/authenticate',
    },
    context: {
      type: String,
      validator: v => ['login', 'register'].includes(v),
      default: '',
    },
    loginButtonLabel: {
      type: String,
      default: 'Login',
    },
    loginEndpoint: {
      type: String,
      default: '/user/login',
    },
    logoutButtonLabel: {
      type: String,
      default: 'Logout',
    },
    logoutEndpoint: {
      type: String,
      default: '/user/logout',
    },
    registerButtonLabel: {
      type: String,
      default: 'Register',
    },
    registerEndpoint: {
      type: String,
      default: '/user/register',
    },
    requiredFields: {
      type: Array,
      default: () => ['givenName', 'familyName'],
    },
  },
  data: () => ({
    complete: false,
    error: null,
    loading: false,
    needsInput: false,
    user: {},
  }),
  computed: {
    authUrl() {
      return `${window.location.origin}/${cleanPath(this.authEndpoint)}`;
    },
    buttonLabel() {
      if (this.loading) return 'Loading...';
      if (this.needsInput) {
        if (this.isLoginContext) return this.loginButtonLabel;
        if (this.isRegisterContext) return this.registerButtonLabel;
        return 'Finish';
      }
      return 'Continue';
    },
    hasActiveUser() {
      return this.activeUser && this.activeUser.email;
    },
    isLoginContext() {
      return this.context === 'login';
    },
    isRegisterContext() {
      return this.context === 'register';
    },
    redirectTo() {
      const { pathname } = window.location;
      const endpoints = [this.loginEndpoint, this.registerEndpoint];
      return endpoints.includes(pathname) ? undefined : pathname;
    },
  },
  methods: {
    async handle() {
      this.error = null;
      this.loading = true;
      const {
        user,
        requiredFields,
        redirectTo,
        authUrl,
      } = this;
      try {
        const res = await this.$fetch('/login', {
          user,
          requiredFields,
          redirectTo,
          authUrl,
        });
        const data = await res.json();
        if (!res.ok) throw new Error(`${res.statusText} (${res.status}): ${data.message}`);

        if (data.ok) {
          this.complete = true;
        } else if (data.needsInput) {
          this.needsInput = true;
        }
      } catch (e) {
        this.error = e.message;
      } finally {
        this.loading = false;
      }
    },
  },
};
</script>
