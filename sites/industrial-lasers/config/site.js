module.exports = {
  logo: {
    src: 'https://base.imgix.net/files/base/pennwell/ils/logo.png?h=40',
    srcset: [
      'https://base.imgix.net/files/base/pennwell/ils/logo.png?h=80 2x',
    ],
  },
  primaryNavItems: [
    { href: '/cutting', label: 'Cutting' },
    { href: '/welding', label: 'Welding' },
    { href: '/micromachining', label: 'Micromachining' },
    { href: '/marking-engraving', label: 'Marking & Engraving' },
    { href: '/surface-treatment', label: 'Surface Treatment' },
    { href: '/additive-manufacturing', label: 'Additive Manufacturing' },
    { href: '/drilling', label: 'Drilling' },
    { href: '/safety', label: 'Safety' },
  ],
  secondaryNavItems: [
    { href: '/subscribe', label: 'Subscribe' },
    { href: '/magazine', label: 'Magazine' },
    { href: '/videos', label: 'Videos' },
    { href: '/page/about-us', label: 'About Us' },
  ],
  homeSections: [
    { alias: 'cutting', name: 'Cutting' },
    { alias: 'welding', name: 'Welding' },
    { alias: 'micromachining', name: 'Micromachining' },
    { alias: 'marking-engraving', name: 'Marking & Engraving' },
    { alias: 'surface-treatment', name: 'Surface Treatment' },
    { alias: 'additive-manufacturing', name: 'Additive Manufacturing' },
  ],
  ads: {
    units: {
      BS: {
        path: '/21687441225/ILS/ILS_BS',
        size: [[970, 250], [970, 90], [728, 90], [300, 50], [320, 50], [300, 100]],
        sizeMapping: [
          { viewport: [980, 0], size: [[970, 250], [970, 90], [728, 90]] },
          { viewport: [750, 0], size: [728, 90] },
          { viewport: [320, 0], size: [[300, 50], [320, 50], [300, 100]] },
        ],
      },
      MR: {
        path: '/21687441225/ILS/ILS_MR',
        size: [300, 250],
      },
      HP: {
        path: '/21687441225/ILS/ILS_HP',
        size: [300, 600],
      },
    },
  },
};
