const ads = require('./ads');

module.exports = {
  ads,
  logos: {
    navbar: {
      src: 'https://base.imgix.net/files/base/pennwell/ogj/logo.png?h=30',
      srcset: [
        'https://base.imgix.net/files/base/pennwell/ogj/logo.png?h=60 2x',
      ],
    },
    footer: {
      src: 'https://base.imgix.net/files/base/pennwell/ogj/logo.png?h=50',
      srcset: [
        'https://base.imgix.net/files/base/pennwell/ogj/logo.png?h=100 2x',
      ],
    },
  },
  socialMediaLinks: [
    { provider: 'linkedin', href: 'https://www.linkedin.com/company/oil-&-gas-journal' },
    { provider: 'twitter', href: 'http://twitter.com/ogjonline' },
    { provider: 'facebook', href: 'http://www.facebook.com/ogjonline' },
  ],
  primaryNavItems: [
    { href: '/general-interest', label: 'General Interest' },
    { href: '/exploration-development', label: 'Exploration & Development' },
    { href: '/drilling-production', label: 'Drilling & Production' },
    { href: '/refining-processing', label: 'Refining & Processing' },
    { href: '/pipelines-transportation', label: 'Pipelines & Transportation' },
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
  gtmContainer: 'GTM-N253PL7',
  search: {
    engine: 'google',
    apiKey: '003355913687346718228:t6qdcjgnqpk',
  },
  subscriptions: {
    newsletters: 'https://formdesigner.ecn5.com/GetForm?tokenuid=22b7d82d-e6f5-421a-89a2-518e519e7718',
    publications: {
      '/subscribe/print/ogj': 'http://formdesigner.ecn5.com/GetForm?tokenuid=2455740f-950f-4ec5-b983-7088b8e2d84d&promoCode=NE9WEB&utm_source=mag_sub&utm_medium=website&utm_campaign=NE9WEB&utm_content=2019-02-26',
    },
  },
  magazines: {
    description: '',
  },
};
