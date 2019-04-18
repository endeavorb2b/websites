const ads = require('./ads');

module.exports = {
  ads,
  logo: {
    src: 'https://base.imgix.net/files/base/pennwell/lw/logo.png?h=40',
    srcset: [
      'https://base.imgix.net/files/base/pennwell/lw/logo.png?h=80 2x',
    ],
  },
  socialMediaLinks: [
    { provider: 'linkedin', href: 'https://www.linkedin.com/company/4000932' },
    { provider: 'twitter', href: 'https://twitter.com/lightwaveonline' },
    { provider: 'facebook', href: 'https://www.facebook.com/LightwaveOnline' },
  ],
  primaryNavItems: [
    { href: '/network-design', label: 'Network Design' },
    { href: '/fttx', label: 'FTTX' },
    { href: '/sdn-nfv', label: 'SDN/NFV' },
    { href: '/data-center', label: 'Data Center' },
    { href: '/test', label: 'Test' },
    { href: '/optical-tech', label: 'Optical Tech' },
    { href: '/business', label: 'Business' },
    { href: '/education', label: 'Education' },
  ],
  secondaryNavItems: [
    { href: '/subscribe', label: 'Subscribe' },
    { href: '/magazine', label: 'Magazine' },
    { href: '/videos', label: 'Videos' },
    { href: '/page/about-us', label: 'About Us' },
  ],
  homeSections: [
    { alias: 'network-design', name: 'Network Design' },
    { alias: 'fttx', name: 'FTTX' },
    { alias: 'sdn-nfv', name: 'SDN/NFV' },
    { alias: 'data-center', name: 'Data Center' },
    { alias: 'test', name: 'Test' },
    { alias: 'optical-tech', name: 'Optical Tech' },
  ],
  gtmContainer: 'GTM-M3B7WXJ',
  // ads: {
  //   units: {
  //     BS: {
  //       path: '/21687441225/LW/LW_BS',
  //       size: [[970, 250], [970, 90], [728, 90], [300, 50], [320, 50], [300, 100]],
  //       sizeMapping: [
  //         { viewport: [980, 0], size: [[970, 250], [970, 90], [728, 90]] },
  //         { viewport: [750, 0], size: [728, 90] },
  //         { viewport: [320, 0], size: [[300, 50], [320, 50], [300, 100]] },
  //       ],
  //     },
  //     MR: {
  //       path: '/21687441225/LW/LW_MR',
  //       size: [300, 250],
  //     },
  //     HP: {
  //       path: '/21687441225/LW/LW_HP',
  //       size: [300, 600],
  //     },
  //   },
  // },
  search: {
    engine: 'google',
    apiKey: '003355913687346718228:wpucddduxta',
  },
};
