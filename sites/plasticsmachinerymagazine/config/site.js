const ads = require('./ads');

module.exports = {
  ads,
  logos: {
    navbar: {
      src: 'https://base.imgix.net/files/base/ebm/pmm/image/static/logo/site_logo.png',
      srcset: [
        'https://base.imgix.net/files/base/ebm/pmm/image/static/logo/site_logo.png 2x',
      ],
    },
    footer: {
      src: 'https://base.imgix.net/files/base/ebm/pmm/image/static/logo/site_logo.png',
      srcset: [
        'https://base.imgix.net/files/base/ebm/pmm/image/static/logo/site_logo.png 2x',
      ],
    },
  },
  socialMediaLinks: [
    { provider: 'linkedin', href: 'https://www.linkedin.com/company/plastics-machinery-magazine' },
    { provider: 'twitter', href: 'https://twitter.com/PlasticsMM' },
  ],
  navigation: {
    primary: {
      items: [
        { href: '/additive-manufacturing', label: 'Additive Manufacturing' },
        { href: '/blow-molding', label: 'Blow Molding' },
        { href: '/thermoforming', label: 'Thermoforming' },
        { href: '/compounding', label: 'Compounding' },
        { href: '/injection-molding', label: 'Injection Molding' },
        { href: '/extrusion', label: 'Extrusion' },
        { href: '/recycling', label: 'Recycling' },
        { href: '/molds-tooling', label: 'Molds & Tooling' },
        { href: '/rotomolding', label: 'Rotomolding' },
      ],
    },
    secondary: {
      items: [
        { href: '/subscribe', label: 'Subscribe' },
        { href: '/magazine', label: 'In Print' },
        { href: '/advertise', label: 'Advertise' },
        { href: '/contact-us', label: 'Contact Us' },
      ],
    },
    footer: {
      items: [
        { href: '/page/about-us', label: 'About Us' },
        { href: '/contact-us', label: 'Contact Us' },
        { href: '/page/advertise', label: 'Advertise' },
        { href: 'https://www.endeavorbusinessmedia.com/privacy-policy', label: 'Privacy Policy', target: '_blank' },
        { href: 'https://www.endeavorbusinessmedia.com/endeavor-terms', label: 'Terms & Conditions', target: '_blank' },
      ],
    },
    menu: {
      topics: {
        label: 'Topics',
        items: [
          { href: '/additive-manufacturing', label: 'Additive Manufacturing' },
          { href: '/blow-molding', label: 'Blow Molding' },
          { href: '/thermoforming', label: 'Thermoforming' },
          { href: '/compounding', label: 'Compounding' },
          { href: '/injection-molding', label: 'Injection Molding' },
          { href: '/extrusion', label: 'Extrusion' },
          { href: '/recycling', label: 'Recycling' },
          { href: '/molds-tooling', label: 'Molds & Tooling' },
          { href: '/rotomolding', label: 'Rotomolding' },
        ],
      },
      resources: {
        label: 'Resources',
        items: [
          { href: '/magazine', label: 'Magazine' },
          { href: '/videos', label: 'Videos' },
          { href: '/white-papers', label: 'White Papers' },
          { href: '/webcasts', label: 'Webcasts' },
        ],
      },
      userTools: {
        label: 'User Tools',
        items: [
          { href: '/subscribe', label: 'Subscribe' },
          { href: '/advertise', label: 'Advertise' },
          { href: '/page/about-us', label: 'About Us' },
          { href: '/contact-us', label: 'Contact Us' },
          { href: 'https://www.endeavorbusinessmedia.com/privacy-policy', label: 'Privacy Policy', target: '_blank' },
          { href: 'https://www.endeavorbusinessmedia.com/endeavor-terms', label: 'Terms & Conditions', target: '_blank' },
        ],
      },
    },
  },
  gtmContainer: 'GTM-KBM372Z',
  search: {
    engine: 'google',
    apiKey: '017383739850048358259:alxsug09xai',
  },
  subscriptions: {
    newsletters: 'https://www.plasticsmachinerymagazine.com/subscribe/email',
    publications: {
      '/subscribe/print/pmm': 'https://endeavor.dragonforms.com/init.do?omedasite=pmm_new',
    },
  },
  magazines: {
    description: '',
  },
  contactUs: {
    branding: {
      bgColor: '#b41f24',
      logo: 'https://base.imgix.net/files/base/ebm/pmm/image/static/logo/site_logo.png',
    },
  },
  wufoo: {
    userName: 'cygnuscorporate',
  },
};
