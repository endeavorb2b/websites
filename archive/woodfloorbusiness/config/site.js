const ads = require('./ads');

module.exports = {
  ads,
  company: 'Wood Floor Business',
  logos: {
    navbar: {
      src: 'https://base.imgix.net/files/base/abm/wfb/logo.png?h=60',
      srcset: [
        'https://base.imgix.net/files/base/abm/wfb/logo.png?h=120 2x',
      ],
    },
    footer: {
      src: 'https://base.imgix.net/files/base/abm/wfb/logo.png?h=60',
      srcset: [
        'https://base.imgix.net/files/base/abm/wfb/logo.png?h=120 2x',
      ],
    },
  },
  socialMediaLinks: [
    { provider: 'facebook', href: 'https://www.facebook.com/WoodFloorBusiness' },
    { provider: 'twitter', href: 'https://twitter.com/WFBusinessMag' },
    { provider: 'linkedin', href: 'https://www.linkedin.com/company/wood-floor-business/' },
    { provider: 'youtube', href: 'https://www.youtube.com/c/WoodFloorBusiness' },
    { provider: 'pinterest', href: 'http://www.pinterest.com/wfbiz/' },
    { provider: 'instagram', href: 'https://www.instagram.com/woodfloorbusiness/' },
  ],
  navigation: {
    primary: {
      items: [
        { href: '/articles', label: 'Articles' },
        { href: 'https://toolbox.woodfloorbusiness.com', label: 'Content Toolbox', target: '_blank' },
        { href: '/resource-book', label: 'Resource Book' },
        { href: '/news', label: 'News' },
        { href: 'https://www.woodfloorbusiness.com/forum', label: 'Forum', target: '_blank' },
        { href: '/magazine', label: 'Magazine' },
      ],
    },
    secondary: {
      items: [
        { href: '/blogs', label: 'Blogs' },
        { href: '/events', label: 'Calendar' },
        { href: '/classifieds', label: 'Classifieds' },
        { href: 'https://info.woodfloorbusiness.com', label: 'Advertise', target: '_blank' },
        { href: '/subscribe', label: 'Subscribe' },
        { href: '/contact-us', label: 'Contact Us' },
      ],
    },
    footer: {
      items: [
        { href: '/page/about-us', label: 'About Us' },
        { href: 'https://info.woodfloorbusiness.com', label: 'Advertise', target: '_blank' },
        { href: '/contact-us', label: 'Contact Us' },
        { href: '/resource-book', label: 'Resource Book' },
        { href: '/subscribe', label: 'Subscribe' },
        { href: '/page/privacy-policy', label: 'Privacy Policy' },
      ],
    },
    menu: {
      topics: {
        label: 'Topics',
        items: [
          { href: '/articles', label: 'Articles' },
          { href: 'https://toolbox.woodfloorbusiness.com', label: 'Content Toolbox', target: '_blank' },
          { href: '/resource-book', label: 'Resource Book' },
          { href: '/news', label: 'News' },
          { href: 'https://www.woodfloorbusiness.com/forum', label: 'Forum', target: '_blank' },
          { href: '/magazine', label: 'Magazine' },
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
          { href: 'https://info.woodfloorbusiness.com', label: 'Advertise', target: '_blank' },
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
    newsletters: 'https://formdesigner.ecn5.com/GetForm?tokenuid=64e770db-0334-40f5-b47b-fc498be4b638',
    publications: {
      '/subscribe/print/wfb': 'https://formdesigner.ecn5.com/GetForm?tokenuid=64e770db-0334-40f5-b47b-fc498be4b638',
    },
  },
  magazines: {
    description: 'For three decades, Wood Floor Business has been the leading trade publication serving our entire industry. We are committed to empowering wood flooring professionals and remaining an unbiased voice in the industry. Mailed seven times a year (including a directory of the wood flooring industry), WFB offers Helpful advice about installing, sanding, finishing and troubleshooting wood floors, The latest products in the wood flooring industry, and Useful info for running a wood flooring business',
  },
  contactUs: {
    branding: {
      bgColor: '#7cc242',
      logo: 'https://base.imgix.net/files/base/abm/wfb/logo.png?h=60',
    },
  },
};
