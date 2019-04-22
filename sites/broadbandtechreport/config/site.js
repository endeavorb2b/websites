const ads = require('./ads');

module.exports = {
  ads,
  logos: {
    navbar: {
      src: 'https://base.imgix.net/files/base/pennwell/btr/logo.png?h=30',
      srcset: [
        'https://base.imgix.net/files/base/pennwell/btr/logo.png?h=60 2x',
      ],
    },
    footer: {
      src: 'https://base.imgix.net/files/base/pennwell/btr/logo.png?h=50',
      srcset: [
        'https://base.imgix.net/files/base/pennwell/btr/logo.png?h=100 2x',
      ],
    },
  },
  socialMediaLinks: [
    { provider: 'linkedin', href: 'https://www.linkedin.com/company/3998846' },
    { provider: 'twitter', href: 'http://twitter.com/BTReport' },
    { provider: 'facebook', href: 'https://www.facebook.com/BTReport' },
  ],
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
  gtmContainer: 'GTM-T3RWG44',
  search: {
    engine: 'google',
    apiKey: '003355913687346718228:yhsbqmtzmqw',
  },
};
