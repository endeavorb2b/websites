module.exports = {
  logo: {
    src: 'https://base.imgix.net/files/base/pennwell/pia/logo.png?h=40',
    srcset: [
      'https://base.imgix.net/files/base/pennwell/pia/logo.png?h=80 2x',
    ],
  },
  primaryNavItems: [
    { href: '/clinical-tips-from-the-editor', label: 'Clinical Tips from the Editor' },
    { href: '/complications', label: 'Complications' },
    { href: '/dental-practice-management', label: 'Dental Practice Management' },
    { href: '/hygiene', label: 'Hygiene' },
    { href: '/oral-systemic', label: 'Oral-Systemic' },
    { href: '/restorative', label: 'Restorative' },
    { href: '/surgical', label: 'Surgical' },
    { href: '/team-treatment-planning', label: 'Team Treatment Planning' },
  ],
  secondaryNavItems: [
    { href: '/subscribe', label: 'Subscribe' },
    { href: '/magazine', label: 'Magazine' },
    { href: '/videos', label: 'Videos' },
    { href: '/page/about-us', label: 'About Us' },
  ],
  homeSections: [
    { alias: 'clinical-tips-from-the-editor', name: 'Clinical Tips from the Editor' },
    { alias: 'complications', name: 'Complications' },
    { alias: 'dental-practice-management', name: 'Dental Practice Management' },
    { alias: 'hygiene', name: 'Hygiene' },
    { alias: 'oral-systemic', name: 'Oral-Systemic' },
    { alias: 'restorative', name: 'Restorative' },
  ],
  gtmContainer: 'GTM-WVXHH29',
  ads: {
    units: {
      BS: {
        path: '/21687441225/PIA/PIA_BS',
        size: [[970, 250], [970, 90], [728, 90], [300, 50], [320, 50], [300, 100]],
        sizeMapping: [
          { viewport: [980, 0], size: [[970, 250], [970, 90], [728, 90]] },
          { viewport: [750, 0], size: [728, 90] },
          { viewport: [320, 0], size: [[300, 50], [320, 50], [300, 100]] },
        ],
      },
      MR: {
        path: '/21687441225/PIA/PIA_MR',
        size: [300, 250],
      },
      HP: {
        path: '/21687441225/PIA/PIA_HP',
        size: [300, 600],
      },
    },
  },
};
