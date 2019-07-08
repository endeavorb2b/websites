# Inquiry Integration
Integrate Inquiry for use with BaseCMS MarkoJS/Vue websites.

## Adding Inquiry to a Website
- Add `@endeavorb2b/base-website-inquiry` as dependency in the website's `package.json` file
- Configure Inquiry inside the `site/config/site.js` file with the following values:
```js
module.exports = {
  // ... other config options
  inquiry: {
    // Whether the service is enabled/active
    enabled: true,
    // The name of the button component to load.
    buttonComponentName: 'RMIButton',
    contentTypes: ['Product', 'Company', 'Venue', 'Supplier'],
    // Whether inquiries will be sent to sales contacts
    directSend: true,
    // The default contact. Receives all submissions
    // - CC'd if directSend and salesContacts exist
    // - TO'd in all other cases.
    defaultContact: {
      name: 'Contact Person Name',
      email: 'Contact.Person.Email@company.name',
    },
    // The name of the form browser component to load.
    formComponentName: 'RMIForm',
    // The backend URI prefix
    mountTo: '__inquiry',
    debug: process.env.NODE_ENV === 'development',
  },
}
```
- Create (or import) an inquiry button within your site's browser components:
```vue
<script>
  import RMIButton from '@endeavorb2b/base-website-inquiry/browser/rmi-button';
  export default RMIButton;
</script>
```
```vue
<!-- NEED CUSTOM TEMPLATE -->
```
- Create (or import) an inquiry form with your fields within your site's browser components:
```vue
<script>
  import RMIForm from '@endeavorb2b/base-website-inquiry/browser/rmi-form';
  export default RMIForm;
</script>
```
```vue
<template>
  <form @submit="submit" v-if="incomplete">
    // Markup for my form goes here
    <div>
      <label>
        Field 1
        <input :value="field1" />
      </label>
    </div>
    <div class="alert" v-if="error">
      {{ error }}
    </div>
    <button type="submit">Submit</button>
  </form>
  <div v-else>
    Thanks for your submission!
  </div>
</template>

<script>
  import FormMixin from '@endeavorb2b/base-website-inquiry/browser/form-mixin';

  export default {
    mixins: [ FormMixin ],
    data: () => ({
      field1: 'default-value',
    }),
    methods: {
      async validate() {
        if (this.field1) return true;
        return false;
      },
    }
  }
</script>
```
- Add your identity form component within the `site/browser/index.js` file, for example:
```js
import Browser from '@endeavorb2b/base-website-common/browser';
import MyIdentityForm from './my-identity-form';

Browser.registerComponent('MyIdentityForm', MyIdentityForm);

export default Browser;
```
- Build out user-facing inquiry page using your new component. For example:
```marko
$ const { site } = out.global;
$ const inquiryProps = site.getAsObject('inquiry');
$ const content = getAsObject(data, 'content');

<theme-pennwell-inquiry-layout title="Inquiry" for="inquiry">
  <@head>
    <endeavor-ad-gam-head />
  </@head>

  <@above-container>
    <endeavor-gam-ad-unit-define-display name="lb1" modifiers=["top-of-page"] />
  </@above-container>

  <div class="page-wrapper">
    <div class="row">
      <div class="col">
        <div class="page-wrapper__header">
          <endeavor-breadcrumbs>
            <@item>
              <endeavor-link href="/" title="Home">Home</endeavor-link>
            </@item>
            <@item>Inquiry</@item>
          </endeavor-breadcrumbs>
          <h1 class="page-wrapper__title">Inquire about ${content.name}</h1>
        </div>
        <div class="page-wrapper__body">
          <cms-browser-component name="MyInquiryForm" props=inquiryProps />
        </div>
      </div>
    </div>
  </div>
</theme-pennwell-inquiry-layout>
```
- Load the core JSON handlers to the `site/server/routes.js` file, ensuring that Inquiry is loaded before _all_ other routes. For example:
```js
const loadInquiry = require('@endeavorb2b/base-website-identity-x/load-from-config');
const contactUs = require('./contact-us');
const home = require('./home');
const loadMore = require('./load-more');
const myInquiryTemplate = require('../templates/inquiry');

module.exports = (app) => {
  // Load Inquiry before all routes.
  loadInquiry(app, myInquiryTemplate);

  // Homepage
  home(app);

  // Load More / Infinite Scroll
  loadMore(app);

  // Contact Us Page
  contactUs(app);

  // ... more routes here...
};
```
