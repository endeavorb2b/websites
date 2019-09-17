const ads = require('./ads');
const nativeX = require('./native-x');

module.exports = {
  ads,
  nativeX,
  logos: {
    navbar: {
      src: 'https://base.imgix.net/files/base/ebm/frn/image/static/logo/site_logo.png?h=60',
      srcset: [
        'https://base.imgix.net/files/base/ebm/frn/image/static/logo/site_logo.png?h=120 2x',
      ],
    },
    footer: {
      src: 'https://base.imgix.net/files/base/ebm/frn/image/static/logo/site_logo.png?h=60',
      srcset: [
        'https://base.imgix.net/files/base/ebm/frn/image/static/logo/site_logo.png?h=120 2x',
      ],
    },
  },
  socialMediaLinks: [
    { provider: 'linkedin', href: 'https://www.linkedin.com/company/forester_media_inc-/' },
    { provider: 'twitter', href: 'https://twitter.com/foresternetwork' },
    { provider: 'facebook', href: 'https://www.facebook.com/foresternetwork' },
  ],
  navigation: {
    primary: {
      items: [
        { href: '/distributed-energy', label: 'Distributed Energy' },
        { href: '/erosion-control', label: 'Erosion Control' },
        { href: '/grading-excavation-contractor', label: 'Grading & Excavation Contractor' },
        { href: '/msw-management', label: 'MSW Management' },
        { href: '/stormwater', label: 'Stormwater' },
        { href: '/water-efficiency', label: 'Water Efficiency' },
      ],
    },
    secondary: {
      items: [
        { href: 'https://www.stormcon.com', label: 'Stormcon', target: '_blank' },
        { href: '/free-reports', label: 'Free Reports' },
        { href: '/page/advertise', label: 'Advertise' },
        { href: 'https://www.foresteruniversity.com/ProductSubCats.aspx?SubCatID=47', label: 'Books', target: '_blank' },
        { href: 'https://www.foresteruniversity.com', label: 'Training', target: '_blank' },
        { href: '/subscribe', label: 'Subscribe' },
      ],
    },
    footer: {
      items: [
        { href: '/page/about-us', label: 'About Us' },
        { href: '/contact-us', label: 'Contact Us' },
        { href: '/page/advertise', label: 'Advertise' },
        { href: 'https://www.endeavorbusinessmedia.com/privacy-policy', label: 'Privacy Policy', target: '_blank' },
        { href: 'https://www.endeavorbusinessmedia.com/endeavor-terms', label: 'Terms & Conditions', target: '_blank' },
      ],
    },
    menu: {
      topics: {
        label: 'Topics',
        items: [
          { href: '/distributed-energy', label: 'Distributed Energy' },
          { href: '/erosion-control', label: 'Erosion Control' },
          { href: '/grading-excavation-contractor', label: 'Grading & Excavation Contractor' },
          { href: '/msw-management', label: 'MSW Management' },
          { href: '/stormwater', label: 'Stormwater' },
          { href: '/water-efficiency', label: 'Water Efficiency' },
        ],
      },
      resources: {
        label: 'Resources',
        items: [
          { href: 'https://www.stormcon.com', label: 'Stormcon', target: '_blank' },
          { href: '/free-reports', label: 'Free Reports' },
          { href: '/page/advertise', label: 'Advertise' },
          { href: 'https://www.foresteruniversity.com/ProductSubCats.aspx?SubCatID=47', label: 'Books', target: '_blank' },
          { href: 'https://www.foresteruniversity.com', label: 'Training', target: '_blank' },
          { href: '/magazine', label: 'Magazine' },
          { href: '/events', label: 'Events' },
        ],
      },
      userTools: {
        label: 'User Tools',
        items: [
          { href: '/subscribe', label: 'Subscribe' },
          { href: '/page/advertise', label: 'Advertise' },
          { href: '/page/about-us', label: 'About Us' },
          { href: '/contact-us', label: 'Contact Us' },
          { href: 'https://www.endeavorbusinessmedia.com/privacy-policy', label: 'Privacy Policy', target: '_blank' },
          { href: 'https://www.endeavorbusinessmedia.com/endeavor-terms', label: 'Terms & Conditions', target: '_blank' },
        ],
      },
    },
  },
  gtmContainer: 'GTM-TNFLPD9',
  search: {
    engine: 'bing',
    apiKey: '2682f90e71ea403b9cbf6fa7740bf006',
    domain: 'foresternetwork.com',
  },
  subscriptions: {
    newsletters: '',
    publications: {
      '/subscribe/print/de': 'https://endeavor.dragonforms.com/DE_new',
      '/subscribe/print/ec': 'https://end.dragonforms.com/EC_new',
      '/subscribe/print/gxc': 'https://endeavor.dragonforms.com/GXC_new',
      '/subscribe/print/msw': 'https://endeavor.dragonforms.com/MSW_new',
      '/subscribe/print/swtr': 'https://end.dragonforms.com/SWTR_new',
      '/subscribe/print/we': 'https://end.dragonforms.com/WE_new',
    },
  },
  magazines: {
    description: '',
  },
  contactUs: {
    branding: {
      bgColor: '#164f77',
      logo: 'https://base.imgix.net/files/base/ebm/frn/image/static/logo/site_logo.png?h=60',
    },
    to: 'adsales@endeavorb2b.com',
  },
  wufoo: {
    userName: 'cygnuscorporate',
  },
};
