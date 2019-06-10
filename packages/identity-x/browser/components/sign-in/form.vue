<template>
  <form @submit.prevent="handle">
    <email v-model="user.email" />
    <given-name v-model="user.givenName" />
    <family-name v-model="user.familyName" />
    <button type="submit" class="btn btn-primary">Go</button>
  </form>
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
  data: () => ({
    user: {},
  }),
  methods: {
    async handle() {
      Object.keys(this.user).map(key => console.log(key, this.user[key]));
    },
  },
};
</script>
