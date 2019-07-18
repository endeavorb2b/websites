const ads = require('./ads');
const nativeX = require('./native-x');

module.exports = {
  ads,
  nativeX,
  logos: {
    navbar: {
      src: 'https://base.imgix.net/files/base/pennwell/lw/logo.png?h=60',
      srcset: [
        'https://base.imgix.net/files/base/pennwell/lw/logo.png?h=120 2x',
      ],
    },
    footer: {
      src: 'https://base.imgix.net/files/base/pennwell/lw/logo.png?h=60',
      srcset: [
        'https://base.imgix.net/files/base/pennwell/lw/logo.png?h=120 2x',
      ],
    },
  },
  socialMediaLinks: [
    { provider: 'linkedin', href: 'https://www.linkedin.com/company/4000932' },
    { provider: 'twitter', href: 'https://twitter.com/lightwaveonline' },
    { provider: 'facebook', href: 'https://www.facebook.com/LightwaveOnline' },
  ],
  navigation: {
    primary: {
      items: [
        { href: '/network-design', label: 'Network Design' },
        { href: '/fttx', label: 'FTTX' },
        { href: '/network-automation', label: 'Network Automation' },
        { href: '/data-center', label: 'Data Center' },
        { href: '/5g-mobile', label: '5G Mobile' },
        { href: '/test', label: 'Test' },
        { href: '/optical-tech', label: 'Optical Tech' },
        { href: '/business', label: 'Business' },
      ],
    },
    secondary: {
      items: [
        { href: '/subscribe', label: 'Subscribe' },
        { href: '/videos', label: 'Videos' },
        { href: '/white-papers', label: 'White Papers' },
        { href: '/webcasts', label: 'Webcasts' },
        { href: 'https://buyersguide.lightwaveonline.com/index.html', label: 'Buyer\'s Guide', target: '_blank' },
        { href: 'https://lightwavereviews.secure-platform.com/a/organizations/main/home', label: 'Innovation Reviews', target: '_blank' },
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
          { href: '/network-design', label: 'Network Design' },
          { href: '/fttx', label: 'FTTX' },
          { href: '/network-automation', label: 'Network Automation' },
          { href: '/data-center', label: 'Data Center' },
          { href: '/5g-mobile', label: '5G Mobile' },
          { href: '/test', label: 'Test' },
          { href: '/optical-tech', label: 'Optical Tech' },
          { href: '/business', label: 'Business' },
        ],
      },
      resources: {
        label: 'Resources',
        items: [
          { href: '/videos', label: 'Videos' },
          { href: '/white-papers', label: 'White Papers' },
          { href: '/webcasts', label: 'Webcasts' },
          { href: '/on-topic', label: 'On Topic' },
          { href: 'https://buyersguide.lightwaveonline.com/index.html', label: 'Buyer\'s Guide', target: '_blank' },
          { href: 'https://lightwavereviews.secure-platform.com/a/organizations/main/home', label: 'Innovation Reviews', target: '_blank' },
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
  gtmContainer: 'GTM-M3B7WXJ',
  search: {
    engine: 'google',
    apiKey: '003355913687346718228:wpucddduxta',
  },
  subscriptions: {
    newsletters: 'https://endeavor.dragonforms.com/loading.do?omedasite=LWPrefPage',
  },
  magazines: {
    description: '',
  },
  contactUs: {
    branding: {
      bgColor: '#000',
      logo: 'https://base.imgix.net/files/base/pennwell/lw/logo.png?h=60',
    },
    to: 'juliac@pennwell.com',
  },
  wufoo: {
    userName: 'cygnuscorporate',
  },
};
