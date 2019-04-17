const ads = require('./ads');

module.exports = {
  ads,
  logos: {
    navbar: {
      src: 'https://base.imgix.net/files/base/pennwell/ww/logo.png?h=30',
      srcset: [
        'https://base.imgix.net/files/base/pennwell/ww/logo.png?h=60 2x',
      ],
    },
    footer: {
      src: 'https://base.imgix.net/files/base/pennwell/ww/logo.png?h=50',
      srcset: [
        'https://base.imgix.net/files/base/pennwell/ww/logo.png?h=100 2x',
      ],
    },
  },
  socialMediaLinks: [
    { provider: 'linkedin', href: 'https://www.linkedin.com/grp/home?gid=1965670' },
    { provider: 'twitter', href: 'https://twitter.com/WaterWorld' },
    { provider: 'facebook', href: 'https://www.facebook.com/waterworldmag' },
  ],
  primaryNavItems: [
    { href: '/municipal', label: 'Municipal' },
    { href: '/industrial', label: 'Industrial' },
    { href: '/international', label: 'International' },
    { href: '/municipal/technologies', label: 'Technologies' },
    { href: '/', label: 'Thought Leaders' },
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
  gtmContainer: 'GTM-MXBGH3V',
  search: {
    engine: 'google',
    apiKey: '003355913687346718228:anjajr3pydu',
  },
  magazines: {
    ww: {
      name: 'WaterWorld',
      subscribeUrl: 'http://formdesigner.ecn5.com/GetForm?tokenuid=251e2ac3-4c6a-495d-a7d8-5178dc76acd5&promoCode=N9WEB&utm_source=mag_sub&utm_medium=website&utm_campaign=N9WEB&utm_content=2019-02-26',
    },
    iww: {
      name: 'Industrial WaterWorld',
      subscribeUrl: 'https://formdesigner.ecn5.com/GetForm?tokenuid=0aaf9d77-861e-46ba-905b-43ad58b691cc&promoCode=N9WEB&utm_source=mag_sub&utm_medium=website&utm_campaign=N9WEB&utm_content=2019-02-26',
    },
    wwi: {
      name: 'Water & Wastewater International',
      subscribeUrl: 'about:blank',
    },
    uwi: {
      name: 'Urban Water Management',
      subscribeUrl: 'about:blank',
    },
    mb: {
      name: 'Membranes',
      subscribeUrl: 'about:blank',
    },
    wum: {
      name: 'Water Utility Management',
      subscribeUrl: 'about:blank',
    },
  },
};
