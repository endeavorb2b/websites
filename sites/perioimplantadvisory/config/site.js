const ads = require('./ads');
const nativeX = require('./native-x');

module.exports = {
  ads,
  nativeX,
  logos: {
    navbar: {
      src: 'https://base.imgix.net/files/base/pennwell/pia/logo.png?h=60',
      srcset: [
        'https://base.imgix.net/files/base/pennwell/pia/logo.png?h=120 2x',
      ],
    },
    footer: {
      src: 'https://base.imgix.net/files/base/pennwell/pia/logo.png?h=60',
      srcset: [
        'https://base.imgix.net/files/base/pennwell/pia/logo.png?h=120 2x',
      ],
    },
  },
  socialMediaLinks: [
    { provider: 'linkedin', href: 'https://www.linkedin.com/company/surgical-restorative-resource?trk=other_brands_name' },
    { provider: 'twitter', href: 'https://twitter.com/PI_Advisory' },
    { provider: 'facebook', href: 'https://www.facebook.com/SurgicalRR' },
  ],
  navigation: {
    primary: {
      items: [
        { href: '/clinical-tips', label: 'Clinical Tips' },
        { href: '/dental-implants', label: 'Dental Implants' },
        { href: '/periodontics', label: 'Periodontics' },
        { href: '/practice-management', label: 'Practice Management' },
        { href: '/restorative-dentistry', label: 'Restorative Dentistry' },
      ],
    },
    secondary: {
      items: [
        { href: '/subscribe', label: 'Subscribe' },
        { href: '/page/about-us', label: 'About Us' },
        { href: 'https://pennwell.myabsorb.com', label: 'Earn CE', target: '_blank' },
        { href: 'https://www.dentistryiq.com/products/free-samples', label: 'Free Samples', target: '_blank' },
      ],
    },
    footer: {
      items: [
        { href: '/page/about-us', label: 'About Us' },
        { href: '/contact-us', label: 'Contact Us' },
        { href: 'https://www.dentistryiq.com/page/advertise', label: 'Advertise', target: '_blank' },
        { href: 'https://www.endeavorbusinessmedia.com/privacy-policy', label: 'Privacy Policy', target: '_blank' },
        { href: 'https://www.endeavorbusinessmedia.com/endeavor-terms', label: 'Terms & Conditions', target: '_blank' },
      ],
    },
    menu: {
      topics: {
        label: 'Topics',
        items: [
          { href: '/clinical-tips', label: 'Clinical Tips' },
          { href: '/dental-implants', label: 'Dental Implants' },
          { href: '/periodontics', label: 'Periodontics' },
          { href: '/practice-management', label: 'Practice Management' },
          { href: '/restorative-dentistry', label: 'Restorative Dentistry' },
        ],
      },
      resources: {
        label: 'Resources',
        items: [
          { href: '/videos', label: 'Videos' },
          { href: '/white-papers', label: 'White Papers' },
          { href: '/webcasts', label: 'Webcasts' },
          { href: 'https://pennwell.myabsorb.com', label: 'Earn CE', target: '_blank' },
          { href: 'https://www.dentistryiq.com/products/free-samples', label: 'Free Samples', target: '_blank' },
        ],
      },
      userTools: {
        label: 'User Tools',
        items: [
          { href: '/subscribe', label: 'Subscribe' },
          { href: 'https://www.dentistryiq.com/page/advertise', label: 'Advertise', target: '_blank' },
          { href: '/page/about-us', label: 'About Us' },
          { href: '/contact-us', label: 'Contact Us' },
          { href: 'https://www.endeavorbusinessmedia.com/privacy-policy', label: 'Privacy Policy', target: '_blank' },
          { href: 'https://www.endeavorbusinessmedia.com/endeavor-terms', label: 'Terms & Conditions', target: '_blank' },
        ],
      },
    },
  },
  gtmContainer: 'GTM-WVXHH29',
  search: {
    engine: 'google',
    apiKey: '003355913687346718228:u8wtuvfsr0c',
  },
  subscriptions: {
    newsletters: 'https://formdesigner.ecn5.com/GetForm?tokenuid=a56c9d44-88f6-452a-9f61-92d48166c3a9',
  },
  contactUs: {
    branding: {
      bgColor: '#000',
      logo: 'https://base.imgix.net/files/base/pennwell/pia/logo.png?h=60',
    },
    to: 'zacharyk@pennwell.com',
  },
  wufoo: {
    userName: 'cygnuscorporate',
  },
};
