const ads = require('./ads');

module.exports = {
  ads,
  logos: {
    navbar: {
      src: 'https://base.imgix.net/files/base/cygnus/ofcr/image/static/logo/site_logo.png',
      srcset: [
        'https://base.imgix.net/files/base/cygnus/ofcr/image/static/logo/site_logo.png 2x',
      ],
    },
    footer: {
      src: 'https://base.imgix.net/files/base/cygnus/ofcr/image/static/logo/site_logo.png',
      srcset: [
        'https://base.imgix.net/files/base/cygnus/ofcr/image/static/logo/site_logo.png 2x',
      ],
    },
  },
  socialMediaLinks: [
    { provider: 'linkedin', href: 'https://www.linkedin.com/groups/3287176/profile' },
    { provider: 'twitter', href: 'https://twitter.com/officercom' },
    { provider: 'facebook', href: 'https://www.facebook.com/officercom' },
  ],
  primaryNavItems: [
    { href: '/tactical', label: 'Tactical' },
    { href: '/training-careers', label: 'Training & Careers' },
    { href: '/on-the-street', label: 'On the Street' },
    { href: '/investigations', label: 'Investigations' },
    { href: '/command-hq', label: 'Command/HQ' },
    { href: '/directory', label: 'Product Guide' },
    { href: 'https://forum.officer.com', label: 'Forums' },
  ],
  secondaryNavItems: [
    { href: '/features/honoring-the-fallen', label: 'Honoring the Fallen' },
    { href: '/magazine', label: 'Publications' },
    { href: '/subscribe', label: 'Subscribe' },
    { href: '/advertise', label: 'Advertise' },
    { href: '/contact-us', label: 'Contact Us' },
  ],
  footerNavItems: [
    { href: '/page/about-us', label: 'About Us' },
    { href: '/contact-us', label: 'Contact Us' },
    { href: '/page/advertise', label: 'Advertise' },
    { href: 'https://www.endeavorbusinessmedia.com/privacy-policy', label: 'Privacy Policy', target: '_blank' },
    { href: 'https://www.endeavorbusinessmedia.com/endeavor-terms', label: 'Terms & Conditions', target: '_blank' },
  ],
  menuItems: {
    resources: [
      { href: '/magazine', label: 'Magazine' },
      { href: '/videos', label: 'Videos' },
      { href: '/white-papers', label: 'White Papers' },
      { href: '/webcasts', label: 'Webcasts' },
    ],
    userTools: [
      { href: '/subscribe', label: 'Subscribe' },
      { href: '/advertise', label: 'Advertise' },
      { href: '/page/about-us', label: 'About Us' },
      { href: '/contact-us', label: 'Contact Us' },
      { href: 'https://www.endeavorbusinessmedia.com/privacy-policy', label: 'Privacy Policy', target: '_blank' },
      { href: 'https://www.endeavorbusinessmedia.com/endeavor-terms', label: 'Terms & Conditions', target: '_blank' },
    ],
  },
  gtmContainer: 'GTM-TZNC8W8',
  search: {
    engine: 'google',
    apiKey: '017383739850048358259:p0nyaiybgnq',
  },
  subscriptions: {
    newsletters: 'https://www.officer.com/subscribe/email',
    publications: {
      '/subscribe/print/let': 'https://cygnus.omeda.com/cgi-win/let.cgi?login',
      '/subscribe/print/lepn': 'https://cygnus.omeda.com/cgi-win/lepn.cgi?login',
    },
  },
  magazines: {
    description: 'Law Enforcement Technology (LET) and Law Enforcement Product News (LEPN) are the leading magazine publications for the police and law enforcement community.',
  },
  contactUs: {
    branding: {
      bgColor: '#005ea0',
      logo: 'https://base.imgix.net/files/base/cygnus/ofcr/image/static/logo/site_logo.png',
    },
  },
  wufoo: {
    userName: 'cygnuscorporate',
  },
};
