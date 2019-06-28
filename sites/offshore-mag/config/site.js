const ads = require('./ads');
const nativeX = require('./native-x');

module.exports = {
  ads,
  nativeX,
  logos: {
    navbar: {
      src: 'https://base.imgix.net/files/base/pennwell/os/logo.png?h=60',
      srcset: [
        'https://base.imgix.net/files/base/pennwell/os/logo.png?h=120 2x',
      ],
    },
    footer: {
      src: 'https://base.imgix.net/files/base/pennwell/os/logo.png?h=60',
      srcset: [
        'https://base.imgix.net/files/base/pennwell/os/logo.png?h=120 2x',
      ],
    },
  },
  socialMediaLinks: [
    { provider: 'linkedin', href: 'https://www.linkedin.com/company/offshore-magazine' },
    { provider: 'twitter', href: 'https://twitter.com/offshoremgzn' },
    { provider: 'facebook', href: 'https://www.facebook.com/offshoremagazine' },
  ],
  primaryNavItems: [
    { href: '/regional-reports', label: 'Regional Reports' },
    { href: '/drilling-completion', label: 'Drilling & Completion' },
    { href: '/field-development', label: 'Field Development' },
    { href: '/subsea', label: 'Subsea' },
    { href: '/geosciences', label: 'Geosciences' },
    { href: '/pipelines', label: 'Pipelines' },
    { href: '/production', label: 'Production' },
    { href: '/rigs-vessels', label: 'Rigs/Vessels' },
    { href: '/deepwater', label: 'Deepwater' },
    { href: '/business-briefs', label: 'Business Briefs' },
  ],
  secondaryNavItems: [
    { href: '/subscribe', label: 'Subscribe' },
    { href: '/magazine', label: 'Magazine' },
    { href: '/videos', label: 'Videos' },
    { href: '/webcasts', label: 'Webcasts' },
    { href: '/events', label: 'Events' },
    { href: '/page/about-us', label: 'About Us' },
  ],
  footerNavItems: [
    { href: '/page/about-us', label: 'About Us' },
    { href: '/contact-us', label: 'Contact Us' },
    { href: '/page/advertise', label: 'Advertise' },
    { href: 'https://www.endeavorbusinessmedia.com/privacy-policy', label: 'Privacy Policy', target: '_blank' },
    { href: 'https://www.endeavorbusinessmedia.com/endeavor-terms', label: 'Terms & Conditions', target: '_blank' },
  ],
  menuItems: {
    resources: [
      { href: '/resources/maps-posters', label: 'Maps & Posters' },
      { href: '/magazine', label: 'Magazine' },
      { href: '/videos', label: 'Videos' },
      { href: '/white-papers', label: 'White Papers' },
      { href: '/webcasts', label: 'Webcasts' },
      { href: '/events', label: 'Events' },
    ],
    userTools: [
      { href: '/subscribe', label: 'Subscribe' },
      { href: '/page/advertise', label: 'Advertise' },
      { href: '/page/about-us', label: 'About Us' },
      { href: '/contact-us', label: 'Contact Us' },
      { href: 'https://www.endeavorbusinessmedia.com/privacy-policy', label: 'Privacy Policy', target: '_blank' },
      { href: 'https://www.endeavorbusinessmedia.com/endeavor-terms', label: 'Terms & Conditions', target: '_blank' },
    ],
  },
  gtmContainer: 'GTM-PQK8MQK',
  search: {
    engine: 'google',
    apiKey: '003355913687346718228:jon24h47vcu',
  },
  subscriptions: {
    newsletters: 'https://endeavor.dragonforms.com/loading.do?omedasite=OFFPrefPage',
    publications: {
      '/subscribe/print/os': 'https://formdesigner.ecn5.com/GetForm?tokenuid=84e20b11-0e4c-4b5b-9fbb-a86d1fff43c2&promoCode=N9WEB&utm_source=mag_sub&utm_medium=website&utm_campaign=N9WEB&utm_content=2019-02-26',
    },
  },
  magazines: {
    description: 'Offshore magazine covers the global trends and technologies for offshore oil and gas operations. Offshore covers the latest news, market trends, and products relative to oil and gas E&P operations. Each monthly issue contains current topics, special reports, in-depth interviews with industry executives, maps of the hottest offshore E&P areas and posters of important offshore technologies.',
  },
  contactUs: {
    branding: {
      bgColor: '#094e85',
      logo: 'https://base.imgix.net/files/base/pennwell/os/logo.png?h=60',
    },
    to: 'pwestervelt@pennwell.com',
  },
  wufoo: {
    userName: 'cygnuscorporate',
  },
};
