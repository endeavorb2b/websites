<template>
  <form @submit.prevent="submit" v-if="incomplete">
    <div class="row">
      <div class="col col-md-6">
        <div class="form-group">
          <label for="firstName">First Name</label>
          <input type="text" class="form-control" id="firstName" v-model="firstName" required>
        </div>
      </div>
      <div class="col col-md-6">
        <div class="form-group">
          <label for="lastName">Last Name</label>
          <input type="text" class="form-control" id="lastName" v-model="lastName" required>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col col-md-6">
        <div class="form-group">
          <label for="email">Email address</label>
          <input type="email" class="form-control" id="email" v-model="email" required>
        </div>
      </div>
      <div class="col col-md-6">
        <div class="form-group">
          <label for="phone">Phone Number</label>
          <input type="text" class="form-control" id="phone" v-model="phone">
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col col-md-6">
        <div class="form-group">
          <label for="company">Company Name</label>
          <input type="text" class="form-control" id="company" v-model="company">
        </div>
      </div>
      <div class="col col-md-6">
        <div class="form-group">
          <label for="jobTitle">Job Title</label>
          <input type="text" class="form-control" id="jobTitle" v-model="jobTitle" required>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col col-md-6">
        <div class="form-group">
          <label for="country">Country</label>
          <input type="country" class="form-control" id="country" v-model="country" required>
        </div>
      </div>
      <div class="col col-md-6">
        <div class="form-group">
          <label for="postalCode">ZIP/Postal Code</label>
          <input type="text" class="form-control" id="postalCode" v-model="postalCode">
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col">
        <div class="form-group">
          <label for="comments">Comments</label>
          <textarea type="comments" class="form-control" id="comments" v-model="comments">
        </div>
      </div>
    </div>
    <pre class="alert alert-danger text-danger" v-if="error">An error occurred: {{ error }}</pre>
    <button type="submit" class="btn btn-lg btn-primary" :disabled="loading">Submit</button>
  </form>
  <div v-else>
    Thanks for your inquiry! We'll reach out shortly.
  </div>
</template>

<script>
  import FormMixin from './form-mixin';

  export default {
    mixins: [ FormMixin ],
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
         phone,
         company,
         jobTitle,
         country,
         postalCode,
         comments,
        });
      },
    }
  }
</script>
