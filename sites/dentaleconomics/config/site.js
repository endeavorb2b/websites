const ads = require('./ads');

module.exports = {
  ads,
  logo: {
    src: 'https://base.imgix.net/files/base/pennwell/de/logo.png?h=40',
    srcset: [
      'https://base.imgix.net/files/base/pennwell/de/logo.png?h=80 2x',
    ],
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
};
