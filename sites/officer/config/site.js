module.exports = {
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
    { href: 'tactical', name: 'Tactical' },
    { href: 'training-careers', name: 'Training & Careers' },
    { href: 'on-the-street', name: 'On The Street' },
    { href: 'investigations', name: 'Investigations' },
    { href: 'command-hq', name: 'Command/HQ' },
    { href: 'features/honoring-the-fallen', name: 'Honoring the Fallen' },
  ],
  gtmContainer: 'GTM-TZNC8W8',
  ad: {
    units: {
      BS: { path: '/21687441225/Officer/Officer_BS', size: [[970, 250], [970, 90]] },
      MR: { path: '/21687441225/Officer/Officer_MR', size: [300, 250] },
      HP: { path: '/21687441225/Officer/Officer_HP', size: [300, 600] },
    },
  },
};
