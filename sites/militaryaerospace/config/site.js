const ads = require('./ads');

module.exports = {
  ads,
  logo: {
    src: 'https://base.imgix.net/files/base/pennwell/mae/logo.png?h=40',
    srcset: [
      'https://base.imgix.net/files/base/pennwell/mae/logo.png?h=80 2x',
    ],
  },
  primaryNavItems: [
    { href: '/computers', label: 'Computers' },
    { href: '/cyber', label: 'Cyber' },
    { href: '/unmanned', label: 'Unmanned' },
    { href: '/sensors', label: 'Sensors' },
    { href: '/rf-analog', label: 'RF/Analog' },
    { href: '/power', label: 'Power' },
    { href: '/communications', label: 'Communications' },
    { href: '/test', label: 'Test' },
  ],
  secondaryNavItems: [
    { href: '/subscribe', label: 'Subscribe' },
    { href: '/magazine', label: 'Magazine' },
    { href: '/videos', label: 'Videos' },
    { href: '/page/about-us', label: 'About Us' },
  ],
  homeSections: [
    { alias: 'computers', name: 'Computers' },
    { alias: 'cyber', name: 'Cyber' },
    { alias: 'unmanned', name: 'Unmanned' },
    { alias: 'sensors', name: 'Sensors' },
    { alias: 'rf-analog', name: 'RF/Analog' },
    { alias: 'power', name: 'Power' },
  ],
  gtmContainer: 'GTM-M94ZBBC',
  // ads: {
  //   units: {
  //     BS: {
  //       path: '/21687441225/MAE/MAE_BS',
  //       size: [[970, 250], [970, 90], [728, 90], [300, 50], [320, 50], [300, 100]],
  //       sizeMapping: [
  //         { viewport: [980, 0], size: [[970, 250], [970, 90], [728, 90]] },
  //         { viewport: [750, 0], size: [728, 90] },
  //         { viewport: [320, 0], size: [[300, 50], [320, 50], [300, 100]] },
  //       ],
  //     },
  //     MR: {
  //       path: '/21687441225/MAE/MAE_MR',
  //       size: [300, 250],
  //     },
  //     HP: {
  //       path: '/21687441225/MAE/MAE_HP',
  //       size: [300, 600],
  //     },
  //   },
  // },
  search: {
    engine: 'google',
    apiKey: '003355913687346718228:q0eepyg2tx0',
  },
};
