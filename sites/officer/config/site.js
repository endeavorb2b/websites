const ads = require('./ads');

module.exports = {
  ads,
  logo: {
    src: 'https://base.imgix.net/files/base/cygnus/ofcr/image/static/logo/site_logo.png',
    srcset: [
      'https://base.imgix.net/files/base/cygnus/ofcr/image/static/logo/site_logo.png 2x',
    ],
  },
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
  homeSections: [
    { alias: 'tactical', name: 'Tactical' },
    { alias: 'training-careers', name: 'Training & Careers' },
    { alias: 'on-the-street', name: 'On The Street' },
    { alias: 'investigations', name: 'Investigations' },
    { alias: 'command-hq', name: 'Command/HQ' },
    { alias: 'features/honoring-the-fallen', name: 'Honoring the Fallen' },
  ],
  gtmContainer: 'GTM-TZNC8W8',
};
