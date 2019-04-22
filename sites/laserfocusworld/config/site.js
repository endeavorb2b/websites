const ads = require('./ads');

module.exports = {
  ads,
  logo: {
    src: 'https://base.imgix.net/files/base/pennwell/lfw/logo.png?h=40',
    srcset: [
      'https://base.imgix.net/files/base/pennwell/lfw/logo.png?h=80 2x',
    ],
  },
  socialMediaLinks: [
    { provider: 'linkedin', href: 'http://www.linkedin.com/groups/Laser-Focus-World-2896249' },
    { provider: 'twitter', href: 'https://twitter.com/LaserFocusWorld' },
    { provider: 'facebook', href: 'https://www.facebook.com/pages/Laser-Focus-World/126899915297' },
  ],
  primaryNavItems: [
    { href: '/detectors-imaging', label: 'Detectors & Imaging' },
    { href: '/lasers-sources', label: 'Lasers & Sources' },
    { href: '/optics', label: 'Optics' },
    { href: '/fiber-optics', label: 'Fiber Optics' },
    { href: '/software-accessories', label: 'Software & Accessories' },
    { href: '/test-measurement', label: 'Test & Measurement' },
  ],
  secondaryNavItems: [
    { href: '/subscribe', label: 'Subscribe' },
    { href: '/magazine', label: 'Magazine' },
    { href: '/videos', label: 'Videos' },
    { href: '/page/about-us', label: 'About Us' },
  ],
  homeSections: [
    { alias: 'detectors-imaging', name: 'Detectors & Imaging' },
    { alias: 'lasers-sources', name: 'Lasers & Sources' },
    { alias: 'optics', name: 'Optics' },
    { alias: 'fiber-optics', name: 'Fiber Optics' },
    { alias: 'software-accessories', name: 'Software & Accessories' },
    { alias: 'test-measurement', name: 'Test & Measurement' },
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
  gtmContainer: 'GTM-M7H8VJG',
  // ads: {
  //   units: {
  //     BS: {
  //       path: '/21687441225/FLW/FLW_BS',
  //       size: [[970, 250], [970, 90], [728, 90], [300, 50], [320, 50], [300, 100]],
  //       sizeMapping: [
  //         { viewport: [980, 0], size: [[970, 250], [970, 90], [728, 90]] },
  //         { viewport: [750, 0], size: [728, 90] },
  //         { viewport: [320, 0], size: [[300, 50], [320, 50], [300, 100]] },
  //       ],
  //     },
  //     MR: {
  //       path: '/21687441225/FLW/FLW_MR',
  //       size: [300, 250],
  //     },
  //     HP: {
  //       path: '/21687441225/FLW/FLW_HP',
  //       size: [300, 600],
  //     },
  //   },
  // },
  search: {
    engine: 'google',
    apiKey: '003355913687346718228:9fw7nfvu5hw',
  },
};
