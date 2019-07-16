<template>
  <form v-if="incomplete" @submit.prevent="submit">
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
    <div class="form-group">
      <label for="phone">Phone Number</label>
      <input
        id="phone"
        v-model="phone"
        type="text"
        class="form-control"
        required
      >
    </div>
    <div class="form-group">
      <label for="company">Company Name</label>
      <input
        id="company"
        v-model="company"
        type="text"
        class="form-control"
      >
    </div>
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
    <div class="form-group">
      <label for="country">Country</label>
      <input
        id="country"
        v-model="country"
        type="text"
        class="form-control"
        required
      >
    </div>
    <div class="form-group">
      <label for="postalCode">ZIP/Postal Code</label>
      <input
        id="postalCode"
        v-model="postalCode"
        type="text"
        class="form-control"
      >
    </div>

    <div class="form-group">
      <label for="eventType">Event Type</label>
      <select
        id="eventType"
        v-model="eventType"
        class="form-control"
        required
      >
        <option disabled value="">
          Please select...
        </option>
        <option v-for="eventType in eventTypes" :key="eventType">
          {{ eventType }}
        </option>
      </select>
    </div>

    <div class="form-group">
      <label for="numberOfGuests">Number of Guest(s)</label>
      <textarea
        id="numberOfGuests"
        v-model="numberOfGuests"
        type="numberOfGuests"
        class="form-control"
      />
    </div>

    <div class="form-group">
      <label for="eventDate">Event Date</label>
      <textarea
        id="eventDate"
        v-model="eventDate"
        type="eventDate"
        class="form-control"
      />
    </div>

    <div class="form-group">
      <label for="eventDescription">Describe Your Event</label>
      <textarea
        id="eventDescription"
        v-model="eventDescription"
        type="eventDescription"
        class="form-control"
        required
      />
    </div>

    <div class="form-group">
      <label for="desiredAmenities">List of Desired Amenities</label>
      <textarea
        id="desiredAmenities"
        v-model="desiredAmenities"
        type="desiredAmenities"
        class="form-control"
      />
    </div>

    <pre v-if="error" class="alert alert-danger text-danger">An error occurred: {{ error }}</pre>
    <button type="submit" class="btn btn-block btn-lg btn-primary" :disabled="loading">
      Submit
    </button>
  </form>
  <div v-else>
    Thanks for your inquiry! We'll reach out shortly.
  </div>
</template>

<script>
import FormMixin from '@endeavorb2b/base-website-inquiry/browser/form-mixin';

export default {
  mixins: [FormMixin],
  data: () => ({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    company: '',
    jobTitle: '',
    country: '',
    postalCode: '',
    eventType: null,
    eventTypes: [
      'Birthday Party',
      'Class',
      'Corporate Event',
      'Dinner Party',
      'Filming Location',
      'Launch Party',
      'Meeting',
      'Party',
      'Photo Shoot',
      'Social Event',
      'Wedding',
      'Other',
    ],
    numberOfGuests: '',
    eventDate: '',
    eventDescription: '',
    desiredAmenities: '',
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
        eventType,
        numberOfGuests,
        eventDate,
        eventDescription,
        desiredAmenities,
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
        eventType,
        numberOfGuests,
        eventDate,
        eventDescription,
        desiredAmenities,
      });
    },
  },
};
</script>
