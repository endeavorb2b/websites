module.exports = {
  acbm: {
    name: 'AC Business Media',
    sites: {
      dmnews: {
        name: 'DM News',
        domain: 'dmnews.com',
        tenantKey: 'acbm_dmn',
        replicaSet: 'caprica',
        primaryNav: [],
        secondaryNavItems: [],
        adUnits: {
          // ...
        }
      },
      fcp: {
        // ...
      },
      fl: {
        // ...
      },
      ooh: {
        // ...
      },
      sdce: {
        // ...
      },
    },
    as3: {
      baseplatform: {
        // ...
      },
    },
    // ...
    ebm: {
      up: {
        name: 'Utlity Products',
        domain: 'utilityproducts.com',
        logo: 'https://cdn.utilityproducts.com/',
        tenantKey: 'ebm_up',
        replicaSet: 'aerilon',
        primaryNav: [
          { to: '/transmission-distribution', label: 'Transmission & Distribution' },
          { to: '/vehicles-accessories', label: 'Vehicles & Accessories' },
          { to: '/tools-supplies', label: 'Tools & Supplies' },
          { to: '/safety', label: 'Safety' },
          { to: '/line-construction-maintenance', label: 'Line Construction & Maintenance' },
          { to: '/test-measurement', label: 'Test & Measurement' },
        ],
        secondaryNavItems: [
          { to: '/videos', label: 'Videos' },
          { to: '/white-papers', label: 'White Papers' },
          { to: '/events', label: 'Events' },
          { to: '/advertise', label: 'Advertise' },
          { to: '/contact-us', label: 'Contact Us' },
        ],
        adUnits: {
          BS: {
            path: '/21687441225/UP/UP_BS',
            size: [[970, 250], [970, 90], [728, 90], [300, 50]],
          },
          MR: {
            path: '/21687441225/UP/UP_MR',
            size: [300, 250],
          },
          HP: {
            path: '/21687441225/UP/UP_HP',
            size: [300, 600],
          },
        }
      },
    },
  },
};

// Need to update ^
const sites = [
  // AC Business Media
  { account: 'acbm', group: 'dmn',  namespace: 'dmnews', tenantKey: 'acbm_dmn', replicaSet: caprica, domain: 'dmnews.com' },
  { account: 'acbm', group: 'fcp',  namespace: 'forconstructionpros', tenantKey: 'acbm_fcp', replicaSet: caprica },
  { account: 'acbm', group: 'fl',   namespace: 'foodlogistics', tenantKey: 'acbm_fl', replicaSet: caprica },
  { account: 'acbm', group: 'ooh',  namespace: 'oemoffhighway', tenantKey: 'acbm_ooh', replicaSet: caprica },
  { account: 'acbm', group: 'sdce', namespace: 'sdcexec', tenantKey: 'acbm_sdce', replicaSet: caprica },

  // AS3
  { account: 'as3', group: 'baseplatform', namespace: 'baseplatform', tenantKey: 'as3_baseplatform', replicaSet: picon },

  // BizBash
  { account: 'bizbash', group: 'bzb', namespace: 'bizbash', tenantKey: 'bizbash_bzb', replicaSet: caprica },

  // Carey Media
  { account: 'scomm', group: 'kcp',   namespace: 'thepitchkc', tenantKey: 'scomm_kcp', replicaSet: caprica },

  // Cygnus Business Media
  { account: 'cygnus', group: 'cavc', namespace: 'aviationpros', tenantKey: 'cygnus_cavc', replicaSet: picon },
  { account: 'cygnus', group: 'cpa',  namespace: 'cpapracticeadvisor', tenantKey: 'cygnus_cpa', replicaSet: picon },
  { account: 'cygnus', group: 'fhc',  namespace: 'firehouse', tenantKey: 'cygnus_fhc', replicaSet: picon },
  { account: 'cygnus', group: 'll',   namespace: 'locksmithledger', tenantKey: 'cygnus_ll', replicaSet: picon },
  { account: 'cygnus', group: 'mass', namespace: 'masstransitmag', tenantKey: 'cygnus_mass', replicaSet: picon },
  { account: 'cygnus', group: 'ofcr', namespace: 'officer', tenantKey: 'cygnus_ofcr', replicaSet: picon, version: '0.2.2' },
  { account: 'cygnus', group: 'siw',  namespace: 'securityinfowatch', tenantKey: 'cygnus_siw', replicaSet: picon },
  { account: 'cygnus', group: 'vmw',  namespace: 'vendingmarketwatch', tenantKey: 'cygnus_vmw', replicaSet: picon },
  { account: 'cygnus', group: 'vspc', namespace: 'vehicleservicepros', tenantKey: 'cygnus_vspc', replicaSet: picon },

  // Endeavor Business Media
  { account: 'ebm', group: 'ee',  namespace: 'evaluationengineering', tenantKey: 'ebm_ee', replicaSet: picon, version: '0.2.2' },
  { account: 'ebm', group: 'fcn', namespace: 'flowcontrolnetwork', tenantKey: 'ebm_fcn', replicaSet: picon },
  { account: 'ebm', group: 'hci', namespace: 'hcinnovationgroup', tenantKey: 'ebm_hci', replicaSet: picon },
  { account: 'ebm', group: 'hpn', namespace: 'hpnonline', tenantKey: 'ebm_hpn', replicaSet: picon },
  { account: 'ebm', group: 'mlo', namespace: 'mlo-online', tenantKey: 'ebm_mlo', replicaSet: picon },
  { account: 'ebm', group: 'pm',  namespace: 'processingmagazine', tenantKey: 'ebm_pm', replicaSet: picon },
  { account: 'ebm', group: 'pmm', namespace: 'plasticsmachinerymagazine', tenantKey: 'ebm_pmm', replicaSet: picon },
  { account: 'ebm', group: 'wto', namespace: 'watertechonline', tenantKey: 'ebm_wto', replicaSet: picon },

  // Euclid Media Group
  { account: 'euclid', group: 'cb',       namespace: 'citybeat', tenantKey: 'scomm_cb', replicaSet: caprica },
  { account: 'euclid', group: 'cltampa',  namespace: 'cltampa', tenantKey: 'scomm_cltampa', replicaSet: caprica },

  // FW Publishing
  { account: 'fwp', group: 'nfn', namespace: 'nfocusnashville', tenantKey: 'scomm_nfn', replicaSet: caprica },
  { account: 'fwp', group: 'nvs', namespace: 'nashvillescene', tenantKey: 'scomm_nvs', replicaSet: caprica },
  { account: 'fwp', group: 'nvp', namespace: 'nashvillepost', tenantKey: 'scomm_nvp', replicaSet: caprica },

  // Industrial Media Group
  { account: 'indm', group: 'cen', namespace: 'cannabisequipmentnews', tenantKey: 'indm_cen', replicaSet: caprica },
  { account: 'indm', group: 'ddt', namespace: 'designdevelopmenttoday', tenantKey: 'indm_ddt', replicaSet: caprica },
  { account: 'indm', group: 'ien', namespace: 'ien', tenantKey: 'indm_ien', replicaSet: caprica },
  { account: 'indm', group: 'mia', namespace: 'madeinamericaseries', tenantKey: 'indm_mia', replicaSet: aerilon },

  // PennWell Corporation
  { account: 'penwell', group: 'bow',   namespace: 'bioopticsworld', tenantKey: 'penwell_bow', replicaSet: aerilon },
  { account: 'penwell', group: 'btr',   namespace: 'broadbandtechreport', tenantKey: 'penwell_btr', replicaSet: aerilon },
  { account: 'penwell', group: 'cim',   namespace: 'cablinginstall', tenantKey: 'penwell_cim', replicaSet: aerilon },
  { account: 'penwell', group: 'dace',  namespace: 'dentalacademyofce', tenantKey: 'penwell_dace', replicaSet: aerilon },
  { account: 'penwell', group: 'de',    namespace: 'dentaleconomics', tenantKey: 'penwell_de', replicaSet: aerilon },
  { account: 'penwell', group: 'diq',   namespace: 'dentistryiq', tenantKey: 'penwell_diq', replicaSet: aerilon },
  { account: 'penwell', group: 'ias',   namespace: 'intelligent-aerospace', tenantKey: 'penwell_ias', replicaSet: aerilon },
  { account: 'penwell', group: 'ils',   namespace: 'industrial-lasers', tenantKey: 'penwell_ils', replicaSet: aerilon },
  { account: 'penwell', group: 'leds',  namespace: 'ledsmagazine', tenantKey: 'penwell_leds', replicaSet: aerilon },
  { account: 'penwell', group: 'lfw',   namespace: 'laserfocusworld', tenantKey: 'penwell_lfw', replicaSet: aerilon },
  { account: 'penwell', group: 'lw',    namespace: 'lightwaveonline', tenantKey: 'penwell_lw', replicaSet: aerilon },
  { account: 'penwell', group: 'mae',   namespace: 'militaryaerospace', tenantKey: 'penwell_mae', replicaSet: aerilon },
  { account: 'penwell', group: 'os',    namespace: 'offshore-mag', tenantKey: 'penwell_os', replicaSet: aerilon },
  { account: 'penwell', group: 'ogj',   namespace: 'ogj', tenantKey: 'penwell_ogj', replicaSet: aerilon },
  { account: 'penwell', group: 'rdh',   namespace: 'rdhmag', tenantKey: 'penwell_rdh', replicaSet: aerilon },
  { account: 'penwell', group: 'sr',    namespace: 'perioimplantadvisory', tenantKey: 'penwell_sr', replicaSet: aerilon },
  { account: 'penwell', group: 'su',    namespace: 'strategies-u', tenantKey: 'penwell_su', replicaSet: aerilon },
  { account: 'penwell', group: 'up',    namespace: 'utilityproducts', tenantKey: 'penwell_up', replicaSet: aerilon },
  { account: 'penwell', group: 'vsd',   namespace: 'vision-systems', tenantKey: 'penwell_vsd', replicaSet: aerilon },
  { account: 'penwell', group: 'ww',    namespace: 'waterworld', tenantKey: 'penwell_ww', replicaSet: aerilon },

  // Washington City Paper
  { account: 'wcp', group: 'wcp',   namespace: 'washingtoncitypaper', tenantKey: 'scomm_wcp', replicaSet: caprica },

  // What They Think
  { account: 'wtt', group: 'pn',   namespace: 'printingnews', tenantKey: 'cygnus_mprc', replicaSet: caprica },

];
