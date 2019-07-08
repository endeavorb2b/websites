const LB = {
  size: [[970, 250], [970, 90], [970, 66], [728, 90], [320, 50], [300, 50], [300, 100]],
  sizeMapping: [
    { viewport: [980, 0], size: [[970, 250], [970, 90], [970, 66], [728, 90]] },
    { viewport: [750, 0], size: [728, 90] },
    { viewport: [320, 0], size: [[300, 50], [320, 50], [300, 100]] },
  ],
};
const CONTENT = {
  size: [[300, 250], [300, 600]],
};
const RESKIN = {};
const WA = {};

const path = unit => `/21687441225/OS/${unit}`;

module.exports = {
  default: {
    lb1: { ...LB, path: path('default/lb1') },
    lb2: { ...LB, path: path('default/lb2') },
    rail1: { ...CONTENT, path: path('default/rail1') },
    rail2: { ...CONTENT, path: path('default/rail2') },
    'load-more': { ...CONTENT, path: path('default/load-more') },
    reskin: { ...RESKIN, path: path('default/reskin') },
    wa: { ...WA, path: path('default/wa') },
  },
  'regional-reports': {
    lb1: { ...LB, path: path('regional-reports/lb1') },
    lb2: { ...LB, path: path('regional-reports/lb2') },
    rail1: { ...CONTENT, path: path('regional-reports/rail1') },
    rail2: { ...CONTENT, path: path('regional-reports/rail2') },
    'load-more': { ...CONTENT, path: path('regional-reports/load-more') },
    reskin: { ...RESKIN, path: path('regional-reports/reskin') },
  },
  'drilling-completion': {
    lb1: { ...LB, path: path('drilling-completion/lb1') },
    lb2: { ...LB, path: path('drilling-completion/lb2') },
    rail1: { ...CONTENT, path: path('drilling-completion/rail1') },
    rail2: { ...CONTENT, path: path('drilling-completion/rail2') },
    'load-more': { ...CONTENT, path: path('drilling-completion/load-more') },
    reskin: { ...RESKIN, path: path('drilling-completion/reskin') },
  },
  'field-development': {
    lb1: { ...LB, path: path('field-development/lb1') },
    lb2: { ...LB, path: path('field-development/lb2') },
    rail1: { ...CONTENT, path: path('field-development/rail1') },
    rail2: { ...CONTENT, path: path('field-development/rail2') },
    'load-more': { ...CONTENT, path: path('field-development/load-more') },
    reskin: { ...RESKIN, path: path('field-development/reskin') },
  },
  subsea: {
    lb1: { ...LB, path: path('subsea/lb1') },
    lb2: { ...LB, path: path('subsea/lb2') },
    rail1: { ...CONTENT, path: path('subsea/rail1') },
    rail2: { ...CONTENT, path: path('subsea/rail2') },
    'load-more': { ...CONTENT, path: path('subsea/load-more') },
    reskin: { ...RESKIN, path: path('subsea/reskin') },
  },
  geosciences: {
    lb1: { ...LB, path: path('geosciences/lb1') },
    lb2: { ...LB, path: path('geosciences/lb2') },
    rail1: { ...CONTENT, path: path('geosciences/rail1') },
    rail2: { ...CONTENT, path: path('geosciences/rail2') },
    'load-more': { ...CONTENT, path: path('geosciences/load-more') },
    reskin: { ...RESKIN, path: path('geosciences/reskin') },
  },
  pipelines: {
    lb1: { ...LB, path: path('pipelines/lb1') },
    lb2: { ...LB, path: path('pipelines/lb2') },
    rail1: { ...CONTENT, path: path('pipelines/rail1') },
    rail2: { ...CONTENT, path: path('pipelines/rail2') },
    'load-more': { ...CONTENT, path: path('pipelines/load-more') },
    reskin: { ...RESKIN, path: path('pipelines/reskin') },
  },
  production: {
    lb1: { ...LB, path: path('production/lb1') },
    lb2: { ...LB, path: path('production/lb2') },
    rail1: { ...CONTENT, path: path('production/rail1') },
    rail2: { ...CONTENT, path: path('production/rail2') },
    'load-more': { ...CONTENT, path: path('production/load-more') },
    reskin: { ...RESKIN, path: path('production/reskin') },
  },
  'rigs-vessels': {
    lb1: { ...LB, path: path('rigs-vessels/lb1') },
    lb2: { ...LB, path: path('rigs-vessels/lb2') },
    rail1: { ...CONTENT, path: path('rigs-vessels/rail1') },
    rail2: { ...CONTENT, path: path('rigs-vessels/rail2') },
    'load-more': { ...CONTENT, path: path('rigs-vessels/load-more') },
    reskin: { ...RESKIN, path: path('rigs-vessels/reskin') },
  },
  deepwater: {
    lb1: { ...LB, path: path('deepwater/lb1') },
    lb2: { ...LB, path: path('deepwater/lb2') },
    rail1: { ...CONTENT, path: path('deepwater/rail1') },
    rail2: { ...CONTENT, path: path('deepwater/rail2') },
    'load-more': { ...CONTENT, path: path('deepwater/load-more') },
    reskin: { ...RESKIN, path: path('deepwater/reskin') },
  },
  'business-briefs': {
    lb1: { ...LB, path: path('business-briefs/lb1') },
    lb2: { ...LB, path: path('business-briefs/lb2') },
    rail1: { ...CONTENT, path: path('business-briefs/rail1') },
    rail2: { ...CONTENT, path: path('business-briefs/rail2') },
    'load-more': { ...CONTENT, path: path('business-briefs/load-more') },
    reskin: { ...RESKIN, path: path('business-briefs/reskin') },
  },
};
