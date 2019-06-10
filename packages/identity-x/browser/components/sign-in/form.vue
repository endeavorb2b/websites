<template>
  <div v-if="hasActiveUser">
    <p>You are currently logged in as {{ activeUser.email }}.</p>
    <a :href="logoutEndpoint" class="btn btn-primary" role="button">Logout</a>
  </div>
  <div v-else>
    <form @submit.prevent="handle">
      <email v-model="user.email" />
      <given-name v-model="user.givenName" />
      <family-name v-model="user.familyName" />
      <button type="submit" class="btn btn-primary">{{ buttonLabel }}</button>
    </form>
  </div>
</template>

<script>
import Email from './fields/email.vue';
import GivenName from  './fields/given-name.vue';
import FamilyName from './fields/family-name.vue';

export default {
  components: {
    Email,
    GivenName,
    FamilyName,
  },
  props: {
    activeUser: Object,
    context: {
      type: String,
      required: true,
      validator: (v) => ['login', 'register'].includes(v),
    },
    loginButtonLabel: {
      type: String,
      default: 'Login',
    },
    logoutEndpoint: {
      type: String,
      default: '/user/logout',
    },
    registerButtonLabel: {
      type: String,
      default: 'Register',
    },
    requiredFields: {
      type: Array,
      default: () => ['givenName', 'familyName'],
    },
  },
  data: () => ({
    loading: false,
    user: {},
  }),
  computed: {
    buttonLabel() {
      if (this.loading) return 'Loading...';
      if (this.isLoginContext) return this.loginButtonLabel;
      if (this.isRegisterContext) return this.registerButtonLabel;
      return 'Continue';
    },
    hasActiveUser() {
      return this.activeUser && this.activeUser.id;
    },
    isLoginContext() {
      return this.context === 'login';
    },
    isRegisterContext() {
      return this.context === 'registier';
    },
  },
  methods: {
    async handle() {
      Object.keys(this.user).map(key => console.log(key, this.user[key]));
    },
  },
};
</script>
