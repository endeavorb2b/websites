const ads = require('./ads');

module.exports = {
  ads,
  company: 'Euclid Media Group',
  logos: {
    navbar: {
      src: 'https://base.imgix.net/files/base/euclid/cs/logo.png?h=60',
      srcset: [
        'https://base.imgix.net/files/base/euclid/cs/logo.png?h=120 2x',
      ],
    },
    footer: {
      src: 'https://base.imgix.net/files/base/euclid/cs/logo.png?h=60',
      srcset: [
        'https://base.imgix.net/files/base/euclid/cs/logo.png?h=120 2x',
      ],
    },
  },
  socialMediaLinks: [
    { provider: 'facebook', href: 'http://www.facebook.com/ClevelandScene' },
    { provider: 'twitter', href: 'https://twitter.com/ClevelandScene' },
    { provider: 'instagram', href: 'https://www.instagram.com/clevelandscene/' },
  ],
  primaryNavItems: [
    { href: '/news', label: 'News' },
    { href: '/music', label: 'Music' },
    { href: '/movies', label: 'Movies' },
    { href: '/eat', label: 'Eat' },
    { href: '/arts', label: 'Arts' },
    { href: '/calendar', label: 'Calendar' },
  ],
  secondaryNavItems: [
    { href: '/slideshows', label: 'Slideshows' },
    { href: '/special-issues', label: 'Special Issues' },
    { href: '/best-of', label: 'Best Of' },
    { href: '/scene-events', label: 'Scene Events' },
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
    newsletters: 'https://posting.clevescene.com/cleveland/ClevesceneNewsletterSignup/Page',
  },
  magazines: {
    description: 'Cleveland\'s Weekly Alternative',
  },
  contactUs: {
    branding: {
      bgColor: '#f30100',
      logo: 'https://base.imgix.net/files/base/euclid/cs/logo.png?h=60',
    },
  },
};
