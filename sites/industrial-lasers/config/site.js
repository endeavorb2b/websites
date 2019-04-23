const ads = require('./ads');

module.exports = {
  ads,
  logos: {
    navbar: {
      src: 'https://base.imgix.net/files/base/pennwell/ils/logo.png?h=30',
      srcset: [
        'https://base.imgix.net/files/base/pennwell/ils/logo.png?h=60 2x',
      ],
    },
    footer: {
      src: 'https://base.imgix.net/files/base/pennwell/ils/logo.png?h=50',
      srcset: [
        'https://base.imgix.net/files/base/pennwell/ils/logo.png?h=100 2x',
      ],
    },
  },
  socialMediaLinks: [
    { provider: 'linkedin', href: 'https://www.linkedin.com/company/4000113' },
    { provider: 'twitter', href: 'https://twitter.com/ILS_for_Mfg' },
    { provider: 'facebook', href: 'https://www.facebook.com/industriallasersolutionsformanufacturing' },
  ],
  primaryNavItems: [
    { href: '/cutting', label: 'Cutting' },
    { href: '/welding', label: 'Welding' },
    { href: '/micromachining', label: 'Micromachining' },
    { href: '/marking-engraving', label: 'Marking & Engraving' },
    { href: '/surface-treatment', label: 'Surface Treatment' },
    { href: '/additive-manufacturing', label: 'Additive Manufacturing' },
    { href: '/drilling', label: 'Drilling' },
    { href: '/safety', label: 'Safety' },
  ],
  secondaryNavItems: [
    { href: '/subscribe', label: 'Subscribe' },
    { href: '/magazine', label: 'Magazine' },
    { href: '/videos', label: 'Videos' },
    { href: '/page/about-us', label: 'About Us' },
  ],
  footerNavItems: [
    { href: '/page/about-us', label: 'About Us' },
    { href: '/contact-us', label: 'Contact Us' },
    { href: 'https://www.endeavorbusinessmedia.com/privacy-policy', label: 'Privacy Policy', target: '_blank' },
    { href: 'https://www.endeavorbusinessmedia.com/endeavor-terms', label: 'Terms & Conditions', target: '_blank' },
  ],
  menuItems: {
    resources: [
      { href: '/magazine', label: 'Magazine' },
      { href: '/videos', label: 'Videos' },
      { href: '/white-papers', label: 'White Papers' },
      { href: '/webcasts', label: 'Webcasts' },
    ],
    userTools: [
      { href: '/subscribe', label: 'Subscribe' },
      { href: '/advertise', label: 'Advertise' },
      { href: '/page/about-us', label: 'About Us' },
      { href: '/contact-us', label: 'Contact Us' },
      { href: 'https://www.endeavorbusinessmedia.com/privacy-policy', label: 'Privacy Policy', target: '_blank' },
      { href: 'https://www.endeavorbusinessmedia.com/endeavor-terms', label: 'Terms & Conditions', target: '_blank' },
    ],
  },
  gtmContainer: 'GTM-P8Q22J8',
  search: {
    engine: 'google',
    apiKey: '003355913687346718228:sdje-2o3phk',
  },
};
