const ads = require('./ads');

module.exports = {
  ads,
  company: 'Euclid Media Group',
  logos: {
    navbar: {
      src: 'https://base.imgix.net/files/base/euclid/ostl/logo.png?h=60',
      srcset: [
        'https://base.imgix.net/files/base/euclid/ostl/logo.png?h=120 2x',
      ],
    },
    footer: {
      src: 'https://base.imgix.net/files/base/euclid/ostl/logo.png?h=60',
      srcset: [
        'https://base.imgix.net/files/base/euclid/ostl/logo.png?h=120 2x',
      ],
    },
  },
  socialMediaLinks: [
    { provider: 'facebook', href: 'https://www.facebook.com/Out-In-STL-1282721071850924' },
    { provider: 'twitter', href: 'https://twitter.com/outinstl' },
    { provider: 'instagram', href: 'https://www.instagram.com/out_in_stl/' },
  ],
  navigation: {
    primary: {
      items: [
        { href: '/policy', label: 'Policy' },
        { href: '/views', label: 'Views' },
        { href: '/longform', label: 'Longform' },
        { href: '/performers', label: 'Performers' },
        { href: '/qs', label: 'Qs' },
        { href: '/wellness', label: 'Wellness' },
        { href: '/flavors', label: 'Flavors' },
        { href: '/nightowls', label: 'Nightowls' },
        { href: '/escapes', label: 'Escapes' },
      ],
    },
    secondary: {
      items: [
        { href: '/calendar', label: 'Agenda' },
        { href: '/page/about-us', label: 'About Us' },
        { href: '/contact-us', label: 'Contact Us' },
        { href: '/subscribe', label: 'Subscribe' },
      ],
    },
    footer: {
      items: [
        { href: '/contact-us', label: 'Contact Us' },
        { href: '/page/advertise', label: 'Advertise' },
        { href: '/page/about-us', label: 'About Us' },
        { href: '/page/privacy-policy', label: 'Privacy Policy' },
        { href: '/page/terms-use', label: 'Terms of Use' },
      ],
    },
    menu: {
      topics: {
        label: 'Topics',
        items: [
          { href: '/policy', label: 'Policy' },
          { href: '/views', label: 'Views' },
          { href: '/longform', label: 'Longform' },
          { href: '/performers', label: 'Performers' },
          { href: '/qs', label: 'Qs' },
          { href: '/wellness', label: 'Wellness' },
          { href: '/flavors', label: 'Flavors' },
          { href: '/nightowls', label: 'Nightowls' },
          { href: '/escapes', label: 'Escapes' },
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
      bgColor: '#4000ab',
      logo: 'https://base.imgix.net/files/base/euclid/ostl/logo.png?h=60',
    },
  },
};
