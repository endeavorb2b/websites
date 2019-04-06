module.exports = {
  logo: {
    src: 'https://base.imgix.net/files/base/pennwell/de/logo.png?h=40',
    srcset: [
      'https://base.imgix.net/files/base/pennwell/de/logo.png?h=80 2x',
    ],
  },
  primaryNavItems: [
    { href: '/macro-op-ed', label: 'Macro/Op-Ed' },
    { href: '/practice', label: 'Practice' },
    { href: '/science-tech', label: 'Science & Tech' },
    { href: '/money', label: 'Money' },
    { href: '/dental-office-design', label: 'Dental Office Design' },
  ],
  secondaryNavItems: [
    { href: '/subscribe', label: 'Subscribe' },
    { href: 'https://www.dentalacademyofce.com', label: 'Earn CE' },
    { href: '/white-papers', label: 'White Papers' },
    { href: '/videos', label: 'Videos' },
    { href: '/job-listings', label: 'Job Listings' },
    { href: 'https://www.dentistryiq.com/products/free-samples', label: 'Free Samples' },
  ],
  homeSections: [
    { id: 30016, label: 'Macro/Op-Ed' },
    { id: 30017, label: 'Practice' },
    { id: 30018, label: 'Science & Tech' },
  ],
  ads: {
    units: {
      BS: {
        path: '/21687441225/DE/DE_BS',
        size: [[970, 250], [970, 90], [728, 90], [320, 50], [300, 50], [300, 100]],
        sizeMapping: [
          { viewport: [980, 0], size: [[970, 250], [970, 90], [728, 90]] },
          { viewport: [750, 0], size: [728, 90] },
          { viewport: [320, 0], size: [[300, 50], [320, 50], [300, 100]] },
        ],
      },
      MR: {
        path: '/21687441225/DE/DE_MR',
        size: [300, 250],
      },
      HP: {
        path: '/21687441225/DE/DE_HP',
        size: [300, 600],
      },
    },
  },
};
