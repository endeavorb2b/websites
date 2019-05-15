const ads = require('./ads');
const nativeX = require('./native-x');

module.exports = {
  ads,
  nativeX,
  logos: {
    navbar: {
      src: 'https://base.imgix.net/files/base/pennwell/rdh/logo.png?h=60',
      srcset: [
        'https://base.imgix.net/files/base/pennwell/rdh/logo.png?h=120 2x',
      ],
    },
    footer: {
      src: 'https://base.imgix.net/files/base/pennwell/rdh/logo.png?h=60',
      srcset: [
        'https://base.imgix.net/files/base/pennwell/rdh/logo.png?h=120 2x',
      ],
    },
  },
  socialMediaLinks: [
    { provider: 'linkedin', href: 'https://www.linkedin.com/showcase/4000114/' },
    { provider: 'twitter', href: 'https://twitter.com/RDHmag' },
    { provider: 'facebook', href: 'https://www.facebook.com/RDHMagazine' },
  ],
  primaryNavItems: [
    { href: '/ergonomics', label: 'Ergonomics' },
    { href: '/infection-control', label: 'Infection Control' },
    { href: '/patient-care', label: 'Patient Care' },
    { href: '/pathology', label: 'Pathology' },
    { href: '/career-profession', label: 'Career & Profession' },
  ],
  secondaryNavItems: [
    { href: '/subscribe', label: 'Subscribe' },
    { href: '/magazine', label: 'Magazine' },
    { href: '/videos', label: 'Videos' },
    { href: '/page/about-us', label: 'About Us' },
    { href: 'https://pennwell.myabsorb.com', label: 'Earn CE', target: '_blank' },
    { href: 'https://www.dentistryiq.com/products/free-samples', label: 'Free Samples', target: '_blank' },
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
      { href: '/page/submission-guidelines', label: 'Submission Guidelines' },
      { href: 'https://pennwell.myabsorb.com', label: 'Earn CE', target: '_blank' },
      { href: 'https://www.dentistryiq.com/products/free-samples', label: 'Free Samples', target: '_blank' },
    ],
    userTools: [
      { href: '/subscribe', label: 'Subscribe' },
      { href: 'https://www.dentistryiq.com/page/advertise', label: 'Advertise', target: '_blank' },
      { href: '/page/about-us', label: 'About Us' },
      { href: '/contact-us', label: 'Contact Us' },
      { href: 'https://www.endeavorbusinessmedia.com/privacy-policy', label: 'Privacy Policy', target: '_blank' },
      { href: 'https://www.endeavorbusinessmedia.com/endeavor-terms', label: 'Terms & Conditions', target: '_blank' },
    ],
  },
  gtmContainer: 'GTM-54D4B9T',
  search: {
    engine: 'google',
    apiKey: '003355913687346718228:uz62nndii_e',
  },
  subscriptions: {
    newsletters: 'https://formdesigner.ecn5.com/GetForm?tokenuid=bd881530-bb9e-44c5-9129-818b03b42d05&promoCode=WENL2019&utm_source=eNL_sub&utm_medium=website&utm_campaign=WENL2019&utm_content=2019-02-15',
    publications: {
      '/subscribe/print/rdh': 'http://formdesigner.ecn5.com/GetForm?tokenuid=be483ce1-58cd-40a2-9ffc-db04519f2e16&promoCode=NW93&&cmpid=email_sub_rdh_website_2018',
    },
  },
  magazines: {
    description: 'RDH is published monthly for dental hygienists committed to ongoing professional growth. Reporting on topics such as hygiene practice management, evidence-based periodontics, infection control, oral pathology, new product evaluations and continuing education, RDH covers crucial issues that affect hygienists every day.',
  },
  contactUs: {
    branding: {
      bgColor: '#8956a7',
      logo: 'https://base.imgix.net/files/base/pennwell/rdh/logo.png?h=60',
    },
    to: 'zacharyk@pennwell.com',
  },
};
