module.exports = {
  logo: {
    src: 'https://base.imgix.net/files/base/pennwell/cim/logo.png?h=40',
    srcset: [
      'https://base.imgix.net/files/base/pennwell/cim/logo.png?h=80 2x',
    ],
  },
  primaryNavItems: [
    { href: '/data-center', label: 'Data Center' },
    { href: '/standards', label: 'Standards' },
    { href: '/cable', label: 'Cable' },
    { href: '/connectivity', label: 'Connectivity' },
    { href: '/ip-security-av', label: 'IP Security & AV' },
    { href: '/wireless-5g', label: 'Wireless/5G' },
    { href: '/design-install', label: 'Design Install' },
    { href: '/testing', label: 'Testing' },
  ],
  secondaryNavItems: [
    { href: '/subscribe', label: 'Subscribe' },
    { href: '/magazine', label: 'Magazine' },
    { href: '/videos', label: 'Videos' },
    { href: '/page/about-us', label: 'About Us' },
  ],
  homeSections: [
    { alias: 'data-center', name: 'Data Center' },
    { alias: 'standards', name: 'Standards' },
    { alias: 'cable', name: 'Cable' },
    { alias: 'connectivity', name: 'Connectivity' },
    { alias: 'ip-security-av', name: 'IP Security & AV' },
    { alias: 'wireless-5g', name: 'Wireless/5G' },
  ],
  gtmContainer: 'GTM-T4G6938',
  ad: {
    units: {
      BS: {
        path: '/21687441225/CIM/CIM_BS',
        size: [[970, 250], [970, 90], [728, 90], [320, 50], [300, 50], [300, 100]],
        sizeMapping: [
          { viewport: [980, 0], size: [[970, 250], [970, 90], [728, 90]] },
          { viewport: [750, 0], size: [728, 90] },
          { viewport: [320, 0], size: [[300, 50], [320, 50], [300, 100]] },
        ],
      },
      MR: {
        path: '/21687441225/CIM/CIM_MR',
        size: [300, 250],
      },
      HP: {
        path: '/21687441225/CIM/CIM_HP',
        size: [300, 600],
      },
    },
  },
};
