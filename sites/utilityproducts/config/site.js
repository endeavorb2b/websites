const ads = require('./ads');

module.exports = {
  ads,
  logo: {
    src: 'https://base.imgix.net/files/base/pennwell/up/logo.png?h=30',
    srcset: [
      'https://base.imgix.net/files/base/pennwell/up/logo.png?h=60 2x',
    ],
    footer: {
      src: 'https://base.imgix.net/files/base/pennwell/up/logo.png?h=50',
      srcset: [
        'https://base.imgix.net/files/base/pennwell/up/logo.png?h=100 2x',
      ],
    },
  },
  socialMediaLinks: [
    { provider: 'linkedin', href: 'https://www.linkedin.com/company/utility-products?trk=other_brands_logo' },
    { provider: 'twitter', href: 'http://twitter.com/UtilityProducts' },
    { provider: 'facebook', href: 'http://www.facebook.com/pages/Utility-Products-Magazine/133739816672957' },
  ],
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
