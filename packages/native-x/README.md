# NativeX Integration
Integrate NativeX for use with BaseCMS Marko websites.

## Adding NativeX to a Website
- Add `@endeavorb2b/base-website-native-x` as dependency in the website's `package.json` file
- Configure NativeX inside the `site/config/site.js` file with the following values:
```js
module.exports = {
  // ... other config options
  nativeX: {
    // Whether the service is enabled/active
    enabled: true,
    // The NativeX serving/tracking URI
    uri: 'https://some-account.native-x.io',
    // Placement config, keyed by section alias and then placement name.
    // Ultimately resolves to a placement ID.
    placements: {
      // This will be used when a placement by alias cannot be found.
      default: {
        name1: { id: 'xxxx' },
        name2: { id: 'yyyy' },
      },
      'some-alias': {
        name1: { id: 'zzzz' },
        name2: { id: 'aaaa' },
      },
    },
  },
};
```
- Add the `<native-x-site-init />` component to the `<head>` tag of all templates/layouts that will serve NativeX ads. This component will use the `nativeX` config values (see above) to initialize the tracking script.
```marko
<!-- Your marko template -->
<html>
  <head>
    <native-x-site-init />
  </head>
</html>
```
- Fetch NativeX campaign (or fallback) data and render it using the `<native-x-site-render>` component.
```marko
$ // the `when` prop determines when NativeX data should be fetched
$ const condition = true;
$ // image options can be sent to determine how NativeX should render images
$ const imageOptions = {};
<native-x-site-render
  when=(condition === true)
  name="name1"
  aliases=["some-alias"]
  opts={ image: imageOptions }
>
  <@when-found|{ containerAttrs, linkAttrs, campaign }|>
    <!-- Render when an ad campaign is found -->
    <!-- Make sure to apply the `containerAttrs` to the wrapping element (for view tracking) -->
    <!-- Make sure to apply the `linkAttrs` to any outgoing link you wish to track (for click tracking) -->
    <!-- The `campaign` will already be converted to a standard content GraphQL object -->
    <div ...containerAttrs>
      <a ...linkAttrs href=campaign.canonicalPath>
        <p>{{campaign.shortName}}</p>
      </a>
    </div>
  </@when-found>

  <@on-fallback|{ containerAttrs, linkAttrs }|>
    <!-- Render when no campaign was found, but fallback tracking data is available -->
    <!-- Render your content object like normal, but include the container and link attrs -->
    <my-content-item attrs=containerAttrs link-attrs=linkAttrs />
  </@on-fallback>

  <!-- Finally, render the content object like normal, but ignore attribute wrapping -->
  <!-- This is rendered when either NativeX is disabled, the `when` condition was not met, or no placement ID could be found for the provied `name` -->
  <my-content-item />
</native-x-site-render>
```
