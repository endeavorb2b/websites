const ads = require('./ads');

module.exports = {
  ads,
  logo: {
    src: 'https://base.imgix.net/files/base/pennwell/ias/logo.png?h=40',
    srcset: [
      'https://base.imgix.net/files/base/pennwell/ias/logo.png?h=80 2x',
    ],
  },
  socialMediaLinks: [
    { provider: 'linkedin', href: 'https://www.linkedin.com/company/intelligent-aerospace' },
    { provider: 'twitter', href: 'https://twitter.com/intelligentaero' },
    { provider: 'facebook', href: 'https://www.facebook.com/intelligentaerospace/' },
  ],
  primaryNavItems: [
    { href: '/commercial', label: 'Commercial' },
    { href: '/military', label: 'Military' },
    { href: '/avionics', label: 'Avionics' },
    { href: '/atc-atm', label: 'ATC/ATM' },
    { href: '/helicopter', label: 'Helicopter' },
    { href: '/satcom', label: 'SATCOM' },
    { href: '/unmanned', label: 'Unmanned' },
  ],
  secondaryNavItems: [
    { href: '/subscribe', label: 'Subscribe' },
    { href: '/magazine', label: 'Magazine' },
    { href: '/videos', label: 'Videos' },
    { href: '/page/about-us', label: 'About Us' },
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
  gtmContainer: 'GTM-T5KLFDK',
  search: {
    engine: 'google',
    apiKey: '003355913687346718228:idbh6wzoxxo',
  },
};
