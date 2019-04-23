const ads = require('./ads');

module.exports = {
  ads,
  logos: {
    navbar: {
      src: 'https://base.imgix.net/files/base/pennwell/mae/logo.png?h=30',
      srcset: [
        'https://base.imgix.net/files/base/pennwell/mae/logo.png?h=60 2x',
      ],
    },
    footer: {
      src: 'https://base.imgix.net/files/base/pennwell/mae/logo.png?h=50',
      srcset: [
        'https://base.imgix.net/files/base/pennwell/mae/logo.png?h=100 2x',
      ],
    },
  },
  socialMediaLinks: [
    { provider: 'linkedin', href: 'http://www.linkedin.com/groups/PennWell-Aerospace-Defense-Media-Group-2448878' },
    { provider: 'twitter', href: 'https://twitter.com/MilAero' },
    { provider: 'facebook', href: 'https://www.facebook.com/pages/Military-Aerospace-Electronics/174732214480' },
  ],
  primaryNavItems: [
    { href: '/computers', label: 'Computers' },
    { href: '/cyber', label: 'Cyber' },
    { href: '/unmanned', label: 'Unmanned' },
    { href: '/sensors', label: 'Sensors' },
    { href: '/rf-analog', label: 'RF/Analog' },
    { href: '/power', label: 'Power' },
    { href: '/communications', label: 'Communications' },
    { href: '/test', label: 'Test' },
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
  gtmContainer: 'GTM-M94ZBBC',
  search: {
    engine: 'google',
    apiKey: '003355913687346718228:q0eepyg2tx0',
  },
  subscriptions: {
    newsletters: 'https://formdesigner.ecn5.com/GetForm?tokenuid=18490ced-7640-46e3-a0a5-4c49f80a2101&promoCode=WENL2019&utm_source=mag_sub&utm_medium=website&utm_campaign=WENL2019&utm_content=2019-02-25',
    publications: {
      '/subscribe/print/mae': 'https://formdesigner.ecn5.com/GetForm?tokenuid=046345a9-19bb-4e6d-b034-e69baa602f10&promoCode=NW2019&utm_source=mag_sub&utm_medium=website&utm_campaign=NW2019&utm_content=2019-02-25',
    },
  },
  magazines: {
    description: 'Since the beginning, Military & Aerospace Electronics has been on top of COTS issues and continues to be the clear leader when it comes to coverage of COTS success stories, COTS failures, and COTS trends. Articles focus on how and when designers should use mil-spec, non-developmental-item, or commercial off-the-shelf (COTS) equipment and components. Feature articles cover timely issues of design trends, emerging standards, programs, budgets, contracts, and application success stories.',
  },
};
