const ads = require('./ads');

module.exports = {
  ads,
  logos: {
    navbar: {
      src: 'https://base.imgix.net/files/base/pennwell/de/logo.png?h=30',
      srcset: [
        'https://base.imgix.net/files/base/pennwell/de/logo.png?h=60 2x',
      ],
    },
    footer: {
      src: 'https://base.imgix.net/files/base/pennwell/de/logo.png?h=50',
      srcset: [
        'https://base.imgix.net/files/base/pennwell/de/logo.png?h=100 2x',
      ],
    },
  },
  socialMediaLinks: [
    { provider: 'linkedin', href: 'https://www.linkedin.com/company/dental-economics?trk=biz-brand-tree-co-name' },
    { provider: 'twitter', href: 'https://twitter.com/dentalmagazine' },
    { provider: 'facebook', href: 'https://www.facebook.com/DentalEconomics' },
  ],
  primaryNavItems: [
    { href: '/macro-op-ed', label: 'Macro/Op-Ed' },
    { href: '/practice', label: 'Practice' },
    { href: '/science-tech', label: 'Science & Tech' },
    { href: '/money', label: 'Money' },
    { href: '/dental-office-design', label: 'Dental Office Design' },
  ],
  secondaryNavItems: [
    { href: '/subscribe', label: 'Subscribe' },
    { href: '/magazine', label: 'Magazine' },
    { href: '/videos', label: 'Videos' },
    { href: '/page/about-us', label: 'About Us' },
    { href: 'https://www.dentalacademyofce.com', label: 'Earn CE' },
    { href: 'https://www.dentistryiq.com/products/free-samples', label: 'Free Samples' },
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
  gtmContainer: 'GTM-5QGXLHV',
  search: {
    engine: 'google',
    apiKey: '003355913687346718228:266mmrxk-zy',
  },
  subscriptions: {
    newsletters: 'https://formdesigner.ecn5.com/GetForm?tokenuid=a56c9d44-88f6-452a-9f61-92d48166c3a9',
    publications: {
      '/subscribe/print/de': 'https://formdesigner.ecn5.com/GetForm?tokenuid=23bc4b5b-b782-4528-9f82-2885d603eb5e&promoCode=N9WEB&utm_source=mag_sub&utm_medium=website&utm_campaign=N9WEB&utm_content=2019-02-26',
    },
  },
  magazines: {
    description: 'Dental Economics is the leading business journal for the dental profession. For more than 100 years, DE has helped dentists improve their practices through sound business advice and updates on new products, techniques, and technologies. Magazine subscriptions are free to dentists and select groups of dental professionals. Each month, DE also publishes e-newsletters on specialized topics. DE partners with DentistryIQ.com to deliver current information on practice management, dental products, and clincial improvement.',
  },
};
