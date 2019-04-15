const ads = require('./ads');

module.exports = {
  ads,
  logo: {
    src: 'https://base.imgix.net/files/base/pennwell/diq/logo.png?h=40',
    srcset: [
      'https://base.imgix.net/files/base/pennwell/diq/logo.png?h=80 2x',
    ],
  },
  primaryNavItems: [
    { href: '/practice-management', label: 'Practice Management' },
    { href: '/assistants', label: 'Assistants' },
    { href: '/clinical', label: 'Clinical' },
    { href: '/front-office', label: 'Front Office' },
    { href: '/dental-hygiene', label: 'Dental Hygiene' },
    { href: '/industry', label: 'Industry' },
    { href: '/products', label: 'Products' },
    { href: '/continuing-education', label: 'Continuing Education' },
  ],
  secondaryNavItems: [
    { href: '/subscribe', label: 'Subscribe' },
    { href: '/magazine', label: 'Magazine' },
    { href: '/videos', label: 'Videos' },
    { href: '/page/about-us', label: 'About Us' },
  ],
  homeSections: [
    { alias: 'practice-management', name: 'Practice Management' },
    { alias: 'assistants', name: 'Assistants' },
    { alias: 'clinical', name: 'Clinical' },
    { alias: 'front-office', name: 'Front Office' },
    { alias: 'dental-hygiene', name: 'Dental Hygiene' },
    { alias: 'industry', name: 'Industry' },
  ],
  // ads: {
  //   units: {
  //     BS: {
  //       path: '/21687441225/DIQ/DIQ_BS',
  //       size: [[970, 250], [970, 90], [728, 90], [300, 50], [320, 50], [300, 100]],
  //       sizeMapping: [
  //         { viewport: [980, 0], size: [[970, 250], [970, 90], [728, 90]] },
  //         { viewport: [750, 0], size: [728, 90] },
  //         { viewport: [320, 0], size: [[300, 50], [320, 50], [300, 100]] },
  //       ],
  //     },
  //     MR: {
  //       path: '/21687441225/DIQ/DIQ_MR',
  //       size: [300, 250],
  //     },
  //     HP: {
  //       path: '/21687441225/DIQ/DIQ_HP',
  //       size: [300, 600],
  //     },
  //   },
  // },
  search: {
    engine: 'google',
    apiKey: 'API_KEY',
  },
};
