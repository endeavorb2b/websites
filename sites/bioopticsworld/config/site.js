const ads = require('./ads');

module.exports = {
  ads,
  logos: {
    navbar: {
      src: 'https://base.imgix.net/files/base/pennwell/bow/logo.png?h=30',
      srcset: [
        'https://base.imgix.net/files/base/pennwell/bow/logo.png?h=60 2x',
      ],
    },
    footer: {
      src: 'https://base.imgix.net/files/base/pennwell/bow/logo.png?h=50',
      srcset: [
        'https://base.imgix.net/files/base/pennwell/bow/logo.png?h=100 2x',
      ],
    },
  },
  socialMediaLinks: [
    { provider: 'linkedin', href: 'https://www.linkedin.com/company/biooptics-world/' },
    { provider: 'twitter', href: 'https://twitter.com/BioOptics' },
    { provider: 'facebook', href: 'https://www.facebook.com/pages/BioOptics-World/131802223749' },
  ],
  primaryNavItems: [
    { href: '/bioscience', label: 'Bioscience' },
    { href: '/biomedicine', label: 'Biomedicine' },
    { href: '/bioimaging', label: 'Bioimaging' },
    { href: '/biophotonics-techniques', label: 'Biophotonics Techniques' },
    { href: '/biophotonics-tools', label: 'Biophotonics Tools' },
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
  gtmContainer: 'GTM-M24RV9Q',
  // ads: {
  //   units: {
  //     BS: {
  //       path: '/21687441225/BOW/BOW_BS',
  //       size: [[970, 250], [970, 90], [728, 90], [300, 50], [320, 50], [300, 100]],
  //       sizeMapping: [
  //         { viewport: [980, 0], size: [[970, 250], [970, 90], [728, 90]] },
  //         { viewport: [750, 0], size: [728, 90] },
  //         { viewport: [320, 0], size: [[300, 50], [320, 50], [300, 100]] },
  //       ],
  //     },
  //     MR: {
  //       path: '/21687441225/BOW/BOW_MR',
  //       size: [300, 250],
  //     },
  //     HP: {
  //       path: '/21687441225/BOW/BOW_HP',
  //       size: [300, 600],
  //     },
  //   },
  // },
  search: {
    engine: 'google',
    apiKey: '003355913687346718228:tlips421iqi',
  },
};
