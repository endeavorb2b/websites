const ads = require('./ads');

module.exports = {
  ads,
  logo: {
    src: 'https://base.imgix.net/files/base/pennwell/os/logo.png?h=40',
    srcset: [
      'https://base.imgix.net/files/base/pennwell/os/logo.png?h=80 2x',
    ],
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
  homeSections: [
    { alias: 'regional-reports', name: 'Regional Reports' },
    { alias: 'drilling-completion', name: 'Drilling & Completion' },
    { alias: 'field-development', name: 'Field Development' },
    { alias: 'subsea', name: 'Subsea' },
    { alias: 'geosciences', name: 'Geosciences' },
    { alias: 'pipelines', name: 'Pipelines' },
  ],
  menuItems: {
    resources: [
      { href: '/magazine', label: 'Magazine' },
      { href: '/videos', label: 'Videos' },
      { href: '/white-papers', label: 'Whitepapers' },
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
  // ads: {
  //   units: {
  //     BS: {
  //       path: '/21687441225/OS/OS_BS',
  //       size: [[970, 250], [970, 90], [728, 90], [300, 50], [320, 50], [300, 100]],
  //       sizeMapping: [
  //         { viewport: [980, 0], size: [[970, 250], [970, 90], [728, 90]] },
  //         { viewport: [750, 0], size: [728, 90] },
  //         { viewport: [320, 0], size: [[300, 50], [320, 50], [300, 100]] },
  //       ],
  //     },
  //     MR: {
  //       path: '/21687441225/OS/OS_MR',
  //       size: [300, 250],
  //     },
  //     HP: {
  //       path: '/21687441225/OS/OS_HP',
  //       size: [300, 600],
  //     },
  //   },
  // },
  search: {
    engine: 'google',
    apiKey: '003355913687346718228:jon24h47vcu',
  },
};
