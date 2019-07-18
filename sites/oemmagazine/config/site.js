const ads = require('./ads');

module.exports = {
  ads,
  company: 'PMMI Media Group',
  logos: {
    navbar: {
      src: 'https://base.imgix.net/files/base/pmmi/oem/logo.png?h=60',
      srcset: [
        'https://base.imgix.net/files/base/pmmi/oem/logo.png?h=120 2x',
      ],
    },
    footer: {
      src: 'https://base.imgix.net/files/base/pmmi/oem/logo.png?h=60',
      srcset: [
        'https://base.imgix.net/files/base/pmmi/oem/logo.png?h=120 2x',
      ],
    },
  },
  socialMediaLinks: [
    { provider: 'twitter', href: 'https://twitter.com/OEMmagazine' },
    { provider: 'facebook', href: 'https://www.facebook.com/OEMMagazine/' },
  ],
  navigation: {
    primary: {
      items: [
        { href: '/subscribe', label: 'Subscribe' },
        { href: '/technology-topics', label: 'Technology' },
        { href: '/gear', label: 'Gear' },
        { href: '/oem-topics', label: 'OEM Topics' },
      ],
    },
    secondary: {
      items: [
        { href: '/calendar', label: 'Calendar' },
        { href: '/page/about-us', label: 'About Us' },
        { href: '/magazine', label: 'Digital Edition' },
        { href: '/tech-trensetters', label: 'Tech Trendsetters' },
        { href: 'https://digitaleditions.oemmagazine.org/OEM_Spring2019/OEMSpring_2019/index.html#page=1', label: 'Current Edition', target: '_blank' },
        { href: 'http://www.theautomationconference.com', label: 'The Automation Conference', target: '_blank' },
      ],
    },
    footer: {
      items: [
        { href: 'http://www.pmmimediagroup.com/ppoem/packaging-processing-oem', label: 'Advertise', target: '_blank' },
        { href: '/page/privacy-policy', label: 'Privacy Policy' },
        { href: '/page/terms-use', label: 'Terms of Use' },
        { href: '/page/advertising-terms-conditions', label: 'Advertising Terms and Conditions' },
        { href: '/contact-us', label: 'Contact Us' },
      ],
    },
    menu: {
      topics: {
        label: 'Topics',
        items: [
          { href: '/subscribe', label: 'Subscribe' },
          { href: '/technology-topics', label: 'Technology' },
          { href: '/gear', label: 'Gear' },
          { href: '/oem-topics', label: 'OEM Topics' },
        ],
      },
      resources: {
        label: 'Resources',
        items: [
          { href: '/magazine', label: 'Magazine' },
          { href: '/videos', label: 'Videos' },
          { href: '/white-papers', label: 'White Papers' },
          { href: '/events', label: 'Events' },
        ],
      },
      userTools: {
        label: 'User Tools',
        items: [
          { href: '/subscribe', label: 'Subscribe' },
          { href: 'http://www.pmmimediagroup.com/ppoem/packaging-processing-oem', label: 'Advertise', target: '_blank' },
          { href: '/page/about-us', label: 'About Us' },
          { href: '/contact-us', label: 'Contact Us' },
          { href: '/page/privacy-policy', label: 'Privacy Policy' },
        ],
      },
    },
  },
  gtmContainer: '',
  search: {
    engine: 'google',
    apiKey: '003355913687346718228:mb2grfhfx08',
  },
  subscriptions: {
    newsletters: 'https://www.oemmagazine.org/oem-registration-form',
    publications: {
      '/subscribe/print/oem': 'https://pmmi.dragonforms.com/init.do?omedasite=OEMnew',
    },
  },
  magazines: {
    description: 'OEM is a quarterly business publication written for PMMI members and all manufacturers of packaging, food processing, converting and material handling equipment; subscribers include both members and non-members. Each issue explores technology innovations, offers insight into management pain points and uncovers new OEM opportunities, as manufacturing enters the Fourth Industrial Revolution.',
  },
  contactUs: {
    branding: {
      bgColor: '#115b77',
      logo: 'https://base.imgix.net/files/base/pmmi/oem/logo.png?h=60',
    },
  },
};
