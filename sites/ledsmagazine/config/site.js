const ads = require('./ads');

module.exports = {
  ads,
  logo: {
    src: 'https://base.imgix.net/files/base/pennwell/leds/logo.png?h=40',
    srcset: [
      'https://base.imgix.net/files/base/pennwell/leds/logo.png?h=80 2x',
    ],
  },
  primaryNavItems: [
    { href: '/leds-ssl-design', label: 'LEDs & SSL Design' },
    { href: '/manufacturing-services-testing', label: 'Manufacturing Services & Testing' },
    { href: '/architectural-lighting', label: 'Architectural Lighting' },
    { href: '/smart-lighting-iot', label: 'Smart Lighting & IoT' },
    { href: '/specialty-ssl', label: 'Specialty SSL' },
    { href: '/horticultural-lighting', label: 'Horticultural Lighting' },
  ],
  secondaryNavItems: [
    { href: '/subscribe', label: 'Subscribe' },
    { href: '/magazine', label: 'Magazine' },
    { href: '/videos', label: 'Videos' },
    { href: '/page/about-us', label: 'About Us' },
  ],
  homeSections: [
    { alias: 'leds-ssl-design', name: 'LEDs & SSL Design' },
    { alias: 'manufacturing-services-testing', name: 'Manufacturing Services & Testing' },
    { alias: 'architectural-lighting', name: 'Architectural Lighting' },
    { alias: 'smart-lighting-iot', name: 'Smart Lighting & IoT' },
    { alias: 'specialty-ssl', name: 'Specialty SSL' },
    { alias: 'horticultural-lighting', name: 'Horticultural Lighting' },
  ],
  gtmContainer: 'GTM-T29NVLB',
  // ads: {
  //   units: {
  //     BS: {
  //       path: '/21687441225/LEDS/LEDS_BS',
  //       size: [[970, 250], [970, 90], [728, 90], [300, 50], [320, 50], [300, 100]],
  //       sizeMapping: [
  //         { viewport: [980, 0], size: [[970, 250], [970, 90], [728, 90]] },
  //         { viewport: [750, 0], size: [728, 90] },
  //         { viewport: [320, 0], size: [[300, 50], [320, 50], [300, 100]] },
  //       ],
  //     },
  //     MR: {
  //       path: '/21687441225/LEDS/LEDS_MR',
  //       size: [300, 250],
  //     },
  //     HP: {
  //       path: '/21687441225/LEDS/LEDS_HP',
  //       size: [300, 600],
  //     },
  //   },
  // },
  search: {
    engine: 'google',
    apiKey: '003355913687346718228:m_5jkc8w8fq',
  },
};
