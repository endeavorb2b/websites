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

const path = unit => `/21687441225/EE/${unit}`;

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
  'data-center': {
    lb1: { ...LB, path: path('data-center/lb1') },
    lb2: { ...LB, path: path('data-center/lb2') },
    rail1: { ...CONTENT, path: path('data-center/rail1') },
    rail2: { ...CONTENT, path: path('data-center/rail2') },
    'load-more': { ...CONTENT, path: path('data-center/load-more') },
    reskin: { ...RESKIN, path: path('data-center/reskin') },
  },
  applications: {
    lb1: { ...LB, path: path('applications/lb1') },
    lb2: { ...LB, path: path('applications/lb2') },
    rail1: { ...CONTENT, path: path('applications/rail1') },
    rail2: { ...CONTENT, path: path('applications/rail2') },
    'load-more': { ...CONTENT, path: path('applications/load-more') },
    reskin: { ...RESKIN, path: path('applications/reskin') },
  },
  industries: {
    lb1: { ...LB, path: path('industries/lb1') },
    lb2: { ...LB, path: path('industries/lb2') },
    rail1: { ...CONTENT, path: path('industries/rail1') },
    rail2: { ...CONTENT, path: path('industries/rail2') },
    'load-more': { ...CONTENT, path: path('industries/load-more') },
    reskin: { ...RESKIN, path: path('industries/reskin') },
  },
  instrumentation: {
    lb1: { ...LB, path: path('instrumentation/lb1') },
    lb2: { ...LB, path: path('instrumentation/lb2') },
    rail1: { ...CONTENT, path: path('instrumentation/rail1') },
    rail2: { ...CONTENT, path: path('instrumentation/rail2') },
    'load-more': { ...CONTENT, path: path('instrumentation/load-more') },
    reskin: { ...RESKIN, path: path('instrumentation/reskin') },
  },
  'test-issues-techniques': {
    lb1: { ...LB, path: path('test-issues-techniques/lb1') },
    lb2: { ...LB, path: path('test-issues-techniques/lb2') },
    rail1: { ...CONTENT, path: path('test-issues-techniques/rail1') },
    rail2: { ...CONTENT, path: path('test-issues-techniques/rail2') },
    'load-more': { ...CONTENT, path: path('test-issues-techniques/load-more') },
    reskin: { ...RESKIN, path: path('test-issues-techniques/reskin') },
  },
};
