const ads = require('./ads');

module.exports = {
  ads,
  company: 'PMMI Media Group',
  logos: {
    navbar: {
      src: 'https://base.imgix.net/files/base/pmmi/aw/logo.png?h=40',
      srcset: [
        'https://base.imgix.net/files/base/pmmi/aw/logo.png?h=80 2x',
      ],
    },
    footer: {
      src: 'https://base.imgix.net/files/base/pmmi/aw/logo.png?h=60',
      srcset: [
        'https://base.imgix.net/files/base/pmmi/aw/logo.png?h=120 2x',
      ],
    },
  },
  socialMediaLinks: [
    { provider: 'facebook', href: 'https://www.facebook.com/pages/Automation-World/239807359613' },
    { provider: 'twitter', href: 'https://www.twitter.com/automationworld' },
    { provider: 'linkedin', href: 'https://www.linkedin.com/groups/Automation-World-2063159?gid=2063159&trk=hb_side_g' },
  ],
  primaryNavItems: [
    { href: '/subscribe', label: 'Subscribe' },
    { href: '/aw-editors', label: 'AW Editors' },
    { href: '/products', label: 'Products' },
    { href: '/factory', label: 'Factory' },
    { href: '/process', label: 'Process' },
    { href: '/engineering', label: 'Engineering' },
    { href: '/it', label: 'IT' },
    { href: '/operations', label: 'Operations' },
    { href: '/video', label: 'Video' },
  ],
  secondaryNavItems: [
    { href: '/subscribe', label: 'Subscribe' },
    { href: '/conferences', label: 'Conferences' },
    { href: '/playbooks', label: 'Playbooks' },
    { href: '/handbooks', label: 'Handbooks' },
    // { href: '/tactical-briefs', label: 'Tactical Briefs' },
    { href: '/channels', label: 'Channels' },
    { href: '/webinars', label: 'Webinars' },
    // { href: '/technology-minute', label: 'Technology Minute' },
    { href: '/leadership', label: 'Leadership' },
  ],
  footerNavItems: [
    { href: '/subscribe', label: 'Subscribe' },
    { href: 'https://www.pmmimediagroup.com', label: 'Advertise', target: '_blank' },
    { href: '/contact-us', label: 'Contact Us' },
    { href: '/page/privacy-policy', label: 'Privacy Policy' },
    { href: '/page/terms-of-use', label: 'Terms of use' },
    { href: '/page/advertising-terms-conditions', label: 'Advertising Terms and Conditions' },
  ],
  menuItems: {
    resources: [
      { href: '/tactical-briefs', label: 'Tactical Briefs' },
      { href: '/technology-minute', label: 'Technology Minute' },
      { href: '/magazine', label: 'Magazine' },
      { href: '/videos', label: 'Videos' },
      { href: '/white-papers', label: 'White Papers' },
      { href: '/events', label: 'Events' },
    ],
    userTools: [
      { href: '/subscribe', label: 'Subscribe' },
      { href: 'https://www.pmmimediagroup.com', label: 'Advertise', target: '_blank' },
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
    newsletters: 'https://pmmi.dragonforms.com/loading.do?pk=AWMagNav&omedasite=PAWnew',
    publications: {
      '/subscribe/print/aw': 'https://pmmi.dragonforms.com/loading.do?pk=AWMagNav&omedasite=PAWnew',
    },
  },
  magazines: {
    description: 'Automation World is the leading media resource for automation professionals working in discrete, batch and process manufacturing industries. The focus in both the print edition and online site is on delivering automation intelligence for the entire buying team–from plant floor operators to management to IT. With Automation World, automation professionals will discover the latest new products and technologies, learn from how-to technical articles, and gain insight via features and columns on management issues and other topics that matter now.',
  },
  contactUs: {
    branding: {
      bgColor: '#c60000',
      logo: 'https://base.imgix.net/files/base/pmmi/aw/logo.png?h=60',
    },
  },
};
