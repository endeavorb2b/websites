<template>
  <form @submit.prevent="submit" v-if="incomplete">
    <div class="form-group">
      <label for="firstName">First Name</label>
      <input type="text" class="form-control" id="firstName" v-model="firstName" required />
    </div>
    <div class="form-group">
      <label for="lastName">Last Name</label>
      <input type="text" class="form-control" id="lastName" v-model="lastName" required />
    </div>
    <div class="form-group">
      <label for="email">Email address</label>
      <input type="email" class="form-control" id="email" v-model="email" required />
    </div>
    <div class="form-group">
      <label for="phone">Phone Number</label>
      <input type="text" class="form-control" id="phone" v-model="phone" required />
    </div>
    <div class="form-group">
      <label for="company">Company Name</label>
      <input type="text" class="form-control" id="company" v-model="company" />
    </div>
    <div class="form-group">
      <label for="jobTitle">Job Title</label>
      <input type="text" class="form-control" id="jobTitle" v-model="jobTitle" required />
    </div>
    <div class="form-group">
      <label for="country">Country</label>
      <input type="country" class="form-control " id="country" v-model="country" required />
    </div>
    <div class="form-group">
      <label for="postalCode">ZIP/Postal Code</label>
      <input type="text" class="form-control" id="postalCode" v-model="postalCode" />
    </div>

    <div class="form-group">
      <label for="eventType">Event Type</label>
      <select class="form-control" id="eventType" v-model="eventType" required>
        <option disabled value="">Please select...</option>
        <option v-for="eventType in eventTypes" :key="eventType">{{ eventType }}</option>
      </select>
    </div>

    <div class="form-group">
      <label for="numberOfGuests">Number of Guest(s)</label>
      <textarea type="numberOfGuests" class="form-control" id="numberOfGuests" v-model="numberOfGuests" />
    </div>

    <div class="form-group">
      <label for="eventDate">Event Date</label>
      <textarea type="eventDate" class="form-control" id="eventDate" v-model="eventDate" />
    </div>

    <div class="form-group">
      <label for="eventDescription">Describe Your Event</label>
      <textarea type="eventDescription" class="form-control" id="eventDescription" v-model="eventDescription" required />
    </div>

    <div class="form-group">
      <label for="desiredAmenities">List of Desired Amenities</label>
      <textarea type="desiredAmenities" class="form-control" id="desiredAmenities" v-model="desiredAmenities" />
    </div>

    <pre class="alert alert-danger text-danger" v-if="error">An error occurred: {{ error }}</pre>
    <button type="submit" class="btn btn-lg btn-primary" :disabled="loading">Submit</button>
  </form>
  <div v-else>
    Thanks for your inquiry! We'll reach out shortly.
  </div>
</template>

<script>
  import FormMixin from '@endeavorb2b/base-website-inquiry/browser/form-mixin';

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
    }
  }
</script>
