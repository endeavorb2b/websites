const ads = require('./ads');
const nativeX = require('./native-x');

module.exports = {
  ads,
  nativeX,
  logos: {
    navbar: {
      src: 'https://base.imgix.net/files/base/pennwell/ias/logo.png?h=60',
      srcset: [
        'https://base.imgix.net/files/base/pennwell/ias/logo.png?h=120 2x',
      ],
    },
    footer: {
      src: 'https://base.imgix.net/files/base/pennwell/ias/logo.png?h=60',
      srcset: [
        'https://base.imgix.net/files/base/pennwell/ias/logo.png?h=120 2x',
      ],
    },
  },
  socialMediaLinks: [
    { provider: 'linkedin', href: 'https://www.linkedin.com/company/intelligent-aerospace' },
    { provider: 'twitter', href: 'https://twitter.com/intelligentaero' },
    { provider: 'facebook', href: 'https://www.facebook.com/intelligentaerospace/' },
  ],
  navigation: {
    primary: {
      items: [
        { href: '/commercial', label: 'Commercial' },
        { href: '/military', label: 'Military' },
        { href: '/avionics', label: 'Avionics' },
        { href: '/atc-atm', label: 'ATC/ATM' },
        { href: '/helicopter', label: 'Helicopter' },
        { href: '/satcom', label: 'SATCOM' },
        { href: '/unmanned', label: 'Unmanned' },
      ],
    },
    secondary: {
      items: [
        { href: '/subscribe', label: 'Subscribe' },
        { href: '/videos', label: 'Videos' },
        { href: '/white-papers', label: 'White Papers' },
        { href: '/webcasts', label: 'Webcasts' },
        { href: 'https://buyersguide.mae.pennnet.com/index.html', label: 'Buyer\'s Guide', target: '_blank' },
        { href: 'https://militaryawards.secure-platform.com/a', label: 'Awards', target: '_blank' },
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
          { href: '/commercial', label: 'Commercial' },
          { href: '/military', label: 'Military' },
          { href: '/avionics', label: 'Avionics' },
          { href: '/atc-atm', label: 'ATC/ATM' },
          { href: '/helicopter', label: 'Helicopter' },
          { href: '/satcom', label: 'SATCOM' },
          { href: '/unmanned', label: 'Unmanned' },
        ],
      },
      resources: {
        label: 'Resources',
        items: [
          { href: '/videos', label: 'Videos' },
          { href: '/white-papers', label: 'White Papers' },
          { href: '/webcasts', label: 'Webcasts' },
          { href: '/blogs/howards-tower', label: 'Howard\'s Tower' },
          { href: '/paris-air-show', label: 'Paris Air Show' },
          { href: 'https://buyersguide.mae.pennnet.com/index.html', label: 'Buyer\'s Guide', target: '_blank' },
          { href: 'https://militaryawards.secure-platform.com/a', label: 'Awards', target: '_blank' },
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
  gtmContainer: 'GTM-T5KLFDK',
  search: {
    engine: 'google',
    apiKey: '003355913687346718228:idbh6wzoxxo',
  },
  subscriptions: {
    newsletters: 'https://endeavor.dragonforms.com/loading.do?omedasite=IAPrefPage',
    publications: {
      '/subscribe/print/mae': 'https://formdesigner.ecn5.com/GetForm?tokenuid=046345a9-19bb-4e6d-b034-e69baa602f10&promoCode=NW2019&utm_source=mag_sub&utm_medium=website&utm_campaign=NW2019&utm_content=2019-02-25',
    },
  },
  contactUs: {
    branding: {
      bgColor: '#1d7042',
      logo: 'https://base.imgix.net/files/base/pennwell/ias/logo.png?h=60',
    },
    to: 'juliac@pennwell.com',
  },
  wufoo: {
    userName: 'cygnuscorporate',
  },
};
