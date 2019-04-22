const ads = require('./ads');

module.exports = {
  ads,
  logo: {
    src: 'https://base.imgix.net/files/base/ebm/pmm/image/static/logo/site_logo.png',
    srcset: [
      'https://base.imgix.net/files/base/ebm/pmm/image/static/logo/site_logo.png 2x',
    ],
  },
  socialMediaLinks: [
    { provider: 'linkedin', href: 'https://www.linkedin.com/company/plastics-machinery-magazine' },
    { provider: 'twitter', href: 'https://twitter.com/PlasticsMM' },
  ],
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
  menuItems: {
    resources: [
      { href: '/magazine', label: 'Magazine' },
      { href: '/videos', label: 'Videos' },
      { href: '/white-papers', label: 'Whitepapers' },
      { href: '/webcasts', label: 'Webcasts' },
    ],
    userTools: [
      { href: '/subscribe', label: 'Subscribe' },
      { href: '/advertise', label: 'Advertise' },
      { href: '/page/about-us', label: 'About Us' },
      { href: '/contact-us', label: 'Contact Us' },
      { href: 'https://www.endeavorbusinessmedia.com/privacy-policy', label: 'Privacy Policy' },
      { href: 'https://www.endeavorbusinessmedia.com/endeavor-terms', label: 'Terms & Conditions' },
    ],
  },
  gtmContainer: 'GTM-KBM372Z',
  search: {
    engine: 'google',
    apiKey: '017383739850048358259:alxsug09xai',
  },
};
