const LB = {
  size: [[970, 250], [970, 90], [728, 90], [320, 50], [300, 50], [300, 100]],
  sizeMapping: [
    { viewport: [980, 0], size: [[970, 250], [970, 90], [728, 90]] },
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
    LB1: { ...LB, path: path('default/lb1') },
    LB2: { ...LB, path: path('default/lb2') },
    CONTENT1: { ...CONTENT, path: path('default/content1') },
    CONTENT2: { ...CONTENT, path: path('default/content2') },
    CONTENT3: { ...CONTENT, path: path('default/content3') },
    CONTENT4: { ...CONTENT, path: path('default/content4') },
    RESKIN: { ...RESKIN, path: path('default/reskin') },
    WA: { ...WA, path: path('default/wa') },
  },
  'transmission-distribution': {
    LB1: { ...LB, path: path('trans-dist/lb1') },
    LB2: { ...LB, path: path('trans-dist/lb2') },
    CONTENT1: { ...CONTENT, path: path('trans-dist/content1') },
    CONTENT2: { ...CONTENT, path: path('trans-dist/content2') },
  },
  'vehicles-accessories': {
    LB1: { ...LB, path: path('vehicle-access/lb1') },
    LB2: { ...LB, path: path('vehicle-access/lb2') },
    CONTENT1: { ...CONTENT, path: path('vehicle-access/content1') },
    CONTENT2: { ...CONTENT, path: path('vehicle-access/content2') },
  },
  'tools-supplies': {
    LB1: { ...LB, path: path('tools-supplies/lb1') },
    LB2: { ...LB, path: path('tools-supplies/lb2') },
    CONTENT1: { ...CONTENT, path: path('tools-supplies/content1') },
    CONTENT2: { ...CONTENT, path: path('tools-supplies/content2') },
  },
  safety: {
    LB1: { ...LB, path: path('safety/lb1') },
    LB2: { ...LB, path: path('safety/lb2') },
    CONTENT1: { ...CONTENT, path: path('safety/content1') },
    CONTENT2: { ...CONTENT, path: path('safety/content2') },
  },
  'line-construction-maintenance': {
    LB1: { ...LB, path: path('line-const-maint/lb1') },
    LB2: { ...LB, path: path('line-const-maint/lb2') },
    CONTENT1: { ...CONTENT, path: path('line-const-maint/content1') },
    CONTENT2: { ...CONTENT, path: path('line-const-maint/content2') },
  },
  'test-measurement': {
    LB1: { ...LB, path: path('test-measure/lb1') },
    LB2: { ...LB, path: path('test-measure/lb2') },
    CONTENT1: { ...CONTENT, path: path('test-measure/content1') },
    CONTENT2: { ...CONTENT, path: path('test-measure/content2') },
  },
};
