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

const path = unit => `/21687441225/OGJ/${unit}`;

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
  'general-interest': {
    lb1: { ...LB, path: path('general-interest/lb1') },
    lb2: { ...LB, path: path('general-interest/lb2') },
    rail1: { ...CONTENT, path: path('general-interest/rail1') },
    rail2: { ...CONTENT, path: path('general-interest/rail2') },
    'load-more': { ...CONTENT, path: path('general-interest/load-more') },
    reskin: { ...RESKIN, path: path('general-interest/reskin') },
  },
  'exploration-development': {
    lb1: { ...LB, path: path('exploration-development/lb1') },
    lb2: { ...LB, path: path('exploration-development/lb2') },
    rail1: { ...CONTENT, path: path('exploration-development/rail1') },
    rail2: { ...CONTENT, path: path('exploration-development/rail2') },
    'load-more': { ...CONTENT, path: path('exploration-development/load-more') },
    reskin: { ...RESKIN, path: path('exploration-development/reskin') },
  },
  'drilling-production': {
    lb1: { ...LB, path: path('drilling-production/lb1') },
    lb2: { ...LB, path: path('drilling-production/lb2') },
    rail1: { ...CONTENT, path: path('drilling-production/rail1') },
    rail2: { ...CONTENT, path: path('drilling-production/rail2') },
    'load-more': { ...CONTENT, path: path('drilling-production/load-more') },
    reskin: { ...RESKIN, path: path('drilling-production/reskin') },
  },
  'refining-processing': {
    lb1: { ...LB, path: path('refining-processing/lb1') },
    lb2: { ...LB, path: path('refining-processing/lb2') },
    rail1: { ...CONTENT, path: path('refining-processing/rail1') },
    rail2: { ...CONTENT, path: path('refining-processing/rail2') },
    'load-more': { ...CONTENT, path: path('refining-processing/load-more') },
    reskin: { ...RESKIN, path: path('refining-processing/reskin') },
  },
  'pipelines-transportation': {
    lb1: { ...LB, path: path('pipelines-transportation/lb1') },
    lb2: { ...LB, path: path('pipelines-transportation/lb2') },
    rail1: { ...CONTENT, path: path('pipelines-transportation/rail1') },
    rail2: { ...CONTENT, path: path('pipelines-transportation/rail2') },
    'load-more': { ...CONTENT, path: path('pipelines-transportation/load-more') },
    reskin: { ...RESKIN, path: path('pipelines-transportation/reskin') },
  },
};
