const ads = require('./ads');

module.exports = {
  ads,
  logo: {
    src: 'https://base.imgix.net/files/base/pennwell/ias/logo.png?h=40',
    srcset: [
      'https://base.imgix.net/files/base/pennwell/ias/logo.png?h=80 2x',
    ],
  },
  primaryNavItems: [
    { href: '/commercial', label: 'Commercial' },
    { href: '/military', label: 'Military' },
    { href: '/avionics', label: 'Avionics' },
    { href: '/atc-atm', label: 'ATC/ATM' },
    { href: '/helicopter', label: 'Helicopter' },
    { href: '/satcom', label: 'SATCOM' },
    { href: '/unmanned', label: 'Unmanned' },
  ],
  secondaryNavItems: [
    { href: '/subscribe', label: 'Subscribe' },
    { href: '/magazine', label: 'Magazine' },
    { href: '/videos', label: 'Videos' },
    { href: '/page/about-us', label: 'About Us' },
  ],
  homeSections: [
    { alias: 'commercial', name: 'Commercial' },
    { alias: 'military', name: 'Military' },
    { alias: 'avionics', name: 'Avionics' },
    { alias: 'atc-atm', name: 'ATC/ATM' },
    { alias: 'helicopter', name: 'Helicopter' },
    { alias: 'satcom', name: 'SATCOM' },
  ],
  gtmContainer: 'GTM-T5KLFDK',
  // ads: {
  //   units: {
  //     BS: {
  //       path: '/21687441225/IAS/IAS_BS',
  //       size: [[970, 250], [970, 90], [728, 90], [300, 50], [320, 50], [300, 100]],
  //       sizeMapping: [
  //         { viewport: [980, 0], size: [[970, 250], [970, 90], [728, 90]] },
  //         { viewport: [750, 0], size: [728, 90] },
  //         { viewport: [320, 0], size: [[300, 50], [320, 50], [300, 100]] },
  //       ],
  //     },
  //     MR: {
  //       path: '/21687441225/IAS/IAS_MR',
  //       size: [300, 250],
  //     },
  //     HP: {
  //       path: '/21687441225/IAS/IAS_HP',
  //       size: [300, 600],
  //     },
  //   },
  // },
  search: {
    engine: 'google',
    apiKey: '003355913687346718228:idbh6wzoxxo',
  },
};
