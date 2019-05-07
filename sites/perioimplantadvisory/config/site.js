const ads = require('./ads');

module.exports = {
  ads,
  logos: {
    navbar: {
      src: 'https://base.imgix.net/files/base/pennwell/pia/logo.png?h=30',
      srcset: [
        'https://base.imgix.net/files/base/pennwell/pia/logo.png?h=60 2x',
      ],
    },
    footer: {
      src: 'https://base.imgix.net/files/base/pennwell/pia/logo.png?h=50',
      srcset: [
        'https://base.imgix.net/files/base/pennwell/pia/logo.png?h=100 2x',
      ],
    },
  },
  socialMediaLinks: [
    { provider: 'linkedin', href: 'https://www.linkedin.com/company/surgical-restorative-resource?trk=other_brands_name' },
    { provider: 'twitter', href: 'https://twitter.com/PI_Advisory' },
    { provider: 'facebook', href: 'https://www.facebook.com/SurgicalRR' },
  ],
  primaryNavItems: [
    { href: '/clinical-tips-from-the-editor', label: 'Clinical Tips from the Editor' },
    { href: '/complications', label: 'Complications' },
    { href: '/dental-practice-management', label: 'Dental Practice Management' },
    { href: '/hygiene', label: 'Hygiene' },
    { href: '/oral-systemic', label: 'Oral-Systemic' },
    { href: '/restorative', label: 'Restorative' },
    { href: '/surgical', label: 'Surgical' },
    { href: '/team-treatment-planning', label: 'Team Treatment Planning' },
  ],
  secondaryNavItems: [
    { href: '/subscribe', label: 'Subscribe' },
    // { href: '/magazine', label: 'Magazine' },
    { href: '/videos', label: 'Videos' },
    { href: '/page/about-us', label: 'About Us' },
  ],
  footerNavItems: [
    { href: '/page/about-us', label: 'About Us' },
    { href: '/contact-us', label: 'Contact Us' },
    { href: 'https://www.endeavorbusinessmedia.com/privacy-policy', label: 'Privacy Policy', target: '_blank' },
    { href: 'https://www.endeavorbusinessmedia.com/endeavor-terms', label: 'Terms & Conditions', target: '_blank' },
  ],
  menuItems: {
    resources: [
      { href: '/magazine', label: 'Magazine' },
      { href: '/videos', label: 'Videos' },
      { href: '/white-papers', label: 'White Papers' },
      { href: '/webcasts', label: 'Webcasts' },
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
  gtmContainer: 'GTM-WVXHH29',
  search: {
    engine: 'google',
    apiKey: '003355913687346718228:u8wtuvfsr0c',
  },
  subscriptions: {
    newsletters: 'https://formdesigner.ecn5.com/GetForm?tokenuid=a56c9d44-88f6-452a-9f61-92d48166c3a9',
  },
};
