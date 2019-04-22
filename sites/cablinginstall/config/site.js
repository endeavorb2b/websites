const ads = require('./ads');

module.exports = {
  ads,
  logos: {
    navbar: {
      src: 'https://base.imgix.net/files/base/pennwell/cim/logo.png?h=30',
      srcset: [
        'https://base.imgix.net/files/base/pennwell/cim/logo.png?h=60 2x',
      ],
    },
    footer: {
      src: 'https://base.imgix.net/files/base/pennwell/cim/logo.png?h=50',
      srcset: [
        'https://base.imgix.net/files/base/pennwell/cim/logo.png?h=100 2x',
      ],
    },
  },
  socialMediaLinks: [
    { provider: 'linkedin', href: 'https://www.linkedin.com/company/3962332' },
    { provider: 'twitter', href: 'http://twitter.com/CABLINGMAG' },
    { provider: 'facebook', href: 'http://www.facebook.com/pages/Cabling-Installation-and-Maintenance/298118662118' },
  ],
  primaryNavItems: [
    { href: '/data-center', label: 'Data Center' },
    { href: '/standards', label: 'Standards' },
    { href: '/cable', label: 'Cable' },
    { href: '/connectivity', label: 'Connectivity' },
    { href: '/ip-security-av', label: 'IP Security & AV' },
    { href: '/wireless-5g', label: 'Wireless/5G' },
    { href: '/design-install', label: 'Design Install' },
    { href: '/testing', label: 'Testing' },
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
  gtmContainer: 'GTM-T4G6938',
  // ad: {
  //   units: {
  //     BS: {
  //       path: '/21687441225/CIM/CIM_BS',
  //       size: [[970, 250], [970, 90], [728, 90], [320, 50], [300, 50], [300, 100]],
  //       sizeMapping: [
  //         { viewport: [980, 0], size: [[970, 250], [970, 90], [728, 90]] },
  //         { viewport: [750, 0], size: [728, 90] },
  //         { viewport: [320, 0], size: [[300, 50], [320, 50], [300, 100]] },
  //       ],
  //     },
  //     MR: {
  //       path: '/21687441225/CIM/CIM_MR',
  //       size: [300, 250],
  //     },
  //     HP: {
  //       path: '/21687441225/CIM/CIM_HP',
  //       size: [300, 600],
  //     },
  //   },
  // },
  search: {
    engine: 'google',
    apiKey: '003355913687346718228:l9lnow_qnxy',
  },
};
