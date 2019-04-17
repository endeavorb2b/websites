const ads = require('./ads');

module.exports = {
  ads,
  logos: {
    navbar: {
      src: 'https://base.imgix.net/files/base/pennwell/rdh/logo.png?h=30',
      srcset: [
        'https://base.imgix.net/files/base/pennwell/rdh/logo.png?h=60 2x',
      ],
    },
    footer: {
      src: 'https://base.imgix.net/files/base/pennwell/rdh/logo.png?h=50',
      srcset: [
        'https://base.imgix.net/files/base/pennwell/rdh/logo.png?h=100 2x',
      ],
    },
  },
  socialMediaLinks: [
    { provider: 'linkedin', href: 'https://www.linkedin.com/showcase/4000114/' },
    { provider: 'twitter', href: 'https://twitter.com/RDHmag' },
    { provider: 'facebook', href: 'https://www.facebook.com/RDHMagazine' },
  ],
  primaryNavItems: [
    { href: '/bioscience', label: 'Bioscience' },
    { href: '/biomedicine', label: 'Biomedicine' },
    { href: '/bioimaging', label: 'Bioimaging' },
    { href: '/biophotonics-techniques', label: 'Biophotonics Techniques' },
    { href: '/biophotonics-tools', label: 'Biophotonics Tools' },
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
  gtmContainer: 'GTM-54D4B9T',
  search: {
    engine: 'google',
    apiKey: '003355913687346718228:uz62nndii_e',
  },
  magazines: {
    name: 'Registered Dential Hygienist',
    subscribeUrl: 'http://formdesigner.ecn5.com/GetForm?tokenuid=be483ce1-58cd-40a2-9ffc-db04519f2e16&promoCode=NW93&&cmpid=email_sub_rdh_website_2018',
  },
};
