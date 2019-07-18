const ads = require('./ads');
const identityX = require('./identity-x');
const nativeX = require('./native-x');
const userLinks = require('./user-links');

module.exports = {
  ads,
  identityX,
  nativeX,
  logos: {
    navbar: {
      src: 'https://base.imgix.net/files/base/pennwell/ogj/logo.png?h=60',
      srcset: [
        'https://base.imgix.net/files/base/pennwell/ogj/logo.png?h=120 2x',
      ],
    },
    footer: {
      src: 'https://base.imgix.net/files/base/pennwell/ogj/logo.png?h=60',
      srcset: [
        'https://base.imgix.net/files/base/pennwell/ogj/logo.png?h=120 2x',
      ],
    },
  },
  socialMediaLinks: [
    { provider: 'linkedin', href: 'https://www.linkedin.com/company/oil-&-gas-journal' },
    { provider: 'twitter', href: 'http://twitter.com/ogjonline' },
    { provider: 'facebook', href: 'http://www.facebook.com/ogjonline' },
  ],
  navigation: {
    primary: {
      items: [
        { href: '/general-interest', label: 'General Interest' },
        { href: '/exploration-development', label: 'Exploration & Development' },
        { href: '/drilling-production', label: 'Drilling & Production' },
        { href: '/refining-processing', label: 'Refining & Processing' },
        { href: '/pipelines-transportation', label: 'Pipelines & Transportation' },
      ],
    },
    secondary: {
      items: [
        { href: '/subscribe', label: 'Subscribe' },
        { href: '/magazine', label: 'Magazine' },
        { href: '/magazine/5ca3d91475a2545c040041a9', label: 'Past Issues' },
        { href: '/ogj-survey-downloads', label: 'Surveys' },
        { href: '/industry-statistics', label: 'Industry Statistics' },
        { href: '/page/about-us', label: 'About Us' },
      ],
    },
    tertiary: {
      items: [
        ...userLinks,
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
          { href: '/general-interest', label: 'General Interest' },
          { href: '/exploration-development', label: 'Exploration & Development' },
          { href: '/drilling-production', label: 'Drilling & Production' },
          { href: '/refining-processing', label: 'Refining & Processing' },
          { href: '/pipelines-transportation', label: 'Pipelines & Transportation' },
        ],
      },
      resources: {
        label: 'Resources',
        items: [
          { href: '/events', label: 'Events' },
          { href: '/magazine', label: 'Magazine' },
          { href: '/magazine/5ca3d91475a2545c040041a9', label: 'Past Issues' },
          { href: '/videos', label: 'Videos' },
          { href: '/white-papers', label: 'White Papers' },
          { href: '/webcasts', label: 'Webcasts' },
          { href: 'https://www.pennwellbooks.com/categories/petroleum.html', label: 'Bookstore' },
          { href: 'https://ogjresearch.com/', label: 'Research' },
          { href: '/ogj-survey-downloads', label: 'Surveys' },
          { href: '/industry-statistics', label: 'Industry Statistics' },
          { href: '/page/submit-article', label: 'Submit an Article' },
        ],
      },
      userTools: {
        label: 'User Tools',
        items: [
          ...userLinks,
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
  gtmContainer: 'GTM-N253PL7',
  search: {
    engine: 'google',
    apiKey: '003355913687346718228:t6qdcjgnqpk',
  },
  subscriptions: {
    newsletters: 'https://endeavor.dragonforms.com/loading.do?omedasite=OGJPrefPage',
    publications: {
      '/subscribe/print/ogj': 'https://formdesigner.ecn5.com/GetForm?tokenuid=2455740f-950f-4ec5-b983-7088b8e2d84d&promoCode=NE9WEB&utm_source=mag_sub&utm_medium=website&utm_campaign=NE9WEB&utm_content=2019-02-26',
    },
  },
  magazines: {
    description: '',
  },
  contactUs: {
    branding: {
      bgColor: '#212529',
      logo: 'https://base.imgix.net/files/base/pennwell/ogj/logo.png?h=60',
    },
    to: 'pwestervelt@pennwell.com',
  },
  wufoo: {
    userName: 'cygnuscorporate',
  },
};
