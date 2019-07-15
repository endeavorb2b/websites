const ads = require('./ads');
const nativeX = require('./native-x');

module.exports = {
  ads,
  nativeX,
  logos: {
    navbar: {
      src: 'https://base.imgix.net/files/base/pennwell/cim/cim-header-logo-2.png?h=50',
      srcset: [
        'https://base.imgix.net/files/base/pennwell/cim/cim-header-logo-2.png?h=100 2x',
      ],
    },
    footer: {
      src: 'https://base.imgix.net/files/base/pennwell/cim/logo.png?h=60',
      srcset: [
        'https://base.imgix.net/files/base/pennwell/cim/logo.png?h=120 2x',
      ],
    },
  },
  socialMediaLinks: [
    { provider: 'linkedin', href: 'https://www.linkedin.com/company/3962332' },
    { provider: 'twitter', href: 'http://twitter.com/CABLINGMAG' },
    { provider: 'facebook', href: 'http://www.facebook.com/pages/Cabling-Installation-and-Maintenance/298118662118' },
  ],
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
    { href: '/white-papers', label: 'White Papers' },
    { href: '/webcasts', label: 'Webcasts' },
    { href: 'https://buyersguide.cablinginstall.com/', label: 'Buyer\'s Guide', target: '_blank' },
    { href: 'https://cablingawards.secure-platform.com/a', label: 'Awards', target: '_blank' },
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
      { href: 'https://buyersguide.cablinginstall.com/', label: 'Buyer\'s Guide', target: '_blank' },
      { href: 'https://cablingawards.secure-platform.com/a', label: 'Awards', target: '_blank' },
    ],
    userTools: [
      { href: '/subscribe', label: 'Subscribe' },
      { href: '/page/advertise', label: 'Advertise' },
      { href: '/page/about-us', label: 'About Us' },
      { href: '/contact-us', label: 'Contact Us' },
      { href: 'https://www.endeavorbusinessmedia.com/privacy-policy', label: 'Privacy Policy', target: '_blank' },
      { href: 'https://www.endeavorbusinessmedia.com/endeavor-terms', label: 'Terms & Conditions', target: '_blank' },
    ],
  },
  gtmContainer: 'GTM-T4G6938',
  search: {
    engine: 'google',
    apiKey: '003355913687346718228:l9lnow_qnxy',
  },
  subscriptions: {
    newsletters: 'https://endeavor.dragonforms.com/loading.do?omedasite=CIMPrefPage',
    publications: {
      '/subscribe/print/cim': 'https://formdesigner.ecn5.com/GetForm?tokenuid=18dc6325-f595-42d0-9231-6742e592190b&promoCode=NW2019&utm_source=mag_sub&utm_medium=website&utm_campaign=%20NW2019&utm_content=2019-02-25',
    },
  },
  magazines: {
    description: 'Cabling Installation & Maintenance is the leading source of practical, hands-on information for professionals who design, install and manage the physical-layer infrastructure in data centers and networks for the communications systems of today and tomorrow.',
  },
  contactUs: {
    branding: {
      bgColor: '#ee2e30',
      logo: 'https://base.imgix.net/files/base/pennwell/cim/logo.png?h=60',
    },
    to: 'juliac@pennwell.com',
  },
  wufoo: {
    userName: 'cygnuscorporate',
  },
};
