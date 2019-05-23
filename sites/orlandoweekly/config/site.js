const ads = require('./ads');

module.exports = {
  ads,
  company: 'Euclid Media Group',
  logos: {
    navbar: {
      src: 'https://base.imgix.net/files/base/euclid/ow/logo.png?h=60',
      srcset: [
        'https://base.imgix.net/files/base/euclid/ow/logo.png?h=120 2x',
      ],
    },
    footer: {
      src: 'https://base.imgix.net/files/base/euclid/ow/logo.png?h=60',
      srcset: [
        'https://base.imgix.net/files/base/euclid/ow/logo.png?h=120 2x',
      ],
    },
  },
  socialMediaLinks: [
    { provider: 'facebook', href: 'https://www.facebook.com/OutinSA/' },
    { provider: 'twitter', href: 'https://twitter.com/OutInSA' },
    { provider: 'instagram', href: 'http://instagram.com/outinsa' },
  ],
  primaryNavItems: [
    { href: '/news', label: 'News' },
    { href: '/arts', label: 'Arts' },
    { href: '/music', label: 'Music' },
    { href: '/screens', label: 'Screens' },
    { href: '/food-drink', label: 'Food & Drink' },
    { href: '/best-of', label: 'Best Of' },
  ],
  secondaryNavItems: [
    { href: '/calendar', label: 'Calendar' },
    { href: '/galleries', label: 'Galleries' },
    { href: '/giveaways', label: 'Giveaways' },
    { href: '/events', label: 'Events' },
    { href: '/subscribe', label: 'Subscribe' },
    { href: '/page/advertise', label: 'Advertise' },
  ],
  footerNavItems: [
    { href: '/page/about-us', label: 'About Us' },
    { href: '/page/advertise', label: 'Advertise' },
    { href: 'http://www.ruxton.com/', label: 'National Advertising', target: '_blank' },
    { href: '/jobs', label: 'Work Here' },
    { href: '/contact-us', label: 'Contact Us' },
    { href: '/page/privacy-policy', label: 'Privacy Policy' },
    { href: '/page/terms-use', label: 'Terms of Use' },
  ],
  menuItems: {
    resources: [
      { href: '/magazine', label: 'Magazine' },
      { href: '/videos', label: 'Videos' },
      { href: '/white-papers', label: 'White Papers' },
      { href: '/events', label: 'Events' },
    ],
    userTools: [
      { href: '/subscribe', label: 'Subscribe' },
      { href: '/page/advertise', label: 'Advertise' },
      { href: '/page/about-us', label: 'About Us' },
      { href: '/contact-us', label: 'Contact Us' },
      { href: '/page/privacy-policy', label: 'Privacy Policy' },
    ],
  },
  gtmContainer: '',
  search: {
    engine: 'google',
    apiKey: '003355913687346718228:mb2grfhfx08',
  },
  // subscriptions: {
  //   newsletters: 'https://www.metrotimes.com/detroit/NewsletterSignup/Page',
  // },
  // magazines: {
  //   description: 'Detroit\'s Weekly Alternative',
  // },
  contactUs: {
    branding: {
      bgColor: '#e27a00',
      logo: 'https://base.imgix.net/files/base/euclid/ow/logo.png?h=60',
    },
  },
};
