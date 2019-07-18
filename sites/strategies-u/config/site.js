const ads = require('./ads');
const nativeX = require('./native-x');

module.exports = {
  ads,
  nativeX,
  logos: {
    navbar: {
      src: 'https://base.imgix.net/files/base/pennwell/su/logo.png?h=60',
      srcset: [
        'https://base.imgix.net/files/base/pennwell/su/logo.png?h=120 2x',
      ],
    },
    footer: {
      src: 'https://base.imgix.net/files/base/pennwell/su/logo.png?h=60',
      srcset: [
        'https://base.imgix.net/files/base/pennwell/su/logo.png?h=120 2x',
      ],
    },
  },
  navigation: {
    primary: {
      items: [
        { href: '/reports', label: 'Reports' },
        { href: '/page/custom-research', label: 'Custom Research' },
        { href: '/page/surveys', label: 'Surveys' },
        { href: '/analysts', label: 'Analysts' },
        { href: '/blogs', label: 'Blogs' },
        { href: '/press-releases', label: 'Press Releases' },
      ],
    },
    secondary: {
      items: [
        { href: '/videos', label: 'Videos' },
        { href: '/page/events-conferences', label: 'Events & Conferences' },
        { href: '/contact-us', label: 'Contact Us' },
        { href: '/page/about-us', label: 'About Us' },
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
          { href: '/reports', label: 'Reports' },
          { href: '/page/custom-research', label: 'Custom Research' },
          { href: '/page/surveys', label: 'Surveys' },
          { href: '/analysts', label: 'Analysts' },
          { href: '/blogs', label: 'Blogs' },
          { href: '/press-releases', label: 'Press Releases' },
        ],
      },
      resources: {
        label: 'Resources',
        items: [
          { href: '/videos', label: 'Videos' },
          { href: '/page/events-conferences', label: 'Events & Conferences' },
        ],
      },
      userTools: {
        label: 'User Tools',
        items: [
          { href: '/page/advertise', label: 'Advertise' },
          { href: '/page/about-us', label: 'About Us' },
          { href: '/contact-us', label: 'Contact Us' },
          { href: 'https://www.endeavorbusinessmedia.com/privacy-policy', label: 'Privacy Policy', target: '_blank' },
          { href: 'https://www.endeavorbusinessmedia.com/endeavor-terms', label: 'Terms & Conditions', target: '_blank' },
        ],
      },
    },
  },
  gtmContainer: 'GTM-56MD64K',
  search: {
    engine: 'google',
    apiKey: '003355913687346718228:ghlhotakfl0',
  },
  subscriptions: {
    publications: {
      '/subscribe/print/leds': 'https://eforms.kmpsgroup.com/PaidForms/paidform.aspx?formid=94&promoCode-NW2019PD=&utm_source=mag_sub&utm_medium=website&utm_campaign=NW2019PD&utm_content=2019-02-25',
      '/subscribe/print/lfw': 'https://formdesigner.ecn5.com/GetForm?tokenuid=28d2fe32-119b-468e-a58a-a7b564581eaf&promoCode=NW2019&utm_source=mag_sub&utm_medium=website&utm_campaign=NW2019&utm_content=2019-02-25',
      '/subscribe/print/bow': 'https://formdesigner.ecn5.com/GetForm?tokenuid=12d55674-b05c-4726-864f-83b3402778a1&promoCode=WENL2019&utm_source=enl_sub&utm_medium=website&utm_campaign=WENL2019&utm_content=2019-02-25',
      '/subscribe/print/ils': 'http://eforms.kmpsgroup.com/jointforms/Forms/Subscription.aspx?pubcode=ILSD&promoCode=WS702',
    },
  },
  magazines: {
    description: 'Strategies Unlimited offers comprehensive coverage of high-brightness LEDs and LED lighting and laser market sectors.',
  },
  contactUs: {
    branding: {
      bgColor: '#0b5392',
      logo: 'https://base.imgix.net/files/base/pennwell/su/logo.png?h=60',
    },
    to: 'juliac@pennwell.com',
  },
  wufoo: {
    userName: 'cygnuscorporate',
  },
};
