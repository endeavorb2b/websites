module.exports = {
  logo: {
    src: 'https://base.imgix.net/files/base/pennwell/btr/logo.png?h=40',
    srcset: [
      'https://base.imgix.net/files/base/pennwell/btr/logo.png?h=80 2x',
    ],
  },
  primaryNavItems: [
    { href: '/in-the-network', label: 'In the Network' },
    { href: '/in-the-home', label: 'In the Home' },
    { href: '/mobile', label: 'Mobile' },
    { href: '/video', label: 'Video' },
    { href: '/internet', label: 'Internet' },
    { href: '/voice', label: 'Voice' },
    { href: '/business-services', label: 'Business Services' },
    { href: '/back-office', label: 'Back Office' },
    { href: '/metrics', label: 'Metrics' },
    { href: '/diamond-reviews', label: 'Diamond Reviews' },
  ],
  secondaryNavItems: [
    { href: '/subscribe', label: 'Subscribe' },
    { href: '/magazine', label: 'Magazine' },
    { href: '/videos', label: 'Videos' },
    { href: '/page/about-us', label: 'About Us' },
  ],
  homeSections: [
    { id: 30222, name: 'In the Network' },
    { id: 30229, name: 'In the Home' },
    { id: 30233, name: 'Mobile' },
    { id: 30243, name: 'Internet' },
    { id: 30244, name: 'Voice' },
    { id: 30245, name: 'Business Services' },
  ],
  ad: {
    units: {
      BS: {
        path: '/21687441225/BTR/BTR_BS',
        size: [[970, 250], [970, 90], [728, 90], [320, 50], [300, 50], [300, 100]],
        sizeMapping: [
          { viewport: [980, 0], size: [[970, 250], [970, 90], [728, 90]] },
          { viewport: [750, 0], size: [728, 90] },
          { viewport: [320, 0], size: [[300, 50], [320, 50], [300, 100]] },
        ],
      },
      MR: {
        path: '/21687441225/BTR/BTR_MR',
        size: [300, 250],
      },
      HP: {
        path: '/21687441225/BTR/BTR_HP',
        size: [300, 600],
      },
    },
  },
};
