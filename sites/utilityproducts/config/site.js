const ads = require('./ads');

module.exports = {
  ads,
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
    { href: '/magazine', label: 'Magazine' },
    { href: '/videos', label: 'Videos' },
    { href: '/page/about-us', label: 'About Us' },
  ],
  homeSections: [
    { alias: 'transmission-distribution', name: 'Transmission & Distribution' },
    { alias: 'vehicles-accessories', name: 'Vehicles & Accessories' },
    { alias: 'tools-supplies', name: 'Tools & Supplies' },
    { alias: 'safety', name: 'Safety' },
    { alias: 'line-construction-maintenance', name: 'Line Construction & Maintenance' },
    { alias: 'test-measurement', name: 'Test & Measurement' },
  ],
  gtmContainer: 'GTM-PSGKX8S',
  search: {
    engine: 'google',
    apiKey: '003355913687346718228:mb2grfhfx08',
  },
};
