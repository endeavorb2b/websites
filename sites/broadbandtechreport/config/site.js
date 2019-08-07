const ads = require('./ads');
const nativeX = require('./native-x');

module.exports = {
  ads,
  nativeX,
  logos: {
    navbar: {
      src: 'https://base.imgix.net/files/base/pennwell/btr/btr-logo-navbar.png?h=60',
      srcset: [
        'https://base.imgix.net/files/base/pennwell/btr/btr-logo-navbar.png?h=120 2x',
      ],
    },
    footer: {
      src: 'https://base.imgix.net/files/base/pennwell/btr/logo.png?h=60',
      srcset: [
        'https://base.imgix.net/files/base/pennwell/btr/logo.png?h=120 2x',
      ],
    },
  },
  socialMediaLinks: [
    { provider: 'linkedin', href: 'https://www.linkedin.com/company/3998846' },
    { provider: 'twitter', href: 'http://twitter.com/BTReport' },
    { provider: 'facebook', href: 'https://www.facebook.com/BTReport' },
  ],
  navigation: {
    primary: {
      items: [
        { href: '/docsis', label: 'DOCSIS' },
        { href: '/fiber', label: 'Fiber' },
        { href: '/in-the-home', label: 'In the Home' },
        { href: '/wireless', label: 'Wireless' },
        { href: '/video', label: 'Video' },
        { href: '/business-services', label: 'Business Services' },
        { href: '/back-office', label: 'Back Office' },
        { href: '/test', label: 'Test' },
      ],
    },
    secondary: {
      items: [
        { href: '/subscribe', label: 'Subscribe' },
        { href: '/videos', label: 'Videos' },
        { href: '/white-papers', label: 'White Papers' },
        { href: '/webcasts', label: 'Webcasts' },
        { href: '/btr-america-latina', label: 'BTR America Latina' },
        { href: 'https://diamondtechreviews.secure-platform.com/a', label: 'Diamond Tech Reviews' },
        { href: '/on-topic', label: 'On Topic'},
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
          { href: '/docsis', label: 'DOCSIS' },
          { href: '/fiber', label: 'Fiber' },
          { href: '/in-the-home', label: 'In the Home' },
          { href: '/wireless', label: 'Wireless' },
          { href: '/video', label: 'Video' },
          { href: '/business-services', label: 'Business Services' },
          { href: '/back-office', label: 'Back Office' },
          { href: '/test', label: 'Test' },
        ],
      },
      resources: {
        label: 'Resources',
        items: [
          { href: '/videos', label: 'Videos' },
          { href: '/white-papers', label: 'White Papers' },
          { href: '/webcasts', label: 'Webcasts' },
          { href: '/btr-america-latina', label: 'BTR America Latina' },
          { href: 'https://diamondtechreviews.secure-platform.com/a', label: 'Diamond Tech Reviews' },
          { href: '/on-topic', label: 'On Topic' },
        ],
      },
      userTools: {
        label: 'User Tools',
        items: [
          { href: '/subscribe', label: 'Subscribe' },
          { href: '/page/advertise', label: 'Advertise' },
          { href: '/page/about-us', label: 'About Us' },
          { href: '/contact-us', label: 'Contact Us' },
          { href: 'https://www.endeavorbusinessmedia.com/privacy-policy', label: 'Privacy Policy', target: '_blank' },
          { href: 'https://www.endeavorbusinessmedia.com/endeavor-terms', label: 'Terms & Conditions', target: '_blank' },
        ],
      },
    },
  },
  gtmContainer: 'GTM-T3RWG44',
  search: {
    engine: 'google',
    apiKey: '003355913687346718228:yhsbqmtzmqw',
  },
  subscriptions: {
    newsletters: 'https://endeavor.dragonforms.com/loading.do?omedasite=BTRPrefPage',
  },
  magazines: {
    description: '',
  },
  contactUs: {
    branding: {
      bgColor: '#254497',
      logo: 'https://base.imgix.net/files/base/pennwell/btr/logo.png?h=60',
    },
    to: 'juliac@pennwell.com',
  },
  wufoo: {
    userName: 'cygnuscorporate',
  },
};
