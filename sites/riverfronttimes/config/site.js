const ads = require('./ads');

module.exports = {
  ads,
  company: 'Euclid Media Group',
  logos: {
    navbar: {
      src: 'https://base.imgix.net/files/base/euclid/rft/logo.png?h=60',
      srcset: [
        'https://base.imgix.net/files/base/euclid/rft/logo.png?h=120 2x',
      ],
    },
    footer: {
      src: 'https://base.imgix.net/files/base/euclid/rft/logo.png?h=60',
      srcset: [
        'https://base.imgix.net/files/base/euclid/rft/logo.png?h=120 2x',
      ],
    },
  },
  socialMediaLinks: [
    { provider: 'facebook', href: 'https://www.facebook.com/riverfronttimes' },
    { provider: 'twitter', href: 'https://twitter.com/riverfronttimes/' },
    { provider: 'instagram', href: 'https://instagram.com/riverfronttimes/' },
  ],
  navigation: {
    primary: {
      items: [
        { href: '/news', label: 'News' },
        { href: '/arts-culture', label: 'Arts & Culture' },
        { href: '/dining', label: 'Dining' },
        { href: '/music', label: 'Music' },
        { href: '/film', label: 'Film' },
        { href: '/best-of', label: 'Best Of' },
      ],
    },
    secondary: {
      items: [
        { href: '/slideshows', label: 'Slideshows' },
        { href: '/calendar', label: 'Calendar' },
        { href: '/giveaways', label: 'Giveaways' },
        { href: '/events', label: 'Events' },
        { href: '/subscribe', label: 'Subscribe' },
        { href: '/page/advertise', label: 'Advertise' },
      ],
    },
    footer: {
      items: [
        { href: '/contact-us', label: 'Contact Us' },
        { href: '/page/advertise', label: 'Advertise' },
        { href: 'http://www.vmgadvertising.com/', label: 'National Advertising', target: '_blank' },
        { href: '/jobs', label: 'Work Here' },
        { href: '/page/about-us', label: 'About Us' },
        { href: '/page/privacy-policy', label: 'Privacy Policy' },
        { href: '/page/terms-use', label: 'Terms of Use' },
      ],
    },
    menu: {
      topics: {
        label: 'Topics',
        items: [
          { href: '/news', label: 'News' },
          { href: '/arts-culture', label: 'Arts & Culture' },
          { href: '/dining', label: 'Dining' },
          { href: '/music', label: 'Music' },
          { href: '/film', label: 'Film' },
          { href: '/best-of', label: 'Best Of' },
        ],
      },
      resources: {
        label: 'Resources',
        items: [
          { href: '/magazine', label: 'Magazine' },
          { href: '/videos', label: 'Videos' },
          { href: '/white-papers', label: 'White Papers' },
          { href: '/events', label: 'Events' },
        ],
      },
      userTools: {
        label: 'User Tools',
        items: [
          { href: '/subscribe', label: 'Subscribe' },
          { href: '/page/advertise', label: 'Advertise' },
          { href: '/page/about-us', label: 'About Us' },
          { href: '/contact-us', label: 'Contact Us' },
          { href: '/page/privacy-policy', label: 'Privacy Policy' },
        ],
      },
    },
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
      bgColor: '#e21922',
      logo: 'https://base.imgix.net/files/base/euclid/rft/logo.png?h=60',
    },
  },
};
