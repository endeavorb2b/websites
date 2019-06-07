const ads = require('./ads');
const nativeX = require('./native-x');

module.exports = {
  ads,
  nativeX,
  logos: {
    navbar: {
      src: 'https://base.imgix.net/files/base/pennwell/ils/logo.png?h=60',
      srcset: [
        'https://base.imgix.net/files/base/pennwell/ils/logo.png?h=120 2x',
      ],
    },
    footer: {
      src: 'https://base.imgix.net/files/base/pennwell/ils/logo.png?h=60',
      srcset: [
        'https://base.imgix.net/files/base/pennwell/ils/logo.png?h=120 2x',
      ],
    },
  },
  socialMediaLinks: [
    { provider: 'linkedin', href: 'https://www.linkedin.com/company/4000113' },
    { provider: 'twitter', href: 'https://twitter.com/ILS_for_Mfg' },
    { provider: 'facebook', href: 'https://www.facebook.com/industriallasersolutionsformanufacturing' },
  ],
  primaryNavItems: [
    { href: '/cutting', label: 'Cutting' },
    { href: '/welding', label: 'Welding' },
    { href: '/micromachining', label: 'Micromachining' },
    { href: '/marking-engraving', label: 'Marking & Engraving' },
    { href: '/surface-treatment', label: 'Surface Treatment' },
    { href: '/additive-manufacturing', label: 'Additive Manufacturing' },
    { href: '/drilling', label: 'Drilling' },
  ],
  secondaryNavItems: [
    { href: '/subscribe', label: 'Subscribe' },
    { href: '/magazine', label: 'Magazine' },
    { href: '/videos', label: 'Videos' },
    { href: '/white-papers', label: 'White Papers' },
    { href: '/webcasts', label: 'Webcasts' },
    { href: 'https://buyersguide.industrial-lasers.com/index.html', label: 'Buyer\'s Guide', target: '_blank' },
    { href: 'https://www.marketplaceseminar.com/index.html', label: 'LP Market Seminar', target: '_blank' },
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
      { href: '/blogs', label: 'Blogs' },
      { href: '/magazine', label: 'Magazine' },
      { href: '/videos', label: 'Videos' },
      { href: '/white-papers', label: 'White Papers' },
      { href: '/webcasts', label: 'Webcasts' },
      { href: 'https://buyersguide.industrial-lasers.com/index.html', label: 'Buyer\'s Guide', target: '_blank' },
      { href: 'https://www.marketplaceseminar.com/index.html', label: 'LP Market Seminar', target: '_blank' },
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
  gtmContainer: 'GTM-P8Q22J8',
  search: {
    engine: 'google',
    apiKey: '003355913687346718228:sdje-2o3phk',
  },
  subscriptions: {
    newsletters: 'https://endeavor.dragonforms.com/loading.do?omedasite=ILSPrefPage',
    publications: {
      '/subscribe/print/ils': 'https://eforms.kmpsgroup.com/jointforms/Forms/Subscription.aspx?pubcode=ILSD&promoCode=WS702',
      '/subscribe/print/ilscn': 'https://www.industrysourcing.com/Big5/china/Subscription.asp?magazine_code=ILS',
      '/subscribe/print/ilsjp': 'https://www.ils-japan.jp/subscription.html',
    },
  },
  magazines: {
    description: 'Lasers for Manufacturing Industrial Laser Solutions has one focus, industrial laser materials processing. We are devoted exclusively to global coverage of industrial laser applications, technology, and the people and companies who participate in this, the largest commercial portion of the global laser market. Our uniquely qualified international editorial staff has accumulated experience in this technology field exceeding 100 years.',
  },
  contactUs: {
    branding: {
      bgColor: '#106d7d',
      logo: 'https://base.imgix.net/files/base/pennwell/ils/logo.png?h=60',
    },
    to: 'juliac@pennwell.com',
  },
};
