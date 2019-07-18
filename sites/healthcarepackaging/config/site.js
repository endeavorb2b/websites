const ads = require('./ads');

module.exports = {
  ads,
  company: 'PMMI Media Group',
  logos: {
    navbar: {
      src: 'https://base.imgix.net/files/base/pmmi/hp/logo.png?h=50',
      srcset: [
        'https://base.imgix.net/files/base/pmmi/hp/logo.png?h=100 2x',
      ],
    },
    footer: {
      src: 'https://base.imgix.net/files/base/pmmi/hp/logo.png?h=60',
      srcset: [
        'https://base.imgix.net/files/base/pmmi/hp/logo.png?h=120 2x',
      ],
    },
  },
  socialMediaLinks: [],
  navigation: {
    primary: {
      items: [
        { href: 'http://www.pharmaexpo.com', label: 'Pack Expo Shows', target: '_blank' },
        { href: '/markets', label: 'Markets' },
        { href: '/hot-topics', label: 'Hot Topics' },
        { href: '/design', label: 'Design' },
        { href: '/materials', label: 'Materials' },
        { href: '/machinery', label: 'Machinery' },
        { href: '/video', label: 'Video' },
      ],
    },
    secondary: {
      items: [
        { href: '/subscribe', label: 'Subscribe' },
        { href: '/page/media-kit', label: 'Media Kit' },
        { href: '/magazine', label: 'Digital Edition' },
        { href: '/playbooks', label: 'Playbooks' },
        { href: 'https://pmmi.org/hall-of-fame', label: 'Hall of Fame', target: '_blank' },
        { href: '/events', label: 'Industry Events' },
      ],
    },
    footer: {
      items: [
        { href: '/', label: 'Home' },
        { href: '/subscribe', label: 'Subscribe' },
        { href: 'http://www.summitmediagroup.com/hcp/healthcare-packaging', label: 'Advertise', target: '_blank' },
        { href: '/contact-us', label: 'Contact Us' },
        { href: '#', label: 'RSS Feed' },
        { href: '/page/privacy-policy', label: 'Privacy' },
        { href: '/page/advertising-terms-conditions', label: 'Advertising Terms and Conditions' },
      ],
    },
    menu: {
      topics: {
        label: 'Topics',
        items: [
          { href: 'http://www.pharmaexpo.com', label: 'Pack Expo Shows', target: '_blank' },
          { href: '/markets', label: 'Markets' },
          { href: '/hot-topics', label: 'Hot Topics' },
          { href: '/design', label: 'Design' },
          { href: '/materials', label: 'Materials' },
          { href: '/machinery', label: 'Machinery' },
          { href: '/video', label: 'Video' },
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
          { href: 'http://www.summitmediagroup.com/hcp/healthcare-packaging', label: 'Advertise', target: '_blank' },
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
    newsletters: 'https://www.healthcarepackaging.com/healthcare-packaging-newsletters',
    publications: {
      '/subscribe/print/hp': 'https://pmmi.dragonforms.com/HCPsubscription?pk=HCPMagNav?HCP%2525252525252520Mag%2525252525252520Priority%2525252525252520Code=HCPOnlineSubmission&HCP%2525252525252520Mag%2525252525252520Priority%2525252525252520Code=HCPOnlineSubmission',
    },
  },
  magazines: {
    description: 'Your source for news, trends and analysis of pharmaceuticals, biologics, medical devices, and nutraceuticals',
  },
  contactUs: {
    branding: {
      bgColor: '#2aafdf',
      logo: 'https://base.imgix.net/files/base/pmmi/hp/logo.png?h=60',
    },
  },
};
