# BaseCMS Websites for Endeavor Business Media
This monorepo contains the codebase for websites managed by Endeavor Business Media. All sites within this repository utilize the [@base-cms/base-cms](https://github.com/base-cms/base-cms) packages, most notably the `marko-web` and `web-cli`.

### Table of Contents
- [Overview](#overview)
- [Getting Started](#getting-started)
  - [Folder Structure](#folder-structure)
  - [Creating a new site](#creating-a-new-site)
  - [Working with an existing site](#working-with-an-existing-site)
  - [Themeing](#themeing)
  - [Common components](#common-components)
- [Common Tasks](#common-tasks)
- [Troubleshooting](#troubleshooting)

----
## Overview
Each site managed by Endeavor Business Media resides within the `sites/` directory of this repository. Each site is versioned independently, and contains all necessary code (or references to required services) to build, develop, and run the site.

### Requirements
This project has a hard dependency on [Docker Compose](https://docs.docker.com/compose/overview/) (minmum Docker version 18.06.0). The best way to get Docker is to install [Docker Desktop](https://www.docker.com/products/docker-desktop) -- [see this](https://github.com/cygnusb2b/base-platform/wiki/Docker-&-Kitematic) for a high level overview of using Docker and Compose for development.

Docker Compose provides a homogenous build and development environment across all platforms, meaning code and dependencies run the same developing on Linux, MacOS, and Windows, and match the same environment used in production.

Additionally, we recommend the following tools/utilities:
- [VSCode](https://code.visualstudio.com/) - a modular IDE
- [Tower](https://www.git-tower.com) - a Git GUI client
- [Robo 3T](https://robomongo.org) - a MongoDB GUI
- [Insomnia](https://insomnia.rest) - a REST client
- [GraphQL Playground](https://github.com/prisma/graphql-playground) - a GraphQL client

### Additional Resources
- [MarkoJS](https://markojs.com/docs/getting-started/) - Server-side templates are rendered using the Marko templating engine
- [VueJS](https://vuejs.org) - Client-side component templating
- [ExpressJS](https://expressjs.com) - The backend HTTP server handling routing for requests
- [Lerna](https://github.com/lerna/lerna) - Used for versioning and managing of sub-packages within the repository
- [Bootstrap v4](https://getbootstrap.com) - A subset of BSv4 is used for the styling within the Pennwell theme, and custom component development should use available mixins and variables -- See [Common components](#common-components)

### Contributing
- All contributions must be submitted as pull requests to this repository, and reviewed by a repository owner before being merged.
- All status checks must pass, and all commits must have an approving review.
- All package versioning must be done via the [@lerna/lerna](https://github.com/lerna/lerna) script included at `./scripts/lerna.sh`.

#### Style Guide
- Marko
  - All Marko templating should be done using the standard syntax (`<h1>Hello World</h1>`) instead of concise (`h1 -- Hello World`) syntax.
  - All arguments should be dasherized and use double quotes `<component argument-name="argument-value" />`
  - Components without an explicit inner body should be self closing (`<component />` instead of `<component> ... </component>`)
  - Components _should_ be defined as reusable components (under `packages/common` or `packages/themes`), if re-used.
    - Certain components or templates cannot be reused due to needing custom ad or content definitions from outside of their scope (for example, the website-section site template vs the website-section pennwell theme layout).
- VueJS
  - Vue components should use the concise syntax available for binding properties and methods:
    - Use `<div :value="prop" />` instead of `<div v-bind:value="prop" />`.
    - Use `<div @click="handler" />` instead of `<div v-on:click="handler" />`.
  - Direct jQuery access should be avoided if at all possible. Explore alternative solutions using Vue architecture or vanilla Javascript before bringing in jQuery to implement a feature -- especially true of any jQuery plugins.
- Express
  - Middleware should be used in favor of individual route definitions
- General Javascript
  - All JS filenames should be dasherized
  - All project linting rules should be followed (see ESLint at project root).
  - While all ES6 code will be transpiled for the browser accessing it at run-time, beware of any potential deprecations that are not included in the transpilation.
    - Utilize [CanIUse](https://caniuse.com) to check targeted browser support for native JS and CSS methods.
    - If an additional polyfill is required, make sure the [loader](https://github.com/base-cms/base-cms/blob/master/packages/marko-web/src/components/document/index.marko#L11) is updated to reflect this.
- General
  - All files should have a new line at the end [VSCode](https://stackoverflow.com/a/44704969/2195565)
  - Ensure trailing whitespace is trimmed from each line [VSCode](https://stackoverflow.com/a/30884298/2195565)
  - All files should be indented with two spaces [VSCode](https://stackoverflow.com/a/38556923/2195565)


### Deployments
- Deployments to production infrastructure are performed via [Travis CI](https://travis-ci.org/endeavorb2b/websites/builds), and occur only when a release is tagged.
- Each site is versioned independently, and the build process results in an individual docker container, hosted on [Docker Hub](https://hub,.docker.com/u/endeavorb2b).
  - If there are no changes in a site, a version will not be published, nor will the site be deployed
- The deployment configuration is located in [.travis.yml](.travis.yml), and specifies the site directory and [infrastructure stack](https://rancher2.as3.io/c/c-xcz9s/projects-namespaces).
- This deployment script utilizes the site package.json version (provided by lerna on tag) and the DockerHub API to determine if a build should happen.
- If a build is triggered, the deployment script deploys the new Docker image to the production infrastructure using the [@endeavorb2b/rancher2cli](https://github.com/endeavorb2b/rancher2cli) CLI.

----
## Getting Started
To get started, first execute the `Yarn` utility script from the root of the project. This will install all dependencies and get the internal Docker Compose environment ready to work:
```bash
user@domain: ~/Source/endeavorb2b/websites $
./scripts/yarn.sh
```

### Environment Variables
Docker Compose also supports overriding environment variables via a `.env` file placed at the root of the project. To override configuration within the Compose projects, you can specify any of the following variables in a `.env` file (replacing the values where appropriate):
```bash
# If developing a feature in @base-cms/graphql-server, use this local server instead of a production or staging URL:
GRAPHQL_URI=http://host.docker.internal:10002

# For additional debugging, enable New Relic and set a license key
NEW_RELIC_ENABLED=true
NEW_RELIC_LICENSE_KEY=<MY-NR-LICENSE-KEY>

# For features utilizing ReCAPTCHA, set the key
RECAPTCHA_SECRET_KEY=<MY-RECAPTCHA-SECRET-KEY>

# For features utilizing SendGrid for emails, set the API key:
SENDGRID_API_KEY=<MY-SENDGRID-API-KEY>
```

### Folder Structure
The files within this repository are structured as follows:
```
/
  ...               # Global files, such as configuration
  scripts/          # Global scripts and utilities
  packages/         # Packages that are utilized by all sites
    package-a/      #
  sites/            #
    site-a/         # Files specific to the site in question
      browser/      #   Front-end Vue components
      config/       #   Configuration files
      server/       #
        public/     #   Static files (images/etc)
        routes/     #   Express backend routing
        styles/     #   SCSS overrides to core themes
        templates/  #   Marko templates
```

This project uses Yarn's Workspace feature to load packages and sites within the monorepo from the `packages` and `sites` directory, respectively.

Packages should use dasherized folder names (`my-package` rather than `myPackage` or `MyPackage`.)

Sites should match the lowercase domain name of the site exactly, excluding the GTLD (.com/etc) or any subdomain (`www.my-NEW-site.com.jp` should be added as `my-new-site`.)

### Creating a new site
To add a new site to this repository, you first need to know the Base Platform infrastructure stack. You can find this in the relevant [groups](https://github.com/cygnusb2b/base-platform/blob/master/app/config/platform/groups/as3.yml) definition under the `infrastructure_group` key.

To create your site, execute the websites CLI within this repository, supplying the folder name and infrastructure stack:
```bash
docker-compose run cli create [folder-name] [infrastructure-stack]
```
This utility will guide you through the initial configuration to add your site and set up the build environment to allow you to run it. Specifically, the utility does the following with your supplied input:
- Creates the `/sites/<folder-name>` directory via the [@base-cms/web-cli](https://github.com/base-cms/base-cms/tree/master/packages/web-cli) package
  - describe what it does
- Ensures that all templated files are filled out with your configuration
  - describe them (package.json, config/site.js, etc)
- Adds your site to the build environment in [docker-compose.yml](docker-compose.yml)
  - Ensures that the required environment variables are set to the infrastructure stack you supplied
  - Increments the ports for the application and it's live-reload function
- Adds your site to the deployment queue in [.travis.yml](.travis.yml)

#### Copy Method
Alternatively, the easiest way to replicate an existing site is to copy the site directory (recursively) to the new site name, and update the following files:
- `/sites/my-new-site/package.json`
- `/sites/my-new-site/config/core.js`
- `/sites/my-new-site/config/site.js`
- `/sites/my-new-site/server/styles/_variables.scss`

```bash
cp -R sites/site-to-copy sites/my-new-site
```
```diff
# /sites/my-new-site/package.json
{
-  "name": "@endeavorb2b/site-to-copy",
+  "name": "@endeavorb2b/my-new-site",
```

```diff
# /sites/my-new-site/config/core.js
module.exports = {
-  siteName: 'Site to Copy',
+  siteName: 'My New Site',
```

When copying sites, ensure that unused components, templates, and routes are not copied inadvertently.

#### Additional Considerations
While the web CLI automates most of the bootstrapping process, manual intervention is required in a couple of places:
- The [.travis.yml](.travis.yml) should be alpha sorted by Account and Site name. Make sure the site is in the correct spot within the file before committing.
- The CLI utility does not make any assumptions about themeing. You must manually include the theme you would like to use. See [Themeing](#themeing) for more information.
- Similarly, the utility makes no assumptions about reusable components or common routing/templates. If you want common components or routes from an existing site, you must add the relevant templates and/or Express routing to make them work. See [Common Components](#common-components) for more information.

### Working with an existing site

To start working with a existing site (after performing the `Yarn` script), execute the Docker Compose up command:
```bash
docker-compose up <folder-name>
```
Once the command is complete, the URI for local access and the backend GraphQL connection will be listed:
```bash
[14:41:35] My New Site website ready on http://0.0.0.0:12155 (API: https://aerilon.graphql.base-cms.io)
 ```

 You can now access this URI in your browser to view the site. When changes are made to the site's files, your browser will ([usually](#troubleshooting)) refresh automatically.

### Themeing

#### Creating a theme
To create a theme, add a new package within the `/packages/themes` folder. Define any components utilizing the `marko.json` file, and any CSS under the `styles` directory.

#### Applying a theme
To apply a theme to a site, you must update the sites `server/styles/index.scss` file to import the theme CSS.
You must also update any references to existing theme components to point to the new theme, and ensure that these components exist in the new theme.

### Common components
The core design principle of this repository is to have a unified set of tooling and components to promote rapid development. By designing features as individual components, they can be easily styled and themed to match a site's color and/or font scheme, and can be applied quickly to multiple sites without requiring inordinate amounts of customization.

#### Browser components
For features that rely on or require interaction with the user's browser (such as an advertisement, event listener/trigger, or a form), a Vue component should be created.

A Vue component can be created by adding a new `.vue` file within the `/packages/common/browser` or theme folder:
```js
@todo example
```

In order for the component to be usable, it must be added to the relevant `index.js` file in the same folder:
```diff
 import Browser from '@base-cms/marko-web/browser';
 ...
+import MyVueComponent from './my-vue-component.vue';
 ...
+Browser.registerComponent('MyVueComponent', MyVueComponent);
 ...
 export default Browser;
```

The Vue component can be added to the page by calling the
```
$ props = { prop1: "value" };
<cms-browser-component name="MyVueComponent" props=props />
```

#### Server-side components
Marko components can be created by adding a .marko file under the `/packages/common` or theme folder:

In order for the component to be usable, it must be added to the relevant `marko.json` file in the same folder:
```diff
{
  "tags": {
-    "existing-component: { ... }
+    "existing-component: { ... },
+    "my-new-component": {
+      "template": "./my-new-component"
+    }
  }
}
 ```
If creating a set of related components, add a taglib import at a higher level for a new marko.json file containing your component definition
```diff
# ../marko.json
{
  "taglib-imports": [
-   "./existing-components/marko.json"
+    "./existing-components/marko.json",
+    "./my-new-component/marko.json"
  ]
}
```

**Note**: Ensure that the modifications to these files include valid JSON. Always ensure lines are alpha-sorted. When adding to the common package, ensure the component is prefixed with `endeavor-`. When adding to a theme, ensure it is prefixed with `theme-<theme-name>-`.

The Marko component can be added to a template by inserting a tag made of the components name as defined in your marko.json file:
```marko
<div>
  <my-new-component prop1="value" />
</div>
```

#### Layouts
A common use-case for shared components is to create a `layout` component that can be reused by multiple templates to create a common layout. For an example, see the [website-section layout](packages/themes/pennwell/components/layouts/website-section.marko) in the PennWell theme. This layout component is used by each sites `website-section` template and performs any duplicative actions, such as setting the page title or metadata, without needing to be done in every sites template.

#### Non-shared components
If a Vue or Marko component is needed for a site, but will never be re-used on other sites, create the component within the `/sites/$SITE/server/components` or `/sites/$SITE/browser/` folders using the same approach as outlined above.

If there are no existing Marko templates for the site, add a `marko.json` at the root of the site defining the initial `marko.json` file(s) to load (The `taglib-id` should match the name of the package as defined in the sites `package.json`):
```json
{
  "taglib-id": "@endeavorb2b/my-site",
  "taglib-imports": [
    "./components/marko.json"
  ]
}
```

----
## Common Tasks
The following are examples of common tasks when developing within the websites framework.

### Adding a custom page
To create a custom page, you will need to add both server-side routing and a Marko template.

To add a route, add an entry into the sites Express routes file `/sites/$SITE/server/routes/index.js`. In general, you should add a new routing middleware for each type of route needed (for examples, see the content or website-section routes in this folder).

An example route middleware for a static page `/my-static-page` could look like the following:
```js
// /sites/my-site/server/routes/my-static-pages.js
const template = require('../templates/my-static-page');

module.exports = (app) => {
  app.get('/my-static-page', (_, res) => { res.marko(template); });
};

```

Your custom template should be located within the `/sites/$SITE/server/templates/` folder, and is referenced on line 2 of the above route:
```marko
$ const { site } = out.global;

<theme-pennwell-document>
  <@head>
    <cms-page-title value="Search" />
  </@head>
  <div class="container-fluid-max">
    <cms-page-container for="static">

      <!-- Static page content goes here! -->

    </cms-page-container>
  </div>
  <@footer>
    <theme-pennwell-site-footer />
  </@footer>
</theme-pennwell-document>
```

### Changing a logo
The logos utilized with the [Pennwell](packages/themes/pennwell) theme come from the `/sites/$SITE/config/site.js` file under the `logos` key. Update the `navbar` and/or `footer` sub-keys with the new logo URL and/or dimensions.

### Changing colors
Site colors can be customized by modifying the `/sites/$SITE/server/styles/_variables.scss`.

When adding a site with black text in the logo, it is generally recommended to modify the site colors to present a white header by setting the `$theme-site-nav-secondary-bg-color` and `$theme-site-secondary-type` variables:
```scss
$primary: #005bb1 !default;
$theme-site-nav-primary-bg-color: #005bb1;
$theme-site-nav-secondary-bg-color: #fff;
$theme-site-nav-secondary-type: light;
```

### Changing secondary nav breakpoints
The secondary nav usually needs custom breakpoints to hide itself when a small enough screen resolution is reached that the display needs to be adjusted.

This can be accomplished by customizing the `$theme-site-nav-secondary-breakpoints` within the sites `server/styles/_variables.scss`:

```scss
$theme-site-nav-secondary-breakpoints: (
  hide: 920px
);
```

### Changing home page layout
The home page utilizes the theme's [website-section layout](packages/themes/pennwell/components/layouts/website-section.marko). This layout supports the use of `<@above-container> ... </@above-container>` and `<@below-container> ...</@below-container>` tags to put custom content above or below the page container -- for example to add breadcrumbs or a custom page header.

Most pages should utilize the `endeavor-content-block-page-header` and `endeavor-content-block-page-header` common components, but these are generally _not_ used on the homepage.

The homepage content is layed out using the Bootstrap Grid system for rows and columns. You can arrange (Tetris-style) common or custom components in any order on the home page by utilizing the rows and columns. For example, you could lay out a homepage like the following

<table>
  <tr><th>Left</th><th>Center</th><th>Right</th></tr>
  <tr><td colspan=3>Hero Block</td></tr>
  <tr><td colspan=3>Ad</td></tr>
  <tr><td>Section 1</td><td>Ad</td><td>Section 2</td></tr>
  <tr><td>Events</td><td>Section 3</td><td>Section 4</td></tr>
</table>

```marko
<theme-pennwell-website-section-layout section=section>
  <endeavor-content-query-hero section-id=section.id limit=5 />
  <endeavor-gam-ad-unit-define-display name="LB1" />
  <div class="row">
    <div class="col-lg-4 mb-block">
      <endeavor-content-query-section-list limit=3 section-alias="section-1" header={ title: "Section 1" } />
    </div>
    <div class="col-lg-4 ad-rail">
      <endeavor-gam-ad-unit-define-display name="rail1" />
      <endeavor-gam-ad-unit-define-display name="rail2" />
    </div>
    <div class="col-lg-4 mb-block">
      <endeavor-content-query-section-list limit=3 section-alias="section-2" header={ title: "Section 2" } />
    </div>
  </div>
  <div class="row">
    <div class="col-lg-4 mb-block">
      <endeavor-published-content-query-list
        query={ requiresImage: false, contentTypes: ["Event"], limit: 3 }
        header={ title: "Upcoming Events", href: "/events" }
      />
    </div>
    <div class="col-lg-4 mb-block">
      <endeavor-content-query-section-list limit=3 section-alias="section-3" header={ title: "Section 3" } />
    </div>
    <div class="col-lg-4 mb-block">
      <endeavor-content-query-section-list limit=3 section-alias="section-4" header={ title: "Section 4" } />
    </div>
  </div>
</theme-pennwell-website-section-layout>
```

----
## Troubleshooting
- My site isn't refreshing automatically when I make changes
  - The site will only refresh when changes are made to its own files -- if you're modifying a theme or package file, make sure to save a file within the site.
  - Ensure the file you are saving belongs to the site you loaded in your browser.
  - When SCSS or Vue compilation errors happen, the site must be terminated and restarted once the error is fixed -- see below.
  - Sometimes certain files are no longer considered when watching for changes. If this happens, interrupt the process (CMD/Ctrl+C), execute `docker-compose down`, and `docker-compose up <folder-name>` again.
- Docker Compose up throws a `No such service` error
  - Check your spelling -- the service name argument must match the value within the [docker-compose.yml](docker-compose.yml) service definition for the site. Ensure that this definition also matches the folder name under the `sites` directory
- Docker Compose loads the wrong site
  - Check the `package.json` and `config/core.js` and ensure the correct site is defined.
