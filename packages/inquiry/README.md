# Inquiry Integration
To integrate this package with BaseCMS MarkoJS/Vue websites, do the following:
1. Add `@endeavorb2b/base-website-inquiry` as dependency in the website's `package.json` file
2. [Import](#request-more-information-package) or [create custom](#custom-components) components & templates.
3. Update [component registration](#component-registration) for browser components.
4. Update [routing](#routing) to include the inquiry submission handling and form template.
4. [Configure](#configuration) Inquiry inside the `site/config/site.js`.

---
## Request More Information Package
The Inquiry package includes default RMI-style components and templates that can be imported into websites. These are intended to provide a baseline that can be used for all websites, but customizations are always possible. If no customizations are needed import these components as-is, or see the section on creating [custom components](#custom-components).

To register the RMI browser components, see the [RMI Component Registration](#rmi-component-registration) section.

To register the RMI routing and templates, see the [RMI Routing](#rmi-routing) section.

---
## Custom Components
The Inquiry package is fully customizable, and includes five potential customization options:
- The Inquiry Button (Vue), displayed on content pages
- The Inquiry Form (Vue), linked to by the Inquiry Button
- The Inquiry Template (Marko), a custom wrapper including the inquiry form
- The Inquiry Email (Marko), an email template sent to sales/internal contacts.
- The Inquiry Email Submission (Marko), an email template sent to the user.

### Custom Inquiry Button
If you need a custom inquiry button, you can create a component within your site's browser components:
```vue
<template>
  <a :href="target" class="btn btn-lg btn-primary">!! My Custom Button Text !!</a>
</template>

<script>
  export default {
    props: {
      contentId: {
        type: Number,
        required: true,
      },
      prefix: {
        type: String,
        default: '__inquiry',
      },
    },
    computed: {
      target() {
        return `/${this.prefix}/${this.contentId}`;
      },
    },
  };
</script>
```
Load your custom template when performing [component registration](#component-registration).

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
      async validate() {
        if (this.field1) return true;
        return false;
      },
    }
  }
</script>
```
Load your custom template when performing [component registration](#component-registration).

### Custom Inquiry Template
Create an inquiry template to customize the page wrapping your Inquiry Form component within your site's templates folder. This component is loaded using the `withContent` loader from `@base-cms/web-common` package. The GraphQL query fragment can be customized to include additional fields -- see the [Routing](#routing) section.

```marko
$ const { site } = out.global;
$ const inquiryProps = site.getAsObject('inquiry');
$ const content = getAsObject(data, 'content');

<theme-pennwell-content-layout title="Inquiry">
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
</theme-pennwell-content-layout>
```

Load your custom template when performing [Routing](#routing) configuration.

### Custom Inquiry Email
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

### Custom Inquiry Email Submission
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
## Component Registration
The Inquiry package will load your Button and Form components automatically, but must be told the component name to load. These components must also be registered into your site's Vue instance.

### RMI Component Registration
Add the components within the `site/browser/index.js` file, for example:
```js
import Browser from '@endeavorb2b/base-website-common/browser';
import RMIButton from '@endeavorb2b/base-website-inquiry/browser/rmi-button.vue';
import RMIForm from '@endeavorb2b/base-website-inquiry/browser/rmi-form.vue';

Browser.registerComponent('RMIButton', RMIButton);
Browser.registerComponent('RMIForm', RMIForm);

export default Browser;
```

### Custom Component Registration
Add the components within the `site/browser/index.js` file, for example:
```js
import Browser from '@endeavorb2b/base-website-common/browser';
import MyInquiryButton from './my-inquiry-button.vue';
import MyInquiryForm from './my-inquiry-form.vue';

Browser.registerComponent('MyInquiryButton', MyInquiryButton);
Browser.registerComponent('MyInquiryForm', MyInquiryForm);

export default Browser;
```

---
## Routing
Load the core Inquiry handler to the `site/server/routes.js` file, ensuring that Inquiry is loaded before _all_ other routes. Custom templates and/or GraphQL query fragments can be passed to the Inquiry router to utilize them. If these options are not sent, the default templates will be used.

### RMI Routing
To utilize the RMI template(s), you must first copy the Marko template from the package into your sites templates directory. The email templates do not need to be copied, but can be if additional customizations are needed.
```js
// site/server/routes/index.js
const inquiry = require('./inquiry');

module.exports = (app) => {
  // Load Inquiry routing
  inquiry(app);

  // ... other routes
};
```

```js
// site/server/routes/inquiry.js
const loadInquiry = require('@endeavorb2b/base-website-inquiry/load-from-config');
const template = require('../templates/inquiry');

module.exports = app => loadInquiry(app, { template });

```

### Custom Routing
To use a custom template(s) and/or query fragment, pass those values to the Inquiry router's loader:
```js
const loadInquiry = require('@endeavorb2b/base-website-identity-x/load-from-config');
const inquiryTemplate = require('../templates/inquiry');
const inquiryEmailTemplate = require('../templates/inquiry/email');
const inquirySubmissionTemplate = require('../templates/inquiry/submission');

const inquiryFragment = gql`
  // GQL fragment goes here
`;

module.exports = (app) => {
  // Load Inquiry before all routes.
  const inquiryConfig = {
    template: inquiryTemplate,
    queryFragment: inquiryFragment,
    email: inquiryEmailTemplate,
    emailSubmission: inquirySubmissionTemplate,
  };
  loadInquiry(app, inquiryConfig);

  // ... other routes
};
```
---
## Configuration
The following lists all Inquiry configuration options, and the details of each option follow.
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
};
```
- `enabled` (Boolean): If the Inquiry component should be used. Used on the content page to conditionally render your inquiry button component.
- `buttonComponentName` (String): The name of the button component used during [Component Registration](#component-registration).
- `contentTypes` (Array): The content types that should display the Inquiry button component, if enabled. *note: GraphQL type (whitepaper instead of Whitepaper)*.
- `directSend` (Boolean): If the Inquiry email should be sent to external (sales contacts), or just the default contact.
- `defaultContact` (Object): The name and email address of the default contact. Will be CC'd instead of To'd if `directSend` is true and sales contacts exist.
- `formCompnentName` (String): The name of the form component used during [Component Registration](#component-registration).
- `mountTo` (String): The URI path prefix for inquiry routes used during [Routing](#routing) configuration.
- `debug` (Boolean): If debug logging messages will be output regarding component and routing registration.
