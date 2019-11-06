const ads = require('./ads');

module.exports = {
  ads,
  company: 'AQUA Magazine',
  logos: {
    navbar: {
      src: 'https://base.imgix.net/files/base/abm/am/logo.png?h=60',
      srcset: [
        'https://base.imgix.net/files/base/abm/am/logo.png?h=120 2x',
      ],
    },
    footer: {
      src: 'https://base.imgix.net/files/base/abm/am/logo.png?h=60',
      srcset: [
        'https://base.imgix.net/files/base/abm/am/logo.png?h=120 2x',
      ],
    },
  },
  socialMediaLinks: [
    { provider: 'facebook', href: 'https://www.facebook.com/AQUAMagazine' },
    { provider: 'twitter', href: 'https://twitter.com/aquamagazine' },
    { provider: 'linkedin', href: 'http://www.linkedin.com/groups/AQUA-Magazine-3861363' },
    { provider: 'pinterest', href: 'http://www.pinterest.com/aquamagazine/' },
  ],
  navigation: {
    primary: {
      items: [
        { href: '/news', label: 'News' },
        { href: '/features', label: 'Features' },
        { href: 'https://library.aquamagazine.com', label: 'Content Library', target: '_blank' },
        { href: '/buyers-guide', label: 'Buyers Guide' },
        { href: '#', label: 'Digital Issue' },
        { href: '/community', label: 'Community' },
        { href: '/phta-news', label: 'PHTA News' },
      ],
    },
    secondary: {
      items: [
        { href: '/page/about-us', label: 'About Us' },
        { href: '/subscribe', label: 'Subscribe' },
        { href: 'https://info.aquamagazine.com', label: 'Advertise', target: '_blank' },
        { href: '/contact-us', label: 'Contact Us' },
        { href: '/media-galleries', label: 'Photo Galleries' },
        { href: '/events', label: 'Events' },
      ],
    },
    footer: {
      items: [
        { href: '/page/about-us', label: 'About Us' },
        { href: '/subscribe', label: 'Subscribe' },
        { href: 'https://info.aquamagazine.com', label: 'Advertise', target: '_blank' },
        { href: '#', label: 'Digital Issue' },
        { href: '/contact-us', label: 'Contact Us' },
        { href: '/page/privacy-policy', label: 'Privacy Policy' },
        { href: '/page/terms-of-use', label: 'Terms of Use' },
      ],
    },
    menu: {
      topics: {
        label: 'Topics',
        items: [
          { href: '/news', label: 'News' },
          { href: '/features', label: 'Features' },
          { href: 'https://library.aquamagazine.com', label: 'Content Library', target: '_blank' },
          { href: '/buyers-guide', label: 'Buyers Guide' },
          { href: '#', label: 'Digital Issue' },
          { href: '/community', label: 'Community' },
          { href: '/phta-news', label: 'PHTA News' },
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
          { href: 'https://info.aquamagazine.com', label: 'Advertise', target: '_blank' },
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
    newsletters: 'https://formdesigner.ecn5.com/GetForm?tokenuid=73f77203-471d-4b58-a73a-0fc118a686e2',
    publications: {
      '/subscribe/print/am': 'https://formdesigner.ecn5.com/GetForm?tokenuid=73f77203-471d-4b58-a73a-0fc118a686e2',
    },
  },
  magazines: {
    description: 'AQUA Magazine is the top resource for retailers, builders, and service professionals in the spa and pool industry. Every month, thousands of industry professionals turn to AQUA for its valuable mix of news, trends and product coverage.',
  },
  contactUs: {
    branding: {
      bgColor: '#005bb1',
      logo: 'https://base.imgix.net/files/base/abm/am/logo.png?h=60',
    },
  },
};
