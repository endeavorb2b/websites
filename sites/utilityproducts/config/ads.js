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

const path = unit => `/21687441225/UP/${unit}`;

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
  'transmission-distribution': {
    lb1: { ...LB, path: path('trans-dist/lb1') },
    lb2: { ...LB, path: path('trans-dist/lb2') },
    rail1: { ...CONTENT, path: path('trans-dist/rail1') },
    rail2: { ...CONTENT, path: path('trans-dist/rail2') },
    'load-more': { ...CONTENT, path: path('trans-dist/load-more') },
  },
  'vehicles-accessories': {
    lb1: { ...LB, path: path('vehicle-access/lb1') },
    lb2: { ...LB, path: path('vehicle-access/lb2') },
    rail1: { ...CONTENT, path: path('vehicle-access/rail1') },
    rail2: { ...CONTENT, path: path('vehicle-access/rail2') },
    'load-more': { ...CONTENT, path: path('vehicle-access/load-more') },
  },
  'tools-supplies': {
    lb1: { ...LB, path: path('tools-supplies/lb1') },
    lb2: { ...LB, path: path('tools-supplies/lb2') },
    rail1: { ...CONTENT, path: path('tools-supplies/rail1') },
    rail2: { ...CONTENT, path: path('tools-supplies/rail2') },
    'load-more': { ...CONTENT, path: path('tools-supplies/load-more') },
  },
  safety: {
    lb1: { ...LB, path: path('safety/lb1') },
    lb2: { ...LB, path: path('safety/lb2') },
    rail1: { ...CONTENT, path: path('safety/rail1') },
    rail2: { ...CONTENT, path: path('safety/rail2') },
    'load-more': { ...CONTENT, path: path('safety/load-more') },
  },
  'line-construction-maintenance': {
    lb1: { ...LB, path: path('line-const-maint/lb1') },
    lb2: { ...LB, path: path('line-const-maint/lb2') },
    rail1: { ...CONTENT, path: path('line-const-maint/rail1') },
    rail2: { ...CONTENT, path: path('line-const-maint/rail2') },
    'load-more': { ...CONTENT, path: path('line-const-maint/load-more') },
  },
  'test-measurement': {
    lb1: { ...LB, path: path('test-measure/lb1') },
    lb2: { ...LB, path: path('test-measure/lb2') },
    rail1: { ...CONTENT, path: path('test-measure/rail1') },
    rail2: { ...CONTENT, path: path('test-measure/rail2') },
    'load-more': { ...CONTENT, path: path('test-measure/load-more') },
  },
};
