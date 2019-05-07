<template>
  <div :class="bem('container')">
    <div :class="bem('header')">{{ title }}</div>
    <form :class="bem('contents')" @submit.prevent="verify">
      <div :class="bem('row')">
        <label :class="bem('label')" for="cuf__name">Name</label>
        <input :class="bem('field')" id="cuf__name" type="text" name="name" v-model="name" required="required" />
      </div>
      <div :class="bem('row')">
        <label :class="bem('label')" for="cuf__phone">Phone</label>
        <input :class="bem('field')" id="cuf__phone" type="text" name="phone" v-model="phone" required="required" />
      </div>
      <div :class="bem('row')">
        <label :class="bem('label')" for="cuf__email">Email</label>
        <input :class="bem('field')" id="cuf__email" type="email" name="email" v-model="email" required="required" />
      </div>
      <div :class="bem('row')">
        <label :class="bem('label')" for="cuf__comments">Comments</label>
        <textarea :class="bem('field')" id="cuf__comments" name="comments" v-model="comments" required="required" />
      </div>
      <hr>
      <div :class="bem('row')">
        <p v-if="submitted" :class="bem('text', ['success'])">Thanks! Your comments have been received.</p>
        <p v-else-if="loading" :class="bem('text', ['loading'])">Hold up, we're processing your submission...</p>
        <p v-else-if="error" :class="bem('text', ['danger'])">Oh snap! There was a problem with your submission: {{ error }}</p>
        <vue-recaptcha v-if="!submitted" ref="recaptcha" @verify="onVerify" @expired="onExpired" :sitekey="sitekey">
          <button type="submit" :class="bem('submit')" :disabled="disabled">Submit</button>
        </vue-recaptcha>
      </div>
    </form>
  </div>
</template>

<script>
import VueRecaptcha from 'vue-recaptcha';

const block = 'contact-us-form';
const submit = async (payload, instance) => {
  try {
    const res = await fetch('/contact-us', {
      method: 'post',
      body: JSON.stringify(payload),
      headers: { 'Content-Type': 'application/json' },
    });
    if (res.ok) { // res.status >= 200 && res.status < 300
      instance.submitted = true;
      return res;
    }
    throw new Error(res.statusText);
  } catch (e) {
    instance.error = e;
  } finally {
    instance.loading = false;
  }
};

export default {
  props: {
    title: {
      type: String,
      default: 'Drop us a line!',
    },
    sitekey: {
      type: String,
      default: '6LeZOaIUAAAAANDsX4PCYCYQeYfqdoabuev5chYk',
    },
  },
  data: () => ({
    name: null,
    phone: null,
    email: null,
    comments: null,
    error: null,
    loading: false,
    submitted: false,
  }),
  components: { VueRecaptcha },
  methods: {
    bem: (name, mod = []) => [block, `${block}__${name}`, ...mod.map(m => `${block}__${name}--${m}`)],
    onExpired() {
      this.error = 'Timed out validating your submission.';
      this.loading = false;
    },
    onVerify(token) {
      this.loading = true;
      if (token) {
        submit({ ...this._data, token }, this);
      } else {
        this.error = 'Unable to submit your request. Please try again!';
        this.loading = false;
      }
    },
  },
  computed: {
    disabled: function() {
      return !(this.name && this.phone && this.email && this.comments && !this.loading);
    },
  },
};
</script>
