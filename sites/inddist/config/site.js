const ads = require('./ads');

module.exports = {
  ads,
  company: 'Industrial Media',
  logos: {
    navbar: {
      src: 'https://base.imgix.net/files/base/indm/id/logo.png?h=40',
      srcset: [
        'https://base.imgix.net/files/base/indm/id/logo.png?h=80 2x',
      ],
    },
    footer: {
      src: 'https://base.imgix.net/files/base/indm/id/logo.png?h=60',
      srcset: [
        'https://base.imgix.net/files/base/indm/id/logo.png?h=120 2x',
      ],
    },
  },
  socialMediaLinks: [
    { provider: 'facebook', href: 'http://www.facebook.com/pages/Industrial-Distribution/111265965577111' },
    { provider: 'linkedin', href: 'http://www.linkedin.com/groups/Industrial-Distribution-3338596' },
    { provider: 'twitter', href: 'http://www.twitter.com/indistwebsite' },
    { provider: 'youtube', href: 'https://www.youtube.com/user/InDistribution' },
  ],
  navigation: {
    primary: {
      items: [
        { href: '/associations', label: 'Associations' },
        { href: '/awards', label: 'Awards' },
        { href: '/big-50', label: 'Big 50' },
        { href: '/business-technology', label: 'Business Technology' },
        { href: '/company-expansion-consolidation', label: 'Company Exapansion & Consolidation' },
        { href: '/ecommerce', label: 'E-Commerce' },
        { href: '/earnings', label: 'Earnings' },
        { href: '/economic-trends', label: 'Economic Trends' },
        { href: '/erp', label: 'ERP' },
        { href: '/logistics', label: 'Logistics' },
        { href: '/mergers-acquisitions', label: 'Mergers & Acquisitions' },
        { href: '/operations', label: 'Operations' },
        { href: '/sales-management', label: 'Sales Management' },
        { href: '/software', label: 'Software' },
        { href: '/staffing-changes', label: 'Staffing Changes' },
        { href: '/supply-chain', label: 'Supply Chain' },
        { href: '/technology-software', label: 'Technology & Software' },
        { href: '/workforce-development', label: 'Workforce Development' },
      ],
    },
    secondary: {
      items: [
        { href: '/page/about-us', label: 'About Us' },
        { href: '/page/advertising-info', label: 'Advertising Info' },
        { href: '/contact-us', label: 'Contact Us' },
        { href: '/page/directory-faqs', label: 'Directory FAQs' },
        { href: '/page/editorial-guidelines', label: 'Editorial Guidelines' },
        { href: '/page/privacy-policy', label: 'Privacy Policy' },
        { href: '/page/product-announcement-form', label: 'Product Announcement Form' },
        { href: '/subscribe', label: 'Subscriptions' },
        { href: '/page/terms-conditions', label: 'Terms & Conditions' },
        { href: '/magazine', label: 'Magazine' },
        { href: '/videos', label: 'Videos' },
        { href: '/white-papers', label: 'White Papers' },
        { href: '/events', label: 'Events' },
        { href: '/webinars', label: 'Webinars' },
      ],
    },
    footer: {
      items: [
        { href: '/page/about-us', label: 'About Us' },
        { href: '/page/advertising-info', label: 'Advertising Info' },
        { href: '/contact-us', label: 'Contact Us' },
        { href: '/page/privacy-policy', label: 'Privacy Policy' },
        { href: '/page/terms-conditions', label: 'Terms & Conditions' },
      ],
    },
    menu: {
      topics: {
        label: 'Topics',
        items: [
          { href: '/associations', label: 'Associations' },
          { href: '/awards', label: 'Awards/Promotions' },
          { href: '/big-50', label: 'Big 50' },
          { href: '/business-technology', label: 'Business Technology' },
          { href: '/earnings', label: 'Earnings' },
          { href: '/economic-trends', label: 'Economic Trends' },
          { href: '/logistics', label: 'Logistics' },
          { href: '/mergers-acquisitions', label: 'Mergers and Acquisitions' },
          { href: '/operations', label: 'Operations' },
          { href: '/sales-management', label: 'Sales Management' },
          { href: '/software', label: 'Software' },
          { href: '/supply-chain', label: 'Supply Chain' },
          { href: '/workforce-development', label: 'Workforce Development' },
        ],
      },
      resources: {
        label: 'Resources',
        items: [
          { href: '/page/about-us', label: 'About Us' },
          { href: '/page/advertising-info', label: 'Advertising Info' },
          { href: '/contact-us', label: 'Contact Us' },
          { href: '/page/directory-faqs', label: 'Directory FAQs' },
          { href: '/page/editorial-guidelines', label: 'Editorial Guidelines' },
          { href: '/page/privacy-policy', label: 'Privacy Policy' },
          { href: '/page/product-announcement-form', label: 'Product Announcement Form' },
          { href: '/subscribe', label: 'Subscriptions' },
          { href: '/page/terms-conditions', label: 'Terms & Conditions' },
          { href: '/magazine', label: 'Magazine' },
          { href: '/videos', label: 'Videos' },
          { href: '/white-papers', label: 'White Papers' },
          { href: '/events', label: 'Events' },
        ],
      },
      userTools: {
        label: 'User Tools',
        items: [
          { href: '/subscribe', label: 'Subscribe' },
          { href: '/page/advertising-info', label: 'Advertising Info' },
          { href: '/page/about-us', label: 'About Us' },
          { href: '/contact-us', label: 'Contact Us' },
          { href: '/page/privacy-policy', label: 'Privacy Policy' },
        ],
      },
    },
  },
  gtmContainer: '',
  search: {
    engine: 'google',
    apiKey: 'xxxx',
  },
  subscriptions: {
    newsletters: 'about:blank',
    publications: {
      '/subscribe/print/id': 'about:blank',
    },
  },
  magazines: {
    description: 'Distribution: How final products are delivered to consumers… - Led by Industrial Distribution, the final pillar focuses on industrial distributors of all sizes, and reaches out to facility, operations, logistics, and supply chain professionals. In addition to regular content, Industrial Distribution will release four research reports, including The Big 50, annually.  Get exclusive access to original articles, blogs, videos, product announcements, white papers, e-books, & webinars as well as curated news that is timely & informative.  You will also receive the benefit of custom personalized content recommendations in different sections of our newsletters & website to help you find more of the right information you are looking for. ',
  },
  contactUs: {
    branding: {
      bgColor: '#c60000',
      logo: 'https://base.imgix.net/files/base/indm/id/logo.png?h=60',
    },
  },
};
