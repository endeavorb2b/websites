const ads = require('./ads');

module.exports = {
  ads,
  company: 'PMMI Media Group',
  logos: {
    navbar: {
      src: 'https://base.imgix.net/files/base/pmmi/pfw/logo.png?h=60',
      srcset: [
        'https://base.imgix.net/files/base/pmmi/pfw/logo.png?h=120 2x',
      ],
    },
    footer: {
      src: 'https://base.imgix.net/files/base/pmmi/pfw/logo.png?h=60',
      srcset: [
        'https://base.imgix.net/files/base/pmmi/pfw/logo.png?h=120 2x',
      ],
    },
  },
  socialMediaLinks: [
    { provider: 'twitter', href: 'https://twitter.com/ProFoodWorld' },
  ],
  navigation: {
    primary: {
      items: [
        { href: '/subscribe', label: 'Subscribe' },
        { href: '/in-the-news', label: 'In the News' },
        { href: '/processing', label: 'Processing' },
        { href: '/packaging', label: 'Packaging' },
        { href: '/food-safety', label: 'Food Safety' },
        { href: '/automation', label: 'Automation' },
        { href: '/sustainability', label: 'Sustainability' },
      ],
    },
    secondary: {
      items: [
        { href: '/magazine', label: 'Archive' },
        { href: '/global-250', label: 'Global 250' },
        { href: '/awards', label: 'Awards' },
        { href: '/webinars', label: 'Webinars' },
        { href: '/events', label: 'Events/Calendar' },
        { href: '/videos', label: 'Videos' },
        { href: 'http://www.opxleadershipnetwork.org/', label: 'OpX Leadership Network', target: '_blank' },
        { href: 'http://www.packexpo.com/', label: 'PACK EXPO Trade Shows', target: '_blank' },
      ],
    },
    footer: {
      items: [
        { href: '/page/about-us', label: 'About Us' },
        { href: '/page/advertising-terms-conditions', label: 'Ad Terms & Conditions' },
        { href: 'http://www.pmmimediagroup.com/pfw/profood-world', label: 'Advertise', target: '_blank' },
        { href: 'https://www.pmmimediagroup.com/pfw/editorial-calendar-2019', label: 'Editorial Calendar', target: '_blank' },
        { href: '/contact-us', label: 'Contact Us' },
        { href: '/page/privacy-policy', label: 'Privacy Policy' },
        { href: '/page/terms-use', label: 'Terms of Use' },
      ],
    },
    menu: {
      topics: {
        label: 'Topics',
        items: [
          { href: '/subscribe', label: 'Subscribe' },
          { href: '/in-the-news', label: 'In the News' },
          { href: '/processing', label: 'Processing' },
          { href: '/packaging', label: 'Packaging' },
          { href: '/food-safety', label: 'Food Safety' },
          { href: '/automation', label: 'Automation' },
          { href: '/sustainability', label: 'Sustainability' },
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
          { href: 'http://www.pmmimediagroup.com/pfw/profood-world', label: 'Advertise', target: '_blank' },
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
      bgColor: '#002645',
      logo: 'https://base.imgix.net/files/base/pmmi/pfw/logo.png?h=60',
    },
  },
};
