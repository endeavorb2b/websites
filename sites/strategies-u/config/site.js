const ads = require('./ads');

module.exports = {
  ads,
  logo: {
    src: 'https://base.imgix.net/files/base/pennwell/su/logo.png?h=40',
    srcset: [
      'https://base.imgix.net/files/base/pennwell/su/logo.png?h=80 2x',
    ],
  },
  primaryNavItems: [],
  secondaryNavItems: [
    { href: '/subscribe', label: 'Subscribe' },
    { href: '/magazine', label: 'Magazine' },
    { href: '/videos', label: 'Videos' },
    { href: '/page/about-us', label: 'About Us' },
  ],
  homeSections: [],
  gtmContainer: 'GTM-56MD64K',
  // ads: {
  //   units: {
  //     BS: {
  //       path: '/21687441225/SU/SU_BS',
  //       size: [[970, 250], [970, 90], [728, 90], [300, 50], [320, 50], [300, 100]],
  //       sizeMapping: [
  //         { viewport: [980, 0], size: [[970, 250], [970, 90], [728, 90]] },
  //         { viewport: [750, 0], size: [728, 90] },
  //         { viewport: [320, 0], size: [[300, 50], [320, 50], [300, 100]] },
  //       ],
  //     },
  //     MR: {
  //       path: '/21687441225/SU/SU_MR',
  //       size: [300, 250],
  //     },
  //     HP: {
  //       path: '/21687441225/SU/SU_HP',
  //       size: [300, 600],
  //     },
  //   },
  // },
};
