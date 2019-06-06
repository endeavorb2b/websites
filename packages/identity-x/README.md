# IdentityX Integration
Integrate IdentityX for use with BaseCMS MarkoJS/Vue websites.

## Adding IdentityX to a Website
- Add `@endeavorb2b/base-website-identity-x` as dependency in the website's `package.json` file
- Configure IdentityX inside the `site/config/site.js` file with the following values:
```js
module.exports = {
  // ... other config options
  identityX: {
    // Whether the service is enabled/active
    enabled: true,
    // The IdentityX application ID to use for this website
    appId: '[your-app-id-here]',
    // The IdentityX GraphQL API uri
    uri: 'https://identity-x.base-cms.io/graphql', // or use an env variable
    // The mount point for backend JSON handlers
    // This is optional. If left blank will automatically mount to `/__idx`
    mountTo: '/__idx',
    // Whether debug messages should be logged to the console
    debug: process.env.NODE_ENV === 'development',
  },
}
```
- Load the browser components inside the `site/browser/index.js` file, for example:
```js
import Browser from '@endeavorb2b/base-website-common/browser';
import identityX from '@endeavorb2b/base-website-identity-x/browser';

identityX(Browser);

export default Browser;
```
- Load the core JSON handlers to the `site/server/routes.js` file, ensuring that IdentityX is loaded before _all_ other routes. For example:
```js
const loadIdentityX = require('@endeavorb2b/base-website-identity-x/load-from-config');
const contactUs = require('./contact-us');
const home = require('./home');
const loadMore = require('./load-more');

module.exports = (app) => {
  // Load IdentityX before all routes.
  loadIdentityX(app);

  // Homepage
  home(app);

  // Load More / Infinite Scroll
  loadMore(app);

  // Contact Us Page
  contactUs(app);

  // ... more routes here...
};
```
- Build out user-facing login/authenticate/register (etc) pages using the IdentityX browser components. For example, a login page:
```marko
$ const { config } = out.global;

<theme-pennwell-user-layout title="Login" for="login">
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
            <@item>Login</@item>
          </endeavor-breadcrumbs>
          <h1 class="page-wrapper__title">Login to ${config.siteName()}</h1>
        </div>
        <div class="page-wrapper__body">
          <cms-browser-component name="IdentityLoginForm" />
        </div>
      </div>
    </div>
  </div>

</theme-pennwell-user-layout>
```
