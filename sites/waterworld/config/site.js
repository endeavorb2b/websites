const ads = require('./ads');

module.exports = {
  ads,
  logo: {
    src: 'https://base.imgix.net/files/base/pennwell/ww/logo.png?h=40',
    srcset: [
      'https://base.imgix.net/files/base/pennwell/ww/logo.png?h=80 2x',
    ],
  },
  primaryNavItems: [
    { href: '/municipal', label: 'Municipal' },
    { href: '/industrial', label: 'Industrial' },
    { href: '/international', label: 'International' },
  ],
  secondaryNavItems: [
    { href: '/subscribe', label: 'Subscribe' },
    { href: '/magazine', label: 'Magazine' },
    { href: '/videos', label: 'Videos' },
    { href: '/page/about-us', label: 'About Us' },
  ],
  homeSections: [
    { alias: 'municipal', name: 'Municipal' },
    { alias: 'industrial', name: 'Industrial' },
    { alias: 'international', name: 'International' },
  ],
  gtmContainer: 'GTM-MXBGH3V',
  // ads: {
  //   units: {
  //     BS: {
  //       path: '/21687441225/WW/WW_BS',
  //       size: [[970, 250], [970, 90], [728, 90], [300, 50], [320, 50], [300, 100]],
  //       sizeMapping: [
  //         { viewport: [980, 0], size: [[970, 250], [970, 90], [728, 90]] },
  //         { viewport: [750, 0], size: [728, 90] },
  //         { viewport: [320, 0], size: [[300, 50], [320, 50], [300, 100]] },
  //       ],
  //     },
  //     MR: {
  //       path: '/21687441225/WW/WW_MR',
  //       size: [300, 250],
  //     },
  //     HP: {
  //       path: '/21687441225/WW/WW_HP',
  //       size: [300, 600],
  //     },
  //   },
  // },
  search: {
    engine: 'google',
    apiKey: '003355913687346718228:anjajr3pydu',
  },
};
