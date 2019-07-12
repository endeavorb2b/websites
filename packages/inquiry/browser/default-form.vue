<template>
  <form v-if="incomplete" @submit.prevent="submit">
    <div class="row">
      <div class="col col-md-6">
        <div class="form-group">
          <label for="firstName">First Name</label>
          <input
            id="firstName"
            v-model="firstName"
            type="text"
            class="form-control"
            required
          >
        </div>
      </div>
      <div class="col col-md-6">
        <div class="form-group">
          <label for="lastName">Last Name</label>
          <input
            id="lastName"
            v-model="lastName"
            type="text"
            class="form-control"
            required
          >
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col col-md-6">
        <div class="form-group">
          <label for="email">Email address</label>
          <input
            id="email"
            v-model="email"
            type="email"
            class="form-control"
            required
          >
        </div>
      </div>
      <div class="col col-md-6">
        <div class="form-group">
          <label for="phone">Phone Number</label>
          <input
            id="phone"
            v-model="phone"
            type="text"
            class="form-control"
          >
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col col-md-6">
        <div class="form-group">
          <label for="company">Company Name</label>
          <input
            id="company"
            v-model="company"
            type="text"
            class="form-control"
          >
        </div>
      </div>
      <div class="col col-md-6">
        <div class="form-group">
          <label for="jobTitle">Job Title</label>
          <input
            id="jobTitle"
            v-model="jobTitle"
            type="text"
            class="form-control"
            required
          >
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col col-md-6">
        <div class="form-group">
          <label for="country">Country</label>
          <input
            id="country"
            v-model="country"
            type="country"
            class="form-control"
            required
          >
        </div>
      </div>
      <div class="col col-md-6">
        <div class="form-group">
          <label for="postalCode">ZIP/Postal Code</label>
          <input
            id="postalCode"
            v-model="postalCode"
            type="text"
            class="form-control"
          >
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col">
        <div class="form-group">
          <label for="comments">Comments</label>
          <textarea
            id="comments"
            v-model="comments"
            type="comments"
            class="form-control"
          />
        </div>
      </div>
    </div>
    <pre v-if="error" class="alert alert-danger text-danger">An error occurred: {{ error }}</pre>
    <button type="submit" class="btn btn-lg btn-primary" :disabled="loading">
      Submit
    </button>
  </form>
  <div v-else>
    Thanks for your inquiry! We'll reach out shortly.
  </div>
</template>

<script>
import FormMixin from './form-mixin';

export default {
  mixins: [
    FormMixin,
  ],
  data: () => ({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    company: '',
    jobTitle: '',
    country: '',
    postalCode: '',
    comments: '',
  }),
  methods: {
    async submit() {
      const {
        firstName,
        lastName,
        email,
        phone,
        company,
        jobTitle,
        country,
        postalCode,
        comments,
      } = this;
      await this.$submit({
        firstName,
        lastName,
        email,
        confirmationEmail: email,
        phone,
        company,
        jobTitle,
        country,
        postalCode,
        comments,
      });
    },
  },
};
</script>
