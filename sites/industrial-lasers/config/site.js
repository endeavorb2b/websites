const ads = require('./ads');

module.exports = {
  ads,
  logos: {
    navbar: {
      src: 'https://base.imgix.net/files/base/pennwell/ils/logo.png?h=30',
      srcset: [
        'https://base.imgix.net/files/base/pennwell/ils/logo.png?h=60 2x',
      ],
    },
    footer: {
      src: 'https://base.imgix.net/files/base/pennwell/ils/logo.png?h=50',
      srcset: [
        'https://base.imgix.net/files/base/pennwell/ils/logo.png?h=100 2x',
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
    { href: '/safety', label: 'Safety' },
  ],
  secondaryNavItems: [
    { href: '/subscribe', label: 'Subscribe' },
    { href: '/magazine', label: 'Magazine' },
    { href: '/videos', label: 'Videos' },
    { href: '/page/about-us', label: 'About Us' },
  ],
  menuItems: {
    resources: [
      { href: '/magazine', label: 'Magazine' },
      { href: '/videos', label: 'Videos' },
      { href: '/white-papers', label: 'Whitepapers' },
      { href: '/webcasts', label: 'Webcasts' },
    ],
    userTools: [
      { href: '/subscribe', label: 'Subscribe' },
      { href: '/advertise', label: 'Advertise' },
      { href: '/page/about-us', label: 'About Us' },
      { href: '/contact-us', label: 'Contact Us' },
      { href: 'https://www.endeavorbusinessmedia.com/privacy-policy', label: 'Privacy Policy' },
      { href: 'https://www.endeavorbusinessmedia.com/endeavor-terms', label: 'Terms & Conditions' },
    ],
  },
  gtmContainer: 'GTM-P8Q22J8',
  search: {
    engine: 'google',
    apiKey: '003355913687346718228:sdje-2o3phk',
  },
  magazines: {
    ils: {
      name: 'Industrial Laser Solutions',
      subscribeUrl: 'http://eforms.kmpsgroup.com/jointforms/Forms/Subscription.aspx?pubcode=ILSD&promoCode=WS702',
    },
    ilscn: {
      name: 'Industrial Laser Solutions China',
      subscribeUrl: 'http://www.industrysourcing.com/Big5/china/Subscription.asp?magazine_code=ILS',
    },
    ilsjp: {
      name: 'Industrial Laser Solutions Japan',
      subscribeUrl: 'http://www.ils-japan.jp/subscription.html',
    },
  },
};
