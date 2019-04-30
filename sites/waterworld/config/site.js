const ads = require('./ads');

module.exports = {
  ads,
  logos: {
    navbar: {
      src: 'https://base.imgix.net/files/base/pennwell/ww/logo.png?h=30',
      srcset: [
        'https://base.imgix.net/files/base/pennwell/ww/logo.png?h=60 2x',
      ],
    },
    footer: {
      src: 'https://base.imgix.net/files/base/pennwell/ww/logo.png?h=50',
      srcset: [
        'https://base.imgix.net/files/base/pennwell/ww/logo.png?h=100 2x',
      ],
    },
  },
  socialMediaLinks: [
    { provider: 'linkedin', href: 'https://www.linkedin.com/grp/home?gid=1965670' },
    { provider: 'twitter', href: 'https://twitter.com/WaterWorld' },
    { provider: 'facebook', href: 'https://www.facebook.com/waterworldmag' },
  ],
  primaryNavItems: [
    { href: '/municipal', label: 'Municipal' },
    { href: '/industrial', label: 'Industrial' },
    { href: '/international', label: 'International' },
    { href: '/municipal/technologies', label: 'Technologies' },
    { href: '/', label: 'Global Thought Leaders' },
  ],
  secondaryNavItems: [
    { href: '/subscribe', label: 'Subscribe' },
    { href: '/magazine', label: 'Magazine' },
    { href: '/videos', label: 'Videos' },
    { href: '/page/about-us', label: 'About Us' },
  ],
  footerNavItems: [
    { href: '/page/about-us', label: 'About Us' },
    { href: '/contact-us', label: 'Contact Us' },
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
  gtmContainer: 'GTM-MXBGH3V',
  search: {
    engine: 'google',
    apiKey: '003355913687346718228:anjajr3pydu',
  },
  subscriptions: {
    newsletters: 'http://formdesigner.ecn5.com/GetForm?tokenuid=109ddec7-c9fd-419c-8203-e4feae5bb438&promoCode=NW853&cmpid=website_enl_ww_nw853ww_may-16-2017',
    publications: {
      '/subscribe/print/ww': 'http://formdesigner.ecn5.com/GetForm?tokenuid=251e2ac3-4c6a-495d-a7d8-5178dc76acd5&promoCode=N9WEB&utm_source=mag_sub&utm_medium=website&utm_campaign=N9WEB&utm_content=2019-02-26',
      '/subscribe/print/iww': 'https://formdesigner.ecn5.com/GetForm?tokenuid=0aaf9d77-861e-46ba-905b-43ad58b691cc&promoCode=N9WEB&utm_source=mag_sub&utm_medium=website&utm_campaign=N9WEB&utm_content=2019-02-26',
    },
  },
  magazines: {
    description: 'WaterWorld serves professionals in the North American municipal water/wastewater industry. WaterWorld delivers monthly news and information about products and services, technology, applications, legislation and regulations to help you successfully plan, design, operate and maintain your water/wastewater systems. Editorial topics include: drinking water treatment, wastewater treatment, filtration, disinfection, membrane systems, biosolids and sludge treatment, water reuse, pipe maintenance and repairs, trenchless technology, meter reading, valves, pumps, stormwater management, odor control, computers and automation technology, corrosion control, and so much more!',
  },
};
