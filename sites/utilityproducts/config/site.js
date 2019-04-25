const ads = require('./ads');

module.exports = {
  ads,
  logos: {
    navbar: {
      src: 'https://base.imgix.net/files/base/pennwell/up/logo.png?h=30',
      srcset: [
        'https://base.imgix.net/files/base/pennwell/up/logo.png?h=60 2x',
      ],
    },
    footer: {
      src: 'https://base.imgix.net/files/base/pennwell/up/logo.png?h=50',
      srcset: [
        'https://base.imgix.net/files/base/pennwell/up/logo.png?h=100 2x',
      ],
    },
  },
  socialMediaLinks: [
    { provider: 'linkedin', href: 'https://www.linkedin.com/company/utility-products?trk=other_brands_logo' },
    { provider: 'twitter', href: 'http://twitter.com/UtilityProducts' },
    { provider: 'facebook', href: 'http://www.facebook.com/pages/Utility-Products-Magazine/133739816672957' },
  ],
  primaryNavItems: [
    { href: '/transmission-distribution', label: 'Transmission & Distribution' },
    { href: '/vehicles-accessories', label: 'Vehicles & Accessories' },
    { href: '/tools-supplies', label: 'Tools & Supplies' },
    { href: '/safety', label: 'Safety' },
    { href: '/line-construction-maintenance', label: 'Line Construction & Maintenance' },
    { href: '/test-measurement', label: 'Test & Measurement' },
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
      { href: '/white-papers', label: 'White Papers' },
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
  gtmContainer: 'GTM-PSGKX8S',
  search: {
    engine: 'google',
    apiKey: '003355913687346718228:mb2grfhfx08',
  },
  subscriptions: {
    newsletters: 'https://formdesigner.ecn5.com/GetForm?tokenuid=6203a757-d517-4d5e-91d5-85e0f236559c',
    publications: {
      '/subscribe/print/up': 'http://formdesigner.ecn5.com/GetForm?tokenuid=a9514072-dfbd-488d-8148-b0477928fed8&promoCode=NW8301&cmpid=website_sub_up_nw8301_mar-14-2018',
    },
  },
  magazines: {
    description: 'Utility Products serves readers who work in electric, cable and telecom utilities, as well as contractors, manufacturers, suppliers and other service companies who support these utilities. ',
  },
};
