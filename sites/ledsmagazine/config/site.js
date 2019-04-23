const ads = require('./ads');

module.exports = {
  ads,
  logos: {
    navbar: {
      src: 'https://base.imgix.net/files/base/pennwell/leds/logo.png?h=30',
      srcset: [
        'https://base.imgix.net/files/base/pennwell/leds/logo.png?h=60 2x',
      ],
    },
    footer: {
      src: 'https://base.imgix.net/files/base/pennwell/leds/logo.png?h=50',
      srcset: [
        'https://base.imgix.net/files/base/pennwell/leds/logo.png?h=100 2x',
      ],
    },
  },
  socialMediaLinks: [
    { provider: 'linkedin', href: 'https://www.linkedin.com/showcase/leds-magazine/' },
    { provider: 'twitter', href: 'https://twitter.com/ledsmagazine' },
    { provider: 'facebook', href: 'https://www.facebook.com/LEDsMagazine?fref=ts' },
  ],
  primaryNavItems: [
    { href: '/leds-ssl-design', label: 'LEDs & SSL Design' },
    { href: '/manufacturing-services-testing', label: 'Manufacturing Services & Testing' },
    { href: '/architectural-lighting', label: 'Architectural Lighting' },
    { href: '/smart-lighting-iot', label: 'Smart Lighting & IoT' },
    { href: '/specialty-ssl', label: 'Specialty SSL' },
    { href: '/horticultural-lighting', label: 'Horticultural Lighting' },
  ],
  secondaryNavItems: [
    { href: '/subscribe', label: 'Subscribe' },
    { href: '/magazine', label: 'Magazine' },
    { href: '/videos', label: 'Videos' },
    { href: '/page/about-us', label: 'About Us' },
  ],
  menuItems: {
    resources: [
      { href: '/magazine', label: 'Magazine' },
      { href: '/videos', label: 'Videos' },
      { href: '/white-papers', label: 'Whitepapers' },
      { href: '/webcasts', label: 'Webcasts' },
    ],
    userTools: [
      { href: '/subscribe', label: 'Subscribe' },
      { href: '/advertise', label: 'Advertise' },
      { href: '/page/about-us', label: 'About Us' },
      { href: '/contact-us', label: 'Contact Us' },
      { href: 'https://www.endeavorbusinessmedia.com/privacy-policy', label: 'Privacy Policy' },
      { href: 'https://www.endeavorbusinessmedia.com/endeavor-terms', label: 'Terms & Conditions' },
    ],
  },
  gtmContainer: 'GTM-T29NVLB',
  search: {
    engine: 'google',
    apiKey: '003355913687346718228:m_5jkc8w8fq',
  },
  subscriptions: {
    newsletters: 'https://formdesigner.ecn5.com/GetForm?tokenuid=25ab9782-5598-4ac2-af33-91a1d7ece79f&promoCode=WENL2019&utm_source=enl_sub&utm_medium=website&utm_campaign=WENL2019&utm_content=2019-02-25',
    publications: {
      '/subscribe/print/leds': 'https://eforms.kmpsgroup.com/PaidForms/paidform.aspx?formid=94&promoCode-NW2019PD=&utm_source=mag_sub&utm_medium=website&utm_campaign=NW2019PD&utm_content=2019-02-25',
    },
  },
  magazines: {
    description: '',
  },
};
