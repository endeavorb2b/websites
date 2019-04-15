const ads = require('./ads');

module.exports = {
  ads,
  logo: {
    src: 'https://base.imgix.net/files/base/pennwell/ogj/logo.png?h=40',
    srcset: [
      'https://base.imgix.net/files/base/pennwell/ogj/logo.png?h=80 2x',
    ],
  },
  primaryNavItems: [
    { href: '/general-interest', label: 'General Interest' },
    { href: '/exploration-development', label: 'Exploration & Development' },
    { href: '/drilling-production', label: 'Drilling & Production' },
    { href: '/refining-processing', label: 'Refining & Processing' },
    { href: '/pipelines-transportation', label: 'Pipelines & Transportation' },
  ],
  secondaryNavItems: [
    { href: '/subscribe', label: 'Subscribe' },
    { href: '/magazine', label: 'Magazine' },
    { href: '/videos', label: 'Videos' },
    { href: '/page/about-us', label: 'About Us' },
  ],
  homeSections: [
    { alias: 'general-interest', name: 'General Interest' },
    { alias: 'exploration-development', name: 'Exploration & Development' },
    { alias: 'drilling-production', name: 'Drilling & Production' },
  ],
  gtmContainer: 'GTM-N253PL7',
  // ads: {
  //   units: {
  //     BS: {
  //       path: '/21687441225/OGJ/OGJ_BS',
  //       size: [[970, 250], [970, 90], [728, 90], [300, 50], [320, 50], [300, 100]],
  //       sizeMapping: [
  //         { viewport: [980, 0], size: [[970, 250], [970, 90], [728, 90]] },
  //         { viewport: [750, 0], size: [728, 90] },
  //         { viewport: [320, 0], size: [[300, 50], [320, 50], [300, 100]] },
  //       ],
  //     },
  //     MR: {
  //       path: '/21687441225/OGJ/OGJ_MR',
  //       size: [300, 250],
  //     },
  //     HP: {
  //       path: '/21687441225/OGJ/OGJ_HP',
  //       size: [300, 600],
  //     },
  //   },
  // },
  search: {
    engine: 'google',
    apiKey: '003355913687346718228:t6qdcjgnqpk',
  },
};
