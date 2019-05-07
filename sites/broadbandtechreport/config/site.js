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
  ],
  secondaryNavItems: [
    { href: '/subscribe', label: 'Subscribe' },
    { href: '/videos', label: 'Videos' },
    { href: '#', label: 'BTR America Latina' },
    { href: '#', label: 'Diamond Tech Reviews' },
    { href: '/page/advertise', label: 'Advertise' },
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
      { href: '/videos', label: 'Videos' },
      { href: '/white-papers', label: 'White Papers' },
      { href: '/webcasts', label: 'Webcasts' },
      { href: '#', label: 'BTR America Latina' },
      { href: '#', label: 'Diamond Tech Reviews' },
    ],
    userTools: [
      { href: '/subscribe', label: 'Subscribe' },
      { href: '/page/advertise', label: 'Advertise' },
      { href: '/page/about-us', label: 'About Us' },
      { href: '/contact-us', label: 'Contact Us' },
      { href: 'https://www.endeavorbusinessmedia.com/privacy-policy', label: 'Privacy Policy', target: '_blank' },
      { href: 'https://www.endeavorbusinessmedia.com/endeavor-terms', label: 'Terms & Conditions', target: '_blank' },
    ],
  },
  gtmContainer: 'GTM-T3RWG44',
  search: {
    engine: 'google',
    apiKey: '003355913687346718228:yhsbqmtzmqw',
  },
  subscriptions: {
    newsletters: 'https://formdesigner.ecn5.com/GetForm?tokenuid=7e167702-3ad8-4566-92bf-3221b22b0d75',
  },
  magazines: {
    description: '',
  },
  contactUs: {
    branding: {
      bgColor: '#254497',
      logo: 'https://base.imgix.net/files/base/pennwell/btr/logo.png?h=50',
    },
  },
};
