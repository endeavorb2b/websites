const ads = require('./ads');

module.exports = {
  ads,
  company: 'PMMI Media Group',
  copyrightNotice: 'Todos los derechos reservados',
  breadcrumbs: {
    login: {
      title: 'Iniciar sesión',
    },
    magazines: {
      title: 'Revistas',
    },
    search: {
      title: 'Buscar',
    },
    subscribe: {
      title: 'Suscríbase',
    },
  },
  logos: {
    navbar: {
      src: 'https://base.imgix.net/files/base/pmmi/mundo/MundoPMMI_logo_White_notag.png?h=80',
      srcset: [
        'https://base.imgix.net/files/base/pmmi/mundo/MundoPMMI_logo_White_notag.png?h=160 2x',
      ],
    },
    footer: {
      src: 'https://base.imgix.net/files/base/pmmi/mundo/footerLogos_white.png?h=60',
      srcset: [
        'https://base.imgix.net/files/base/pmmi/mundo/footerLogos_white.png?h=120 2x',
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
      ],
    },
    secondary: {
      items: [
        { href: 'https://mundopmmi.dragonforms.com/perspectivas?pk=MundoSubNav&r=@{encrypted_customer_id}', label: 'Suscríbase', target: '_blank' },
        { href: '/automatizacion', label: 'Automatización' },
        { href: '/empaque', label: 'Empaque' },
        { href: '/procesamiento', label: 'Procesamiento' },
        { href: '/eventos', label: 'Eventos' },
      ],
    },
    footer: {
      items: [
        { href: 'https://www.pmmimediagroup.com/pw/mundo-pmmi', label: 'Anuncie', target: '_blank' },
        { href: '/page/contacto', label: 'Contacto' },
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
          { href: '/eventos', label: 'Eventos' },
          { href: '/videos', label: 'Vídeos' },
        ],
      },
      userTools: {
        label: 'Herramientas de usuario',
        items: [
          { href: 'https://mundopmmi.dragonforms.com/perspectivas?pk=MundoSubNav&r=@{encrypted_customer_id}', label: 'Suscríbase', target: '_blank' },
          { href: 'https://www.pmmimediagroup.com/pw/mundo-pmmi', label: 'Anuncie', target: '_blank' },
          { href: '/page/acerca-de-nosotros', label: 'Acerca de nosotros' },
          { href: '/page/contacto', label: 'Contacto' },
          { href: '/page/privacidad', label: 'Privacidad' },
          { href: '/page/condiciones-de-uso', label: 'Condiciones de uso' },
          { href: '/page/terminos-y-condiciones-de-publicidad', label: 'Términos y condiciones de publicidad' },
        ],
      },
    },
  },
  gtmContainer: 'GTM-WKC3D3X',
  search: {
    engine: 'google',
    apiKey: '017383739850048358259:ngawhyv_sgi',
  },
  contactUs: {
    branding: {
      bgColor: '#1c496d',
      logo: 'https://base.imgix.net/files/base/pmmi/mundo/logo.png?h=60',
    },
  },
};
