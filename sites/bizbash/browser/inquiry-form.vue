<template>
  <form v-if="incomplete" @submit.prevent="submit">
    <div class="form-group">
      <label for="inquiry-given-name" class="required-field">First Name</label>
      <input
        id="inquiry-given-name"
        v-model="givenName"
        type="text"
        class="form-control"
        required
      >
    </div>
    <div class="form-group">
      <label for="inquiry-family-name" class="required-field">Last Name</label>
      <input
        id="inquiry-family-name"
        v-model="familyName"
        type="text"
        class="form-control"
        required
      >
    </div>
    <div class="form-group">
      <label for="inquiry-email" class="required-field">Email address</label>
      <input
        id="inquiry-email"
        v-model="email"
        type="email"
        class="form-control"
        required
      >
    </div>
    <div class="form-group">
      <label for="inquiry-phone" class="required-field">Phone Number</label>
      <input
        id="inquiry-phone"
        v-model="phone"
        type="tel"
        class="form-control"
        required
      >
    </div>
    <div class="form-group">
      <label for="inquiry-company">Company Name</label>
      <input
        id="inquiry-company"
        v-model="company"
        type="text"
        class="form-control"
      >
    </div>
    <div class="form-group">
      <label for="inquiry-job-title" class="required-field">Job Title</label>
      <input
        id="inquiry-job-title"
        v-model="jobTitle"
        type="text"
        class="form-control"
        required
      >
    </div>
    <div class="form-group">
      <label for="inquiry-country" class="required-field">Country</label>
      <input
        id="inquiry-country"
        v-model="country"
        type="text"
        class="form-control"
        required
      >
    </div>
    <div class="form-group">
      <label for="inquiry-postal-code">ZIP/Postal Code</label>
      <input
        id="inquiry-postal-code"
        v-model="postalCode"
        type="text"
        class="form-control"
      >
    </div>

    <div class="form-group">
      <label for="inquiry-event-type" class="required-field">Event Type</label>
      <select
        id="inquiry-event-type"
        v-model="eventType"
        class="custom-select"
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
      <label for="inquiry-number-of-guests">Number of Guest(s)</label>
      <textarea
        id="inquiry-number-of-guests"
        v-model="numberOfGuests"
        class="form-control"
      />
    </div>

    <div class="form-group">
      <label for="inquiry-event-date">Event Date</label>
      <textarea
        id="inquiry-event-date"
        v-model="eventDate"
        class="form-control"
      />
    </div>

    <div class="form-group">
      <label for="inquiry-event-description" class="required-field">Describe Your Event</label>
      <textarea
        id="inquiry-event-description"
        v-model="eventDescription"
        class="form-control"
        required
      />
    </div>

    <div class="form-group">
      <label for="inquiry-desired-amenities">List of Desired Amenities</label>
      <textarea
        id="inquiry-desired-amenities"
        v-model="desiredAmenities"
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
    givenName: '',
    familyName: '',
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
        givenName,
        familyName,
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
        givenName,
        familyName,
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
