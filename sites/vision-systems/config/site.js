const ads = require('./ads');

module.exports = {
  ads,
  logo: {
    src: 'https://base.imgix.net/files/base/pennwell/vsd/logo.png?h=40',
    srcset: [
      'https://base.imgix.net/files/base/pennwell/vsd/logo.png?h=80 2x',
    ],
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
  gtmContainer: 'GTM-PZFPXQK',
  search: {
    engine: 'google',
    apiKey: '003355913687346718228:etkxb9ohz_w',
  },
};
