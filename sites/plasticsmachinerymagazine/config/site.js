const ads = require('./ads');

module.exports = {
  ads,
  logo: {
    src: 'https://base.imgix.net/files/base/ebm/pmm/image/static/logo/site_logo.png',
    srcset: [
      'https://base.imgix.net/files/base/ebm/pmm/image/static/logo/site_logo.png 2x',
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
  gtmContainer: 'GTM-KBM372Z',
  search: {
    engine: 'google',
    apiKey: 'API_KEY',
  },
};
