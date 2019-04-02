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
  "name": "Jenny Shiner",
  "firstName": "Jenny",
  "lastName": "Shiner",
  "body": "<p><strong class=\"charStyle_bold\">The Author: </strong></p><p>Jenny Shiner is the communications manager for GPS Insight. She graduated from Arizona State University with a bachelor’s degree in communication and is responsible for communication for all business segments that GPS Insight targets. For more information on telematics and fuel card technologies, visit www.gpsinsight.com.</p>"
}
```

Above example source data:
```json
{
  "guid" : "/content/up/en/articles/print/volume-23/issue-2/product-focus/fleet-safety/improving-fleet-safety",
  "created" : "Sun, 24 Feb 2019 17:40:49 GMT-06:00",
  "lastModified" : "Sun, 24 Feb 2019 18:18:09 GMT-06:00",
  "pubDate" : "Fri, 01 Feb 2019 17:41:00 GMT-06:00",
  "title" : "Improving Fleet Safety",
  "description" : "Telematics provides the tools required to help businesses tackle their most significant business challenges, like improving driver safety fleetwide.",
  "content" : "<div>\n\t\t\t<h4 class=\"paraStyle_headline_deck\">Put Drivers in Safe Hands with Telematics</h4>\n\t\t\t<h2 class=\"paraStyle_byline\">By Jenny Shiner</h2>\n\t\t</div>\n\t\t<div>\n\t\t\t<p class=\"paraStyle_body_first\"><span class=\"charStyle_dropcap\">T</span>elematics is often regarded as a technology used to gather current vehicle and equipment locations, but the benefits go far beyond just location updates for utility businesses. Telematics provides the tools required to help businesses tackle their most significant business challenges, like improving driver safety fleetwide. </p>\n\t\t\t<p class=\"paraStyle_body\">Crashes on the job have far-reaching financial and psychological effects on employees, their coworkers and families, and their employers. To help reduce risk for their mobile workforces, utility businesses are turning to telematics to improve fleet safety by using the information to improve driver policies, monitor driver behavior, and maintain safer vehicles. </p>\n\t\t\t<div id=\"_idContainer001\" class=\"Basic-Text-Frame\">\n\t\t\t  <p class=\"paraStyle_caption\"><img src=\"/content/dam/up/print-articles/volume-23/issue-2/1902UPpf2-p01.jpg\" alt=\"\" /></p>\n\t\t\t  <p class=\"paraStyle_caption\">Telematics systems are used to improve driver behavior by monitoring metrics such as drive time, unauthorized usage, idle time, hard braking, rapid acceleration, and speeding.</p>\n\t\t  </div>\n\t\t\t<h3 class=\"paraStyle_subhead\">Best Practices for Driver Policies with Telematics Data </h3>\n\t\t\t<p class=\"paraStyle_body_noindent\">Written safety policies are the foundation of a safety program. After all, how will drivers know what’s expected if it’s never presented to them? </p>\n\t\t\t<p class=\"paraStyle_body\">Before holding employees accountable with telematics data, it’s important to lay some groundwork as to how, when, and why the information will be used. It’s highly recommended to put regulations in place around the use of telematics so employees are aware from the beginning. </p>\n\t\t\t<p class=\"paraStyle_body\">When introducing new driver policies that incorporate telematics, fleet managers can follow these best practices to obtain the optimal results:</p>\n\t\t\t<p class=\"paraStyle_body\">•&#9; Be Transparent — Clearly present the use of telematics data to measure performance and monitor compliance. When the time comes to hold employees accountable, there could be backlash about tracking their vehicles without their knowledge.</p>\n\t\t\t<p class=\"paraStyle_body\">•&#9;Define Consequences — To ensure policies are effective, there should be clear consequences defined when policies are not followed. Penalties might range from strikes that lead to loss of driving privileges to termination. Whatever they may be, drivers should be made aware before ever operating a company vehicle. </p>\n\t\t\t<p class=\"paraStyle_body\">•&#9;Embrace Safety Company-wide — Creating a culture of safety is key to the broader acceptance of the policy. Safety policies should be embraced at every level of the organization, from executives, managers, and supervisors to every driver in the company.</p>\n\t\t\t<p class=\"paraStyle_body\">Once safety protocols are defined, fleet managers can start using telematics to monitor and correct unsafe driving when it happens to proactively improve driver safety. </p>\n\t\t\t<h3 class=\"paraStyle_subhead\">Stop Unsafe Driving When It’s Happening </h3>\n\t\t\t<p class=\"paraStyle_body_noindent\">Telematics systems are used to improve driver behavior by monitoring metrics such as drive time, unauthorized usage, idle time, hard braking, rapid acceleration, and speeding. </p>\n\t\t\t<p class=\"paraStyle_body\">Speeding is one of the leading causes of accidents on our roadways. According to the U.S. Department of Transportation’s 2015 Motor Vehicle Crashes report, there were 9,557 fatalities caused by speeding-related accidents. Telematics enables fleet managers to monitor the speed of each of the vehicles, in real time, and to determine if any are traveling at unlawful speeds. </p>\n\t\t\t<p class=\"paraStyle_body\">To correct unsafe driver behavior, it’s recommended to provide ongoing performance feedback with the data gathered from the telematics system. </p>\n\t\t\t<h3 class=\"paraStyle_subhead\">Maintain Safer Vehicles</h3>\n\t\t\t<p class=\"paraStyle_body_noindent\">According to the National Highway Traffic Safety Administration (NHTSA), 43 percent of critical pre-crash events that cause vehicle accidents are attributed to tire failure. </p>\n\t\t\t<p class=\"paraStyle_body\">Staying on top of preventative services, like tire rotations, is one of the easiest ways to prevent accidents with telematics. The software’s maintenance module will automatically track run time and odometer readings, then send reminders when services like tire rotations and balancing, oil changes, emissions testing, or any other types of services are due to be completed. It is recommended to send maintenance alerts to management and drivers to ensure vehicles and equipment receive necessary services as soon as possible.</p>\n\t\t\t<p class=\"paraStyle_body\">Although automated maintenance reminders are effective, a service may still slip through the cracks here and there. To proactively monitor overdue services, management should get in the habit of viewing scheduled maintenance reports. These reports should be available on demand or can be automated by email on a daily/weekly/monthly basis. Any outstanding services will be flagged in red on the report so managers can take action and get them completed right away.</p>\n\t\t\t<p class=\"paraStyle_body\">At the end of the day, when considering the objectives of a telematics implementation, no reasoning is quite as important as increasing safety for employees and the general public on the roadways. Using telematics as part of a fleetwide safety initiative will drive the program miles forward while providing the business with several other impactful benefits. UP </p>\n\t\t\t<p class=\"paraStyle_body_bio\"><strong class=\"charStyle_bold\">The Author: </strong></p>\n\t\t\t<p class=\"paraStyle_body_bio\"><img src=\"/content/dam/up/print-articles/volume-23/issue-2/1902UPpf2-a01.jpg\" alt=\"\" width=\"167\" height=\"167\" /></p>\n\t\t\t<p class=\"paraStyle_body_bio\">Jenny Shiner is the communications manager for GPS Insight. She graduated from Arizona State University with a bachelor’s degree in communication and is responsible for communication for all business segments that GPS Insight targets. For more information on telematics and fuel card technologies, visit www.gpsinsight.com.</p>\n\t\t</div>",
  "featured" : null,
  "byLine" : null,
  "categories" : [
    {
      "domain" : "/etc/tags/up/category/vehicles_and_accessories",
      "value" : "Vehicles and Accessories"
    }
  ],
  "categoryThreshold" : "3",
  "dateLine" : null,
  "headerImage" : null,
  "footerImage" : null,
  "thumbnailImage" : null,
  "primaryAuthor" : null,
  "authors" : [
  ],
  "print" : {
    "volume" : "volume-23",
    "issue" : "issue-2",
    "category" : "product-focus/fleet-safety",
    "cover" : "/content/dam/up/en/articles/print/volume-23/issue-2/leftcolumn/issuepromo/thumbnailimage/file.jpeg"
  },
  "link" : "/articles/print/volume-23/issue-2/product-focus/fleet-safety/improving-fleet-safety.html",
  "securityRules" : [
  ],
  "replicationStatus" : "Activated",
  "topicCenterDefault" : [
  ],
  "topicCenterOverride" : [
  ],
  "downloadables" : [
  ]
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
