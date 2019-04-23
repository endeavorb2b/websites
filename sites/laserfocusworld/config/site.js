const ads = require('./ads');

module.exports = {
  ads,
  logos: {
    navbar: {
      src: 'https://base.imgix.net/files/base/pennwell/lfw/logo.png?h=30',
      srcset: [
        'https://base.imgix.net/files/base/pennwell/lfw/logo.png?h=60 2x',
      ],
    },
    footer: {
      src: 'https://base.imgix.net/files/base/pennwell/lfw/logo.png?h=50',
      srcset: [
        'https://base.imgix.net/files/base/pennwell/lfw/logo.png?h=100 2x',
      ],
    },
  },
  socialMediaLinks: [
    { provider: 'linkedin', href: 'http://www.linkedin.com/groups/Laser-Focus-World-2896249' },
    { provider: 'twitter', href: 'https://twitter.com/LaserFocusWorld' },
    { provider: 'facebook', href: 'https://www.facebook.com/pages/Laser-Focus-World/126899915297' },
  ],
  primaryNavItems: [
    { href: '/detectors-imaging', label: 'Detectors & Imaging' },
    { href: '/lasers-sources', label: 'Lasers & Sources' },
    { href: '/optics', label: 'Optics' },
    { href: '/fiber-optics', label: 'Fiber Optics' },
    { href: '/software-accessories', label: 'Software & Accessories' },
    { href: '/test-measurement', label: 'Test & Measurement' },
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
  gtmContainer: 'GTM-M7H8VJG',
  search: {
    engine: 'google',
    apiKey: '003355913687346718228:9fw7nfvu5hw',
  },
  subscriptions: {
    newsletters: 'https://formdesigner.ecn5.com/GetForm?tokenuid=28d2fe32-119b-468e-a58a-a7b564581eaf&promoCode=NW2019&utm_source=mag_sub&utm_medium=website&utm_campaign=NW2019&utm_content=2019-02-25',
    publications: {
      '/subscribe/print/lfw': 'https://formdesigner.ecn5.com/GetForm?tokenuid=28d2fe32-119b-468e-a58a-a7b564581eaf&promoCode=NW2019&utm_source=mag_sub&utm_medium=website&utm_campaign=NW2019&utm_content=2019-02-25',
    },
  },
  magazines: {
    description: '',
  },
};
