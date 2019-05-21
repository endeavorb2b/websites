const ads = require('./ads');

module.exports = {
  ads,
  company: 'Euclid Media Group',
  logos: {
    navbar: {
      src: 'https://base.imgix.net/files/base/euclid/mt/logo.png?h=60',
      srcset: [
        'https://base.imgix.net/files/base/euclid/mt/logo.png?h=120 2x',
      ],
    },
    footer: {
      src: 'https://base.imgix.net/files/base/euclid/mt/logo.png?h=60',
      srcset: [
        'https://base.imgix.net/files/base/euclid/mt/logo.png?h=120 2x',
      ],
    },
  },
  socialMediaLinks: [
    { provider: 'facebook', href: 'https://www.facebook.com/metrotimes?fref=nf' },
    { provider: 'twitter', href: 'https://www.twitter.com/metrotimes' },
    { provider: 'instagram', href: 'https://instagram.com/metrotimes' },
  ],
  primaryNavItems: [
    { href: '/news', label: 'News' },
    { href: '/arts-cultre', label: 'Arts & Culture' },
    { href: '/food-drink', label: 'Food & Drink' },
    { href: '/weed', label: 'Weed' },
    { href: '/music', label: 'Music' },
    { href: '/calendar', label: 'Calendar' },
  ],
  secondaryNavItems: [
    { href: '/galleries', label: 'Galleries' },
    { href: '/best-of', label: 'Best Of' },
    { href: '/giveaways', label: 'Giveaways' },
    { href: '/subscribe', label: 'Subscribe' },
    { href: '/page/advertise', label: 'Advertise' },
  ],
  footerNavItems: [
    { href: '/contact-us', label: 'Contact Us' },
    { href: '/page/advertise', label: 'Advertise' },
    { href: 'http://www.ruxton.com/', label: 'National Advertising', target: '_blank' },
    { href: '/jobs', label: 'Work Here' },
    { href: '/page/about-us', label: 'About Us' },
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
  subscriptions: {
    newsletters: 'https://www.metrotimes.com/detroit/NewsletterSignup/Page',
  },
  magazines: {
    description: 'Detroit\'s Weekly Alternative',
  },
  contactUs: {
    branding: {
      bgColor: '#e2252a',
      logo: 'https://base.imgix.net/files/base/euclid/mt/logo.png?h=60',
    },
  },
};
