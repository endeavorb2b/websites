const ads = require('./ads');

module.exports = {
  ads,
  logos: {
    navbar: {
      src: 'https://base.imgix.net/files/base/pennwell/os/logo.png?h=30',
      srcset: [
        'https://base.imgix.net/files/base/pennwell/os/logo.png?h=60 2x',
      ],
    },
    footer: {
      src: 'https://base.imgix.net/files/base/pennwell/os/logo.png?h=50',
      srcset: [
        'https://base.imgix.net/files/base/pennwell/os/logo.png?h=100 2x',
      ],
    },
  },
  socialMediaLinks: [
    { provider: 'linkedin', href: 'https://www.linkedin.com/company/offshore-magazine' },
    { provider: 'twitter', href: 'https://twitter.com/offshoremgzn' },
    { provider: 'facebook', href: 'https://www.facebook.com/offshoremagazine' },
  ],
  primaryNavItems: [
    { href: '/regional-reports', label: 'Regional Reports' },
    { href: '/drilling-completion', label: 'Drilling & Completion' },
    { href: '/field-development', label: 'Field Development' },
    { href: '/subsea', label: 'Subsea' },
    { href: '/geosciences', label: 'Geosciences' },
    { href: '/pipelines', label: 'Pipelines' },
    { href: '/production', label: 'Production' },
    { href: '/rigs-vessels', label: 'Rigs/Vessels' },
    { href: '/deepwater', label: 'Deepwater' },
    { href: '/business-briefs', label: 'Business Briefs' },
  ],
  secondaryNavItems: [
    { href: '/subscribe', label: 'Subscribe' },
    { href: '/magazine', label: 'Magazine' },
    { href: '/videos', label: 'Videos' },
    { href: '/page/about-us', label: 'About Us' },
  ],
  menuItems: {
    resources: [
      { href: '/magazine', label: 'Magazine' },
      { href: '/videos', label: 'Videos' },
      { href: '/white-papers', label: 'White Papers' },
      { href: '/webcasts', label: 'Webcasts' },
    ],
    userTools: [
      { href: '/subscribe', label: 'Subscribe' },
      { href: '/advertise', label: 'Advertise' },
      { href: '/page/about-us', label: 'About Us' },
      { href: '/contact-us', label: 'Contact Us' },
      { href: 'https://www.endeavorbusinessmedia.com/privacy-policy', label: 'Privacy Policy' },
      { href: 'https://www.endeavorbusinessmedia.com/endeavor-terms', label: 'Terms & Conditions' },
    ],
  },
  gtmContainer: 'GTM-PQK8MQK',
  search: {
    engine: 'google',
    apiKey: '003355913687346718228:jon24h47vcu',
  },
};
