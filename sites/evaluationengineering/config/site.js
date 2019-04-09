module.exports = {
  logo: {
    src: 'https://base.imgix.net/files/base/ebm/ee/image/static/logo/site_logo_bare.png',
    srcset: [
      'https://base.imgix.net/files/base/ebm/ee/image/static/logo/site_logo_bare.png 2x',
    ],
  },
  primaryNavItems: [
    { href: '/applications', label: 'Applications' },
    { href: '/industries', label: 'Industries' },
    { href: '/instrumentation', label: 'Instrumentation' },
    { href: '/new-products', label: 'New Products' },
  ],
  secondaryNavItems: [
    { href: '/magazine', label: 'In Print' },
    { href: '/subscribe', label: 'Subscribe' },
    { href: '/advertise', label: 'Advertise' },
    { href: '/page/about-us', label: 'About Us' },
  ],
  homeSections: [
    { alias: 'applications', name: 'Applications' },
    { alias: 'instrumentation', name: 'Instrumentation' },
    { alias: 'testing', name: 'Testing' },
    { alias: 'industries', name: 'Industries' },
    { alias: 'whitepapers', name: 'Whitepapers' },
    { alias: 'special-reports', name: 'Special Reports' },
  ],
  gtmContainer: 'GTM-NLCH94B',
  ad: {
    units: {
      BS: { path: '/21687441225/EE/ee970x250', size: [[970, 250], [970, 90]] },
      MR: { path: '/21687441225/EE/ee-mr', size: [300, 250] },
      HP: { path: '/21687441225/EE/ee-hp', size: [300, 600] },
    },
  },
};
