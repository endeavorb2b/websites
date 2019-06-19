const ads = require('./ads');

module.exports = {
  ads,
  company: 'PMMI Media Group',
  logos: {
    navbar: {
      src: 'https://base.imgix.net/files/base/pmmi/mundo/logo.png?h=60',
      srcset: [
        'https://base.imgix.net/files/base/pmmi/mundo/logo.png?h=120 2x',
      ],
    },
    footer: {
      src: 'https://base.imgix.net/files/base/pmmi/mundo/logo.png?h=60',
      srcset: [
        'https://base.imgix.net/files/base/pmmi/mundo/logo.png?h=120 2x',
      ],
    },
  },
  socialMediaLinks: [
    { provider: 'linkedin', href: 'https://www.linkedin.com/showcase/mundo-pmmi' },
    { provider: 'twitter', href: 'https://twitter.com/MundoPmmi' },
    { provider: 'facebook', href: 'https://www.facebook.com/MundoPMMI' },
  ],
  primaryNavItems: [
    { href: 'https://www.expopack.com.mx', label: 'EXPO PACK International', target: '_blank' },
    { href: '/articulos', label: 'Artículos' },
  ],
  secondaryNavItems: [
    { href: '/subscribe', label: 'Suscribir' },
    { href: '/videos', label: 'Vídeos' },
    { href: '/events', label: 'Eventos' },
    { href: '/webcasts', label: 'Webinars' },
  ],
  footerNavItems: [
    { href: '/', label: 'Home' },
    { href: 'https://www.expopack.com.mx', label: 'EXPO PACK International', target: '_blank' },
    { href: 'https://www.pmmimediagroup.com/pw/mundo-pmmi', label: 'Anunciar', target: '_blank' },
    { href: '/page/about-us', label: 'Sobre nosotras' },
    { href: '/page/privacy-policy', label: 'Política de privacidad' },
    { href: '/page/terms-of-use', label: 'Condiciones de uso' },
    { href: '/page/advertising-terms-conditions', label: 'Condiciones de publicidad' },
  ],
  menuItems: {
    resources: [
      { href: '/magazine', label: 'Revista' },
      { href: '/videos', label: 'Vídeos' },
      { href: '/white-papers', label: 'Libros Blancos' },
      { href: '/events', label: 'Eventos' },
    ],
    userTools: [
      { href: '/subscribe', label: 'Suscribir' },
      { href: 'https://www.pmmimediagroup.com/pw/mundo-pmmi', label: 'Anunciar', target: '_blank' },
      { href: '/page/about-us', label: 'Sobre nosotras' },
      { href: '/contact-us', label: 'Contáctenos' },
      { href: '/page/privacy-policy', label: 'Política de privacidad' },
    ],
  },
  gtmContainer: '',
  search: {
    engine: 'google',
    apiKey: '003355913687346718228:mb2grfhfx08',
  },
  contactUs: {
    branding: {
      bgColor: '#1c496d',
      logo: 'https://base.imgix.net/files/base/pmmi/mundo/logo.png?h=60',
    },
  },
};
