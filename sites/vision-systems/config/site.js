const ads = require('./ads');

module.exports = {
  ads,
  logo: {
    src: 'https://base.imgix.net/files/base/pennwell/vsd/logo.png?h=40',
    srcset: [
      'https://base.imgix.net/files/base/pennwell/vsd/logo.png?h=80 2x',
    ],
  },
  primaryNavItems: [
    { href: '/factory', label: 'Factory' },
    { href: '/non-factory', label: 'Non-Factory' },
    { href: '/cameras', label: 'Cameras' },
    { href: '/boards-software', label: 'Boards & Software' },
    { href: '/embedded', label: 'Embedded' },
    { href: '/unmanned', label: 'Unmanned' },
    { href: '/nextgen', label: 'NextGen' },
  ],
  secondaryNavItems: [
    { href: '/subscribe', label: 'Subscribe' },
    { href: '/magazine', label: 'Magazine' },
    { href: '/videos', label: 'Videos' },
    { href: '/page/about-us', label: 'About Us' },
  ],
  homeSections: [
    { alias: 'factory', name: 'Factory' },
    { alias: 'non-factory', name: 'Non-Factory' },
    { alias: 'cameras', name: 'Cameras' },
    { alias: 'boards-software', name: 'Boards & Software' },
    { alias: 'embedded', name: 'Embedded' },
    { alias: 'unmanned', name: 'Unmanned' },
  ],
  gtmContainer: 'GTM-PZFPXQK',
  // ads: {
  //   units: {
  //     BS: {
  //       path: '/21687441225/VSD/VSD_BS',
  //       size: [[970, 250], [970, 90], [728, 90], [300, 50], [320, 50], [300, 100]],
  //       sizeMapping: [
  //         { viewport: [980, 0], size: [[970, 250], [970, 90], [728, 90]] },
  //         { viewport: [750, 0], size: [728, 90] },
  //         { viewport: [320, 0], size: [[300, 50], [320, 50], [300, 100]] },
  //       ],
  //     },
  //     MR: {
  //       path: '/21687441225/VSD/VSD_MR',
  //       size: [300, 250],
  //     },
  //     HP: {
  //       path: '/21687441225/VSD/VSD_HP',
  //       size: [300, 600],
  //     },
  //   },
  // },
  search: {
    engine: 'google',
    apiKey: '003355913687346718228:etkxb9ohz_w',
  },
};
