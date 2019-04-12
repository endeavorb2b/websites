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
    LB1: { ...LB, path: path('DEFAULT/LB1') },
    LB2: { ...LB, path: path('DEFAULT/LB2') },
    CONTENT1: { ...CONTENT, path: path('DEFAULT/CONTENT1') },
    CONTENT2: { ...CONTENT, path: path('DEFAULT/CONTENT2') },
    CONTENT3: { ...CONTENT, path: path('DEFAULT/CONTENT3') },
    CONTENT4: { ...CONTENT, path: path('DEFAULT/CONTENT4') },
    RESKIN: { ...RESKIN, path: path('DEFAULT/RESKIN') },
    WA: { ...WA, path: path('DEFAULT/WA') },
  },
  'transmission-distribution': {
    LB1: { ...LB, path: path('TRANS-DIST/LB1') },
    LB2: { ...LB, path: path('TRANS-DIST/LB2') },
    CONTENT1: { ...CONTENT, path: path('TRANS-DIST/CONTENT1') },
    CONTENT2: { ...CONTENT, path: path('TRANS-DIST/CONTENT2') },
  },
  'vehicles-accessories': {
    LB1: { ...LB, path: path('VEHICLE-ACCESS/LB1') },
    LB2: { ...LB, path: path('VEHICLE-ACCESS/LB2') },
    CONTENT1: { ...CONTENT, path: path('VEHICLE-ACCESS/CONTENT1') },
    CONTENT2: { ...CONTENT, path: path('VEHICLE-ACCESS/CONTENT2') },
  },
  'tools-supplies': {
    LB1: { ...LB, path: path('TOOLS-SUPPLIES/LB1') },
    LB2: { ...LB, path: path('TOOLS-SUPPLIES/LB2') },
    CONTENT1: { ...CONTENT, path: path('TOOLS-SUPPLIES/CONTENT1') },
    CONTENT2: { ...CONTENT, path: path('TOOLS-SUPPLIES/CONTENT2') },
  },
  safety: {
    LB1: { ...LB, path: path('SAFETY/LB1') },
    LB2: { ...LB, path: path('SAFETY/LB2') },
    CONTENT1: { ...CONTENT, path: path('SAFETY/CONTENT1') },
    CONTENT2: { ...CONTENT, path: path('SAFETY/CONTENT2') },
  },
  'line-construction-maintenance': {
    LB1: { ...LB, path: path('LINE-CONST-MAINT/LB1') },
    LB2: { ...LB, path: path('LINE-CONST-MAINT/LB2') },
    CONTENT1: { ...CONTENT, path: path('LINE-CONST-MAINT/CONTENT1') },
    CONTENT2: { ...CONTENT, path: path('LINE-CONST-MAINT/CONTENT2') },
  },
  'test-measurement': {
    LB1: { ...LB, path: path('TEST-MEASURE/LB1') },
    LB2: { ...LB, path: path('TEST-MEASURE/LB2') },
    CONTENT1: { ...CONTENT, path: path('TEST-MEASURE/CONTENT1') },
    CONTENT2: { ...CONTENT, path: path('TEST-MEASURE/CONTENT2') },
  },
};
