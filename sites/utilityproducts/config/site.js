const ads = require('./ads');
const nativeX = require('./native-x');

module.exports = {
  ads,
  nativeX,
  logos: {
    navbar: {
      src: 'https://base.imgix.net/files/base/pennwell/up/logo.png?h=60',
      srcset: [
        'https://base.imgix.net/files/base/pennwell/up/logo.png?h=120 2x',
      ],
    },
    footer: {
      src: 'https://base.imgix.net/files/base/pennwell/up/logo.png?h=60',
      srcset: [
        'https://base.imgix.net/files/base/pennwell/up/logo.png?h=120 2x',
      ],
    },
  },
  socialMediaLinks: [
    { provider: 'linkedin', href: 'https://www.linkedin.com/company/utility-products?trk=other_brands_logo' },
    { provider: 'twitter', href: 'http://twitter.com/UtilityProducts' },
    { provider: 'facebook', href: 'http://www.facebook.com/pages/Utility-Products-Magazine/133739816672957' },
  ],
  navigation: {
    primary: {
      items: [
        { href: '/transmission-distribution', label: 'Transmission & Distribution' },
        { href: '/vehicles-accessories', label: 'Vehicles & Accessories' },
        { href: '/tools-supplies', label: 'Tools & Supplies' },
        { href: '/safety', label: 'Safety' },
        { href: '/line-construction-maintenance', label: 'Line Construction & Maintenance' },
        { href: '/test-measurement', label: 'Test & Measurement' },
      ],
    },
    secondary: {
      items: [
        { href: '/subscribe', label: 'Subscribe' },
        { href: '/magazine', label: 'Magazine' },
        { href: '/videos', label: 'Videos' },
        { href: '/page/advertise', label: 'Advertise' },
        { href: '/page/about-us', label: 'About Us' },
      ],
    },
    footer: {
      items: [
        { href: '/page/about-us', label: 'About Us' },
        { href: '/subscribe', label: 'Subscribe' },
        { href: '/contact-us', label: 'Contact Us' },
        { href: 'https://www.endeavorbusinessmedia.com/privacy-policy', label: 'Privacy Policy', target: '_blank' },
        { href: 'https://www.endeavorbusinessmedia.com/endeavor-terms', label: 'Terms & Conditions', target: '_blank' },
      ],
    },
    menu: {
      topics: {
        label: 'Topics',
        items: [
          { href: '/transmission-distribution', label: 'Transmission & Distribution' },
          { href: '/vehicles-accessories', label: 'Vehicles & Accessories' },
          { href: '/tools-supplies', label: 'Tools & Supplies' },
          { href: '/safety', label: 'Safety' },
          { href: '/line-construction-maintenance', label: 'Line Construction & Maintenance' },
          { href: '/test-measurement', label: 'Test & Measurement' },
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
          { href: '/page/advertise', label: 'Advertise' },
          { href: '/page/about-us', label: 'About Us' },
          { href: '/contact-us', label: 'Contact Us' },
          { href: 'https://www.endeavorbusinessmedia.com/privacy-policy', label: 'Privacy Policy', target: '_blank' },
          { href: 'https://www.endeavorbusinessmedia.com/endeavor-terms', label: 'Terms & Conditions', target: '_blank' },
        ],
      },
    },
  },
  gtmContainer: 'GTM-PSGKX8S',
  search: {
    engine: 'google',
    apiKey: '003355913687346718228:mb2grfhfx08',
  },
  subscriptions: {
    newsletters: 'https://endeavor.dragonforms.com/loading.do?omedasite=UPPrefPage',
    publications: {
      '/subscribe/print/up': 'https://formdesigner.ecn5.com/GetForm?tokenuid=e97538ee-c358-44e2-9cb2-ccd37cdd79ae&promoCode=N9WEB&utm_source=mag_sub&utm_medium=website&utm_campaign=N9WEB&utm_content=2019-02-26',
    },
  },
  magazines: {
    description: 'Utility Products serves readers who work in electric, cable and telecom utilities, as well as contractors, manufacturers, suppliers and other service companies who support these utilities. ',
  },
  contactUs: {
    branding: {
      bgColor: '#494232',
      logo: 'https://base.imgix.net/files/base/pennwell/up/logo.png?h=60',
    },
    to: 'clong@pennwell.com',
  },
  wufoo: {
    userName: 'cygnuscorporate',
  },
};
