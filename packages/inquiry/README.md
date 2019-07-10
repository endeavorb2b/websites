# Inquiry Integration
To integrate this package with BaseCMS MarkoJS/Vue websites, do the following:
- Add `@endeavorb2b/base-website-inquiry` as dependency in the website's `package.json` file
  - If needed, [create a custom](#custom-components) Inquiry Form component or email templates.
- Update [component registration](#component-registration) for browser components.
- Include the form on relevant [content page templates](#content-page-inclusion).
- Update [routing](#routing) to include the inquiry submission handler (and optional custom email templates).
- [Configure](#configuration) Inquiry inside the `site/config/site.js`.

---
## Request More Information Package
The Inquiry package includes default RMI-style components and templates that can be imported into websites. These are intended to provide a baseline that can be used for all websites, but customizations are always possible. If no customizations are needed import these components as-is, or see the section on creating [custom components](#custom-components).

To register the RMI browser components, see the [RMI Component Registration](#rmi-component-registration) section.

To register the RMI routing and templates, see the [RMI Routing](#rmi-routing) section.

---
## Component Registration
In order to show the inquiry form, you must register the component and include it in the [content page template](#content-template).

### RMI Component Registration
Add the components within the `site/browser/index.js` file, for example:
```js
import Browser from '@endeavorb2b/base-website-common/browser';
import inquiryLoader from '@endeavorb2b/base-website-inquiry/browser';

inquiryLoader(Browser);

export default Browser;
```

### Custom Component Registration
Add the components within the `site/browser/index.js` file, for example:
```js
import Browser from '@endeavorb2b/base-website-common/browser';
import inquiryLoader from '@endeavorb2b/base-website-inquiry/browser';
import MyInquiryForm from './my-inquiry-form.vue';

inquiryLoader(Browser, { component: MyInquiryForm });

export default Browser;
```
---
## Content Page Inclusion
The inquiry form should be added to the relevant content page template, for example in `site/server/templates/content/index.marko`:
```marko
$ // Only show the inquiry form on products and companies
$ const showInquiry = site.get('inquiry.enabled') && ['product', 'company'].includes(content.type);
<endeavor-content-block-page-body content=content display-primary-image=displayPrimaryImage />
<if(showInquiry)>
  <endeavor-content-block-inquiry-form content=content />
</if>
```
Additionally, the `content-block-page-body` component supports a `show-inquiry-button` property to include a call out button linking to the form.
```marko
<endeavor-content-block-page-body
  content=content
  display-primary-image=displayPrimaryImage
  show-inquiry-button=showInquiry
/>
```
---
## Custom Components
The Inquiry package is fully customizable, and includes three potential customization options:
- The Inquiry Form (Vue), which can be included on content pages.
- The Inquiry Email Notification (Marko), an email template sent to sales/internal contacts.
- The Inquiry Email Confirmation (Marko), an email template sent to the user.

### Custom Inquiry Form
Create an inquiry form if needed) with your fields within your site's browser components:
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
      async submit() {
        const payload = {
          field1: this.field1,
        };
        await this.$submit(payload);
      },
    }
  }
</script>
```
Load your custom template when performing [component registration](#component-registration).

### Custom Inquiry Email Notification
The notification email marko template can be customized.
```marko
$ const {
  content,
  subject,
  addresses,
  domain,
  payload,
} = input;
<!doctype html>
<html>
  <head>
    <title>${subject}</title>
  </head>
  <body>
    <pre>${JSON.stringify(content, null, 2)}</pre>
    <pre>${JSON.stringify(addresses, null, 2)}</pre>
    <pre>${JSON.stringify(payload, null, 2)}</pre>
  </body>
</html>
```

Load your custom template when performing [Routing](#routing) configuration.

### Custom Inquiry Email Confirmation
Similarly, the thank you email marko template can be customized:
```marko
$ const {
  content,
  subject,
  addresses,
} = input;
<!doctype html>
<html>
  <head>
    <title>${subject}</title>
  </head>
  <body>
    <pre>${JSON.stringify(content, null, 2)}</pre>
    <pre>${JSON.stringify(addresses, null, 2)}</pre>
  </body>
</html>
```
Load your custom template when performing [Routing](#routing) configuration.

---
## Routing
Load the core Inquiry handler to the `site/server/routes.js` file, ensuring that Inquiry is loaded before _all_ other routes. Custom templates and/or GraphQL query fragments can be passed to the Inquiry router to utilize them. If these options are not sent, the default templates will be used.

### RMI Routing
To utilize the RMI template(s), you must first copy the Marko template from the package into your sites templates directory. The email templates do not need to be copied, but can be if additional customizations are needed.
```js
// site/server/routes/index.js
const loadInquiry = require('@endeavorb2b/base-website-inquiry/load-from-config');

module.exports = (app) => {
  // Load Inquiry before all routes.
  loadInquiry(app);

  // ... other routes
};
```

### Custom Routing
To use a custom template(s) and/or query fragment, pass those values to the Inquiry router's loader:
```js
const loadInquiry = require('@endeavorb2b/base-website-identity-x/load-from-config');
const notificationTemplate = require('../templates/inquiry/notification');
const confirmationTemplate = require('../templates/inquiry/confirmation');

const queryFragment = gql`
  // GQL fragment goes here
`;

module.exports = (app) => {
  // Load Inquiry before all routes.
  loadInquiry(app, { queryFragment, notificationTemplate, confirmationTemplate });

  // ... other routes
};
```
---
## Configuration
A minimal configuration consists of the `enabled`, `sendTo`, and `sendFrom` properties:
```js
module.exports = {
  // ...other config options
  inquiry: {
    enabled: true,
    sendFrom: 'My Website <no-reply@sub.domain.tld>',
    sendTo: 'Jane Smith <jane@sub.domain.tld>',
  },
}
```
The following lists all Inquiry configuration options, and the details of each option follow.
```js
module.exports = {
  // ... other config options
  inquiry: {
    // Whether the service is enabled/active
    enabled: true,
    // Whether inquiries will be sent to sales contacts
    directSend: true,
    // The default contact. Receives all submissions
    // - CC'd if directSend and salesContacts exist
    // - TO'd in all other cases.
    sendTo: 'Contact Person <contact.person@company.name>',
    // The address the inquiry notifications will be sent from
    sendFrom: 'no-reply@company.name',
    // The address that will receive a copy of all notifications
    sendBcc: 'emailactivity@company.name',
    // The support email address
    supportEmail: 'support@company.name',
    // The backend URI prefix
    mountTo: '__inquiry',
    // If debug information should be printed to the console
    debug: process.env.NODE_ENV === 'development',
  },
};
```
- `enabled` (Boolean): If the Inquiry component should be used. Used on the content page to conditionally render your inquiry button component.
- `directSend` (Boolean): If the Inquiry email should be sent to external (sales contacts), or just the default contact.
- `sendFrom` (Email[]): The address that emails will be sent from.
- `sendTo` (Email[]): The address of the default contact.
  - If `directSend: true` and sales contacts exist, will be CC'd instead of TO'd.
- `supportEmail` (String): The support email address, included in notification footer if present.
- `logo` (URI): The site logo, included in the header if present.
- `mountTo` (String): The URI path prefix for inquiry routes used during [Routing](#routing) configuration.
- `debug` (Boolean): If debug logging messages will be output regarding component and routing registration.

*Note*: The `Email` psuedo-type can support string-formatted email addresses, objects containing `name` and/or `email` properties, or arrays of either. For all supported inputs, see the @sendgrid/mail documentation. A few examples follow:
- `email@domain.tld`
- `email1@domain.tld, email2@domain.tld`
- `Jane Smith <jane@domain.tld>`
- `Jane Smith <jane@domain.tld>, john@domain.tld`
- `['jane@domain.tld', 'john@domain.tld']`
- `[{ name: 'Jane Smith', email: 'jane@domain.tld' }]`
