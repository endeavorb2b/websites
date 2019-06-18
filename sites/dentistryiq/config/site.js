const ads = require('./ads');
const nativeX = require('./native-x');

module.exports = {
  ads,
  nativeX,
  logos: {
    navbar: {
      src: 'https://base.imgix.net/files/base/pennwell/diq/logo.png?h=60',
      srcset: [
        'https://base.imgix.net/files/base/pennwell/diq/logo.png?h=120 2x',
      ],
    },
    footer: {
      src: 'https://base.imgix.net/files/base/pennwell/diq/logo.png?h=60',
      srcset: [
        'https://base.imgix.net/files/base/pennwell/diq/logo.png?h=120 2x',
      ],
    },
  },
  socialMediaLinks: [
    { provider: 'linkedin', href: 'https://www.linkedin.com/company/dentistry-iq' },
    { provider: 'twitter', href: 'https://twitter.com/dentistryiq' },
    { provider: 'facebook', href: 'https://www.facebook.com/DentistryIQ' },
  ],
  primaryNavItems: [
    { href: '/dental-hygiene', label: 'Dental Hygiene' },
    { href: '/clinical', label: 'Clinical' },
    { href: '/products', label: 'Products' },
    { href: '/practice-management', label: 'Practice Management' },
    { href: '/front-office', label: 'Front Office' },
    { href: '/dental-assisting', label: 'Dental Assisting' },
  ],
  secondaryNavItems: [
    { href: '/subscribe', label: 'Subscribe' },
    { href: '/videos', label: 'Videos' },
    { href: '/page/about-us', label: 'About Us' },
    { href: 'https://pennwell.myabsorb.com', label: 'Earn CE', target: '_blank' },
    { href: '/products/free-samples', label: 'Free Samples' },
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
      { href: '/front-office/office-forms', label: 'Front Office Forms' },
      { href: '/magazine', label: 'Magazine' },
      { href: '/videos', label: 'Videos' },
      { href: '/white-papers', label: 'White Papers' },
      { href: '/webcasts', label: 'Webcasts' },
      { href: '/blogs', label: 'Blogs' },
      { href: '/page/submission-guidelines', label: 'Submission Guidelines' },
      { href: 'https://pennwell.myabsorb.com', label: 'Earn CE', target: '_blank' },
      { href: '/products/free-samples', label: 'Free Samples' },
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
  gtmContainer: 'GTM-MNNGJ32',
  search: {
    engine: 'google',
    apiKey: '003355913687346718228:prps-rbhnq0',
  },
  subscriptions: {
    publications: {
      '/subscribe/print/de': 'https://eforms.kmpsgroup.com/jointforms/Forms/Subscription.aspx?pubcode=DE&promoCode=NW88NR',
      '/subscribe/print/rdh': 'https://formdesigner.ecn5.com/GetForm?tokenuid=be483ce1-58cd-40a2-9ffc-db04519f2e16&promoCode=NW93&&cmpid=email_sub_rdh_website_2018',
    },
  },
  contactUs: {
    branding: {
      bgColor: '#0f4069',
      logo: 'https://base.imgix.net/files/base/pennwell/diq/logo.png?h=60',
    },
    to: 'zacharyk@pennwell.com',
  },
};
