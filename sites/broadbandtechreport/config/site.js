module.exports = {
  logo: {
    src: 'https://base.imgix.net/files/base/pennwell/up/logo.png?h=40',
    srcset: [
      'https://base.imgix.net/files/base/pennwell/up/logo.png?h=80 2x',
    ],
  },
  primaryNavItems: [
    { href: '/transmission-distribution', label: 'Transmission & Distribution' },
    { href: '/vehicles-accessories', label: 'Vehicles & Accessories' },
    { href: '/tools-supplies', label: 'Tools & Supplies' },
    { href: '/safety', label: 'Safety' },
    { href: '/line-construction-maintenance', label: 'Line Construction & Maintenance' },
    { href: '/test-measurement', label: 'Test & Measurement' },
  ],
  secondaryNavItems: [
    { href: '/subscribe', label: 'Subscribe' },
    { href: '/videos', label: 'Videos' },
    { href: '/white-papers', label: 'White Papers' },
    { href: '/events', label: 'Events' },
  ],
  homeSections: [
    { id: 30003, name: 'Transmission & Distribution' },
    { id: 30004, name: 'Vehicles & Accessories' },
    { id: 30005, name: 'Tools & Supplies' },
    { id: 30006, name: 'Safety' },
    { id: 30007, name: 'Line Construction & Maintenance' },
    { id: 30008, name: 'Test & Mesurement' },
  ],
  ad: {
    units: {
      BS: {
        path: '/21687441225/UP/UP_BS',
        size: [[970, 250], [970, 90], [728, 90], [320, 50], [300, 50], [300, 100]],
        sizeMapping: [
          { viewport: [980, 0], size: [[970, 250], [970, 90], [728, 90]] },
          { viewport: [750, 0], size: [728, 90] },
          { viewport: [320, 0], size: [[300, 50], [320, 50], [300, 100]] },
        ],
      },
      MR: {
        path: '/21687441225/UP/UP_MR',
        size: [300, 250],
      },
      HP: {
        path: '/21687441225/UP/UP_HP',
        size: [300, 600],
      },
    },
  },
};
