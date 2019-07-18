const ads = require('./ads');

module.exports = {
  ads,
  company: 'PMMI Media Group',
  logos: {
    navbar: {
      src: 'https://base.imgix.net/files/base/pmmi/mundo/MundoPMMI_logo_White_notag.png?h=60',
      srcset: [
        'https://base.imgix.net/files/base/pmmi/mundo/MundoPMMI_logo_White_notag.png?h=120 2x',
      ],
    },
    footer: {
      src: 'https://base.imgix.net/files/base/pmmi/mundo/MundoPMMI_logo_White_notag.png?h=60',
      srcset: [
        'https://base.imgix.net/files/base/pmmi/mundo/MundoPMMI_logo_White_notag.png?h=120 2x',
      ],
    },
  },
  socialMediaLinks: [
    { provider: 'linkedin', href: 'https://www.linkedin.com/showcase/mundo-pmmi' },
    { provider: 'twitter', href: 'https://twitter.com/MundoPmmi' },
    { provider: 'facebook', href: 'https://www.facebook.com/MundoPMMI' },
  ],
  navigation: {
    primary: {
      items: [
        { href: '/automatizacion', label: 'Automatización' },
        { href: '/empaque', label: 'Empaque' },
        { href: '/procesamiento', label: 'Procesamiento' },
      ],
    },
    secondary: {
      items: [
        { href: '/subscribe', label: 'Suscríbase' },
        { href: '/automatizacion', label: 'Automatización' },
        { href: '/empaque', label: 'Empaque' },
        { href: '/procesamiento', label: 'Procesamiento' },
        { href: '/events', label: 'Eventos' },
      ],
    },
    footer: {
      items: [
        { href: '/page/anuncie', label: 'Anuncie' },
        { href: '/page/contrato', label: 'Contrato' },
        { href: '/page/privacidad', label: 'Privacidad' },
        { href: '/page/condiciones-de-uso', label: 'Condiciones de uso' },
        { href: '/page/terminos-y-condiciones-de-publicidad', label: 'Términos y condiciones de publicidad' },
      ],
    },
    menu: {
      topics: {
        label: 'Temas',
        items: [
          { href: '/automatizacion', label: 'Automatización' },
          { href: '/empaque', label: 'Empaque' },
          { href: '/procesamiento', label: 'Procesamiento' },
        ],
      },
      resources: {
        label: 'Recursos',
        items: [
          { href: '/events', label: 'Eventos' },
          { href: '/', label: 'Descargas' },
          { href: '/videos', label: 'Vídeos' },
        ],
      },
      userTools: {
        label: 'Herramientas de usuario',
        items: [
          { href: '/subscribe', label: 'Suscríbase' },
          { href: '/page/anuncie', label: 'Anuncie' },
          { href: '/acerca-de-nosotros', label: 'Acerca de nosotros' },
          { href: '/page/contrato', label: 'Contrato' },
          { href: '/page/privacidad', label: 'Privacidad' },
          { href: '/page/condiciones-de-uso', label: 'Condiciones de uso' },
          { href: '/page/terminos-y-condiciones-de-publicidad', label: 'Términos y condiciones de publicidad' },
        ],
      },
    },
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
