# Article Body Conversion
All elements reside under the `ContentBody` root element.

Example URL: https://www.utilityproducts.com/articles/print/volume-23/issue-2/product-focus/fleet-safety/improving-fleet-safety.html

## General Rules
- All `<h1>` elements should be replaced with `<h2>`.
- All `<h2>` elements should be replaced with `<h3>`.
- All extracted, embedded images should be left-aligned, i.e. `data-embed-align="left"`

## `paraStyle_headline_deck`
- If the teaser field is _not_ already set, set to the `teaser` field. _Always_ set the value to the `mutations.Magazine.deck` field.
- Make sure the value is trimmed.
- Once extracted, remove this HTML element from the content `body`.

## `paraStyle_byline`
- Example "By Jenny Shiner". Convert the name into a `Contact` model and push the id into the content `authors` relationship.
- Once extracted, remove this HTML element from the content `body`.

## `paraStyle_body_bio`
- There can be many bio elements within the article body.
- Loop over all elements...
  - If the element contains text (or another HTML element), concanate to the contact `body` with a wrapping `<p>` element.
  - If the element has`img` element child, set as the `primaryImage` of the contact that was created from the byline.
- Once extracted, remove these HTML elements from the content `body`.

### Example
If the body contained the following html...
```html
<div id="ContentBody">
  <!-- additional html elements here... -->
  <h2 class="paraStyle_byline">By Jenny Shiner</h2>
  <!-- additional html elements here... -->
  <p class="paraStyle_body_bio">
    <strong class="charStyle_bold">The Author: </strong>
  </p>
  <p class="paraStyle_body_bio">
    <img src="//aemstatic-ww2.azureedge.net/content/dam/up/print-articles/volume-23/issue-2/1902UPpf2-a01.jpg" alt="" width="167" height="167">
  </p>
  <p class="paraStyle_body_bio">Jenny Shiner is the communications manager for GPS Insight. She graduated from Arizona State University with a bachelor’s degree in communication and is responsible for communication for all business segments that GPS Insight targets. For more information on telematics and fuel card technologies, visit www.gpsinsight.com.</p>
  <!-- additional html elements here... -->
</div>
```

A `Contact` would be created as:
```json
{
  "firstName": "Jenny",
  "lastName": "Shiner",
  "body": "<p><strong class=\"charStyle_bold\">The Author: </strong></p><p>Jenny Shiner is the communications manager for GPS Insight. She graduated from Arizona State University with a bachelor’s degree in communication and is responsible for communication for all business segments that GPS Insight targets. For more information on telematics and fuel card technologies, visit www.gpsinsight.com.</p>"
}
```

## `paraStyle_caption`
Example URL: https://www.utilityproducts.com/articles/print/volume-22/issue-9/product-focus/meters-meter-reading/engaging-proposition.html

- There are two caption elements.
- The first element contains an `img` element. This is already being converted as an embedded image.
- The second element (if present) contains the image caption. This should be extracted at set as the image `caption`.
- Once extracted, remove these HTML elements from the content `body`.

### Example
If the body contained the following html...
```html
<div id="ContentBody">
  <!-- additional html elements here... -->
  <div id="_idContainer008" class="Basic-Text-Frame">
    <p class="paraStyle_caption">
      <img src="//aemstatic-ww2.azureedge.net/content/dam/up/print-articles/volume-22/issue-9/1810UPpf2-p02.jpg" alt="">
    </p>
    <p class="paraStyle_caption">Customers of progressive utilities that provide usage date can now use smartphones and other internet-enabled devices to monitor and control their energy usage.</p>
  </div>
  <!-- additional html elements here... -->
</div>
```
The `AssetImage` model would contain...
```json
{
  "caption": "Customers of progressive utilities that provide usage date can now use smartphones and other internet-enabled devices to monitor and control their energy usage."
}
```
