const ads = require('./ads');
const nativeX = require('./native-x');

module.exports = {
  company: 'BizBash Media, Inc.',
  ads,
  nativeX,
  logos: {
    navbar: {
      src: 'https://base.imgix.net/files/base/bizbash/bzb/image/static/logo/BB_Logo_white_hires.png?h=60',
      srcset: [
        'https://base.imgix.net/files/base/bizbash/bzb/image/static/logo/BB_Logo_white_hires.png?h=120 2x',
      ],
    },
    footer: {
      src: 'https://base.imgix.net/files/base/bizbash/bzb/image/static/logo/BB_Logo_white_hires.png?h=60',
      srcset: [
        'https://base.imgix.net/files/base/bizbash/bzb/image/static/logo/BB_Logo_white_hires.png?h=120 2x',
      ],
    },
  },
  socialMediaLinks: [
    { provider: 'instagram', href: 'https://www.instagram.com/bizbash' },
    { provider: 'linkedin', href: 'https://www.linkedin.com/company/bizbash' },
    { provider: 'twitter', href: 'https://twitter.com/BizBash' },
    { provider: 'facebook', href: 'https://www.facebook.com/BizBash/' },
  ],
  navigation: {
    primary: {
      items: [
        { href: '/production-strategy', label: 'Production & Strategy' },
        { href: '/style-decor', label: 'Style & Decor' },
        { href: '/catering', label: 'Catering' },
        { href: '/local-venues-destinations', label: 'Local Venues & Destinations' },
        { href: '/bizbash-lists', label: 'Bizbash Lists' },
      ],
    },
    secondary: {
      items: [
        { href: '/gathergeeks', label: 'GatherGeeks' },
        { href: '/page/our-events', label: 'Our Events & Awards' },
        { href: 'http://go2.bizbash.com/Get-Listed-Directory', label: 'List Your Biz' },
        // { href: '/venue-directory', label: 'Find A Venue' },
        // { href: '/supplier-directory', label: 'Find Suppliers' },
        { href: '/magazine/5b2a4e6c0305572b008b45ae', label: 'Our Publications' },
      ],
    },
    footer: {
      items: [
        { href: '/page/about-us', label: 'About Us' },
        { href: '/page/contact-us', label: 'Contact Us' },
        { href: '/page/advertise', label: 'Advertise' },
        { href: '/page/privacy-policy', label: 'Privacy Policy' },
      ],
    },
    menu: {
      topics: {
        label: 'Topics',
        items: [
          { href: '/production-strategy', label: 'Production & Strategy' },
          { href: '/style-decor', label: 'Style & Decor' },
          { href: '/catering', label: 'Catering' },
          { href: '/local-venues-destinations', label: 'Local Venues & Destinations' },
          { href: '/bizbash-lists', label: 'Bizbash Lists' },
        ],
      },
      resources: {
        label: 'Resources',
        items: [
          { href: '/gathergeeks', label: 'GatherGeeks' },
          { href: '/page/our-events', label: 'Our Events & Awards' },
          { href: 'http://go2.bizbash.com/Get-Listed-Directory', label: 'List Your Biz' },
          // { href: '/venue-directory', label: 'Find A Venue' },
          // { href: '/supplier-directory', label: 'Find Suppliers' },
          { href: '/bermuda', label: 'Bermuda Event Planner\'s Guide' },
          { href: '/magazine/5b2a4e6c0305572b008b45ae', label: 'Our Publications' },
        ],
      },
      userTools: {
        label: 'User Tools',
        items: [
          { href: '/subscribe', label: 'Subscribe' },
          { href: '/page/advertise', label: 'Advertise' },
          { href: '/page/about-us', label: 'About Us' },
          { href: '/page/contact-us', label: 'Contact Us' },
          { href: '/page/privacy-policy', label: 'Privacy Policy' },
        ],
      },
    },
  },
  gtmContainer: 'GTM-5TWCFJ',
  search: {
    engine: 'google',
    apiKey: '017383739850048358259:p0nyaiybgnq',
  },
  subscriptions: {
    newsletters: 'https://www.bizbash.com/subscribe/email',
    publications: {
      '/subscribe/print/bzb': 'https://www.b2bmediaportal.com/biz/bizsub.aspx',
    },
  },
  magazines: {
    description: 'We cover the event industry like no other including: planning, production, new openings, events and trends in marketing, design and style. BizBash also offers resources for event professionals like our venues and suppliers directory, trade shows, and magazines.',
  },
  contactUs: {
    branding: {
      bgColor: '#005ea0',
      logo: 'https://base.imgix.net/files/base/bizbash/bzb/image/static/logo/site_logo.png?h=60',
    },
  },
  inquiry: {
    enabled: true,
    directSend: false,
    sendTo: 'Endeavor Developer <developer@endeavorb2b.com>',
    sendFrom: 'BizBash.com <noreply@bizbash.com>',
    sendBcc: 'emailactivity@cygnus.com',
    logo: 'https://base.imgix.net/files/base/bizbash/bzb/image/static/logo/site_logo.png?h=60',
    bgColor: '#25292d',
  },
};
