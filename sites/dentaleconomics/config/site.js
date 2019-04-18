const ads = require('./ads');

module.exports = {
  ads,
  logo: {
    src: 'https://base.imgix.net/files/base/pennwell/de/logo.png?h=40',
    srcset: [
      'https://base.imgix.net/files/base/pennwell/de/logo.png?h=80 2x',
    ],
  },
  socialMediaLinks: [
    { provider: 'linkedin', href: 'https://www.linkedin.com/company/dental-economics?trk=biz-brand-tree-co-name' },
    { provider: 'twitter', href: 'https://twitter.com/dentalmagazine' },
    { provider: 'facebook', href: 'https://www.facebook.com/DentalEconomics' },
  ],
  primaryNavItems: [
    { href: '/macro-op-ed', label: 'Macro/Op-Ed' },
    { href: '/practice', label: 'Practice' },
    { href: '/science-tech', label: 'Science & Tech' },
    { href: '/money', label: 'Money' },
    { href: '/dental-office-design', label: 'Dental Office Design' },
  ],
  secondaryNavItems: [
    { href: '/subscribe', label: 'Subscribe' },
    { href: '/magazine', label: 'Magazine' },
    { href: '/videos', label: 'Videos' },
    { href: '/page/about-us', label: 'About Us' },
    { href: 'https://www.dentalacademyofce.com', label: 'Earn CE' },
    { href: 'https://www.dentistryiq.com/products/free-samples', label: 'Free Samples' },
  ],
  homeSections: [
    { alias: 'macro-op-ed', name: 'Macro/Op-Ed' },
    { alias: 'practice', name: 'Practice' },
    { alias: 'science-tech', name: 'Science & Tech' },
  ],
  gtmContainer: 'GTM-5QGXLHV',
  // ads: {
  //   units: {
  //     BS: {
  //       path: '/21687441225/DE/DE_BS',
  //       size: [[970, 250], [970, 90], [728, 90], [320, 50], [300, 50], [300, 100]],
  //       sizeMapping: [
  //         { viewport: [980, 0], size: [[970, 250], [970, 90], [728, 90]] },
  //         { viewport: [750, 0], size: [728, 90] },
  //         { viewport: [320, 0], size: [[300, 50], [320, 50], [300, 100]] },
  //       ],
  //     },
  //     MR: {
  //       path: '/21687441225/DE/DE_MR',
  //       size: [300, 250],
  //     },
  //     HP: {
  //       path: '/21687441225/DE/DE_HP',
  //       size: [300, 600],
  //     },
  //   },
  // },
  search: {
    engine: 'google',
    apiKey: '003355913687346718228:266mmrxk-zy',
  },
};
