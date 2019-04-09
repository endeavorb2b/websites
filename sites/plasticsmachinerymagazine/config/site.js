module.exports = {
  logo: {
    src: 'https://cdn.plasticsmachinerymagazine.com/files/base/ebm/pmm/image/static/logo/site_logo.png',
    srcset: [
      'https://cdn.plasticsmachinerymagazine.com/files/base/ebm/pmm/image/static/logo/site_logo.png 2x',
    ],
  },
  primaryNavItems: [
    { href: '/additive-manufacturing', label: 'Additive Manufacturing' },
    { href: '/blow-molding', label: 'Blow Molding' },
    { href: '/thermoforming', label: 'Thermoforming' },
    { href: '/compounding', label: 'Compounding' },
    { href: '/injection-molding', label: 'Injection Molding' },
    { href: '/extrusion', label: 'Extrusion' },
    { href: '/recycling', label: 'Recycling' },
    { href: '/molds-tooling', label: 'Molds & Tooling' },
    { href: '/rotomolding', label: 'Rotomolding' },
  ],
  secondaryNavItems: [
    { href: '/subscribe', label: 'Subscribe' },
    { href: '/magazine', label: 'In Print' },
    { href: '/advertise', label: 'Advertise' },
    { href: '/contact-us', label: 'Contact Us' },
  ],
  homeSections: [
    { alias: 'additive-manufacturing', name: 'Additive Manufacturing' },
    { alias: 'blow-molding', name: 'Blow Molding' },
    { alias: 'thermoforming', name: 'Thermoforming' },
    { alias: 'compounding', name: 'Compounding' },
    { alias: 'injection-molding', name: 'Injection Molding' },
    { alias: 'extrusion', name: 'Extrusion' },
    { alias: 'recycling', name: 'Recycling' },
    { alias: 'molds-tooling', name: 'Molds & Tooling' },
    { alias: 'rotomolding', name: 'Rotomolding' },
  ],
  ads: {
    units: {
      BS: {
        path: '/21687441225/PMM/PMM_BS',
        size: [[970, 250], [970, 90], [728, 90], [300, 50], [320, 50], [300, 100]],
        sizeMapping: [
          { viewport: [980, 0], size: [[970, 250], [970, 90], [728, 90]] },
          { viewport: [750, 0], size: [728, 90] },
          { viewport: [320, 0], size: [[300, 50], [320, 50], [300, 100]] },
        ],
      },
      MR: {
        path: '/21687441225/PMM/PMM_MR',
        size: [300, 250],
      },
      HP: {
        path: '/21687441225/PMM/PMM_HP',
        size: [300, 600],
      },
    },
  },
};
