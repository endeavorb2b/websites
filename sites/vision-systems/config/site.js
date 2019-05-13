const ads = require('./ads');

module.exports = {
  ads,
  logos: {
    navbar: {
      src: 'https://base.imgix.net/files/base/pennwell/vsd/logo.png?h=60',
      srcset: [
        'https://base.imgix.net/files/base/pennwell/vsd/logo.png?h=120 2x',
      ],
    },
    footer: {
      src: 'https://base.imgix.net/files/base/pennwell/vsd/logo.png?h=50',
      srcset: [
        'https://base.imgix.net/files/base/pennwell/vsd/logo.png?h=100 2x',
      ],
    },
  },
  socialMediaLinks: [
    { provider: 'linkedin', href: 'https://www.linkedin.com/company/vision-systems-design' },
    { provider: 'twitter', href: 'https://twitter.com/Vision_Systems' },
    { provider: 'facebook', href: 'https://www.facebook.com/VisionSystemsDesign?ref=hl' },
  ],
  primaryNavItems: [
    { href: '/factory', label: 'Factory' },
    { href: '/non-factory', label: 'Non-Factory' },
    { href: '/cameras', label: 'Cameras' },
    { href: '/boards-software', label: 'Boards & Software' },
    { href: '/embedded', label: 'Embedded' },
    { href: '/unmanned', label: 'Unmanned' },
    { href: '/nextgen', label: 'NextGen' },
  ],
  secondaryNavItems: [
    { href: '/subscribe', label: 'Subscribe' },
    { href: '/magazine', label: 'Magazine' },
    { href: '/videos', label: 'Videos' },
    { href: 'https://buyersguide.vision-systems.com/index.html', label: 'Buyer\'s Guide', target: '_blank' },
    { href: 'https://visionsystemsdesigninnovators.secure-platform.com/a', label: 'Awards', target: '_blank' },
    { href: '/page/advertise', label: 'Advertise' },
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
      { href: 'https://buyersguide.vision-systems.com/index.html', label: 'Buyer\'s Guide', target: '_blank' },
      { href: 'https://visionsystemsdesigninnovators.secure-platform.com/a', label: 'Awards', target: '_blank' },
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
  gtmContainer: 'GTM-PZFPXQK',
  search: {
    engine: 'google',
    apiKey: '003355913687346718228:etkxb9ohz_w',
  },
  subscriptions: {
    newsletters: 'https://formdesigner.ecn5.com/GetForm?tokenuid=c0d535a8-6ee3-47b4-9162-5ab560c2f9ba&promoCode=WENL2019&utm_source=mag_sub&utm_medium=website&utm_campaign=WENL2019&utm_content=2019-02-25',
    publications: {
      '/subscribe/print/vsd': 'http://formdesigner.ecn5.com/GetForm?tokenuid=b388925c-aedf-4e46-82ea-590a0c59355a&promoCode=NW9401&cmpid=website_sub_vsd_nw9401_apr-3-2018',
    },
  },
  magazines: {
    description: '',
  },
  contactUs: {
    branding: {
      bgColor: '#ed1b24',
      logo: 'https://base.imgix.net/files/base/pennwell/vsd/logo.png?h=50',
    },
  },
};
