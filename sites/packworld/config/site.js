const ads = require('./ads');

module.exports = {
  ads,
  company: 'PMMI Media Group',
  logos: {
    navbar: {
      src: 'https://base.imgix.net/files/base/pmmi/pw/logo.png?h=60',
      srcset: [
        'https://base.imgix.net/files/base/pmmi/pw/logo.png?h=120 2x',
      ],
    },
    footer: {
      src: 'https://base.imgix.net/files/base/pmmi/pw/logo.png?h=60',
      srcset: [
        'https://base.imgix.net/files/base/pmmi/pw/logo.png?h=120 2x',
      ],
    },
  },
  socialMediaLinks: [
  ],
  primaryNavItems: [
    { href: 'https://www.packexpo.com/', label: 'Pack Expo Shows', target: '_blank' },
    { href: '/design', label: 'Design' },
    { href: '/machinery', label: 'Machinery' },
    { href: '/videos', label: 'Videos' },
    { href: '/case-studies', label: 'Case Studies' },
    { href: '/plyabooks', label: 'Playbooks' },
    { href: 'https://gallery.packworld.com', label: 'Galleries', target: '_blank' },
  ],
  secondaryNavItems: [
    { href: '/subscribe', label: 'Subscribe' },
    { href: '/magazine', label: 'Magazine' },
    { href: '/contract-packaging', label: 'Contract Packaging' },
    { href: '/education', label: 'Education' },
    { href: '/leadership', label: 'Leaadership' },
    { href: '/events', label: 'Calendar' },
    { href: '/webcasts', label: 'Webinars' },
  ],
  footerNavItems: [
    { href: '/', label: 'Home' },
    { href: 'https://www.pmmimediagroup.com/pw/packaging-world', label: 'Advertise', target: '_blank' },
    { href: '/page/about-us', label: 'About Us' },
    { href: 'https://feeds.feedburner.com/packworld/QLwk', label: 'RSS', target: '_blank' },
    { href: '/page/privacy', label: 'Privacy' },
    { href: '/page/legal', label: 'Terms of use' },
    { href: '/page/advertising-terms-conditions', label: 'Ad Terms & Conditions' },
  ],
  menuItems: {
    resources: [
      { href: '/magazine', label: 'Magazine' },
      { href: '/videos', label: 'Videos' },
      { href: '/white-papers', label: 'White Papers' },
      { href: '/events', label: 'Events' },
    ],
    userTools: [
      { href: '/subscribe', label: 'Subscribe' },
      { href: 'https://www.pmmimediagroup.com/pw/packaging-world', label: 'Advertise', target: '_blank' },
      { href: '/page/about-us', label: 'About Us' },
      { href: '/contact-us', label: 'Contact Us' },
      { href: '/page/privacy-policy', label: 'Privacy Policy' },
    ],
  },
  gtmContainer: '',
  search: {
    engine: 'google',
    apiKey: '003355913687346718228:mb2grfhfx08',
  },
  subscriptions: {
    newsletters: 'https://www.profoodworld.com/newsletter-registration?sid=12541',
    publications: {
      '/subscribe/print/pfw': 'https://pmmi.dragonforms.com/PPFWnew?pk=PFWMagNav',
    },
  },
  magazines: {
    description: 'ProFood World meets the expanding information needs of manufacturing, engineering, operation and supply chain/logistics executives in the global food and beverage manufacturing industry.',
  },
  contactUs: {
    branding: {
      bgColor: '#035fac',
      logo: 'https://base.imgix.net/files/base/pmmi/pw/logo.png?h=60',
    },
  },
};
