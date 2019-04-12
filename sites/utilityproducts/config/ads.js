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
    LB1: { ...LB, path: path('UP_LB_GENERAL') },
    CONTENT1: { ...CONTENT, path: path('UP_CONTENT1_GENERAL') },
    CONTENT2: { ...CONTENT, path: path('UP_CONTENT2_GENERAL') },
    CONTENT3: { ...CONTENT, path: path('UP_CONTENT3_GENERAL') },
    CONTENT4: { ...CONTENT, path: path('UP_CONTENT4_GENERAL') },
    RESKIN: { ...RESKIN, path: path('UP_Reskin') },
    WA: { ...WA, path: path('UP_WA') },
  },
  'transmission-distribution': {
    LB1: { ...LB, path: path('UP_LB_TRANS-DIST') },
    CONTENT1: { ...CONTENT, path: path('UP_CONTENT1_TRANS-DIST') },
    CONTENT2: { ...CONTENT, path: path('UP_CONTENT2_TRANS-DIST') },
  },
  'vehicles-accessories': {
    LB1: { ...LB, path: path('UP_LB_VEHICLE-ACCESS') },
    CONTENT1: { ...CONTENT, path: path('UP_CONTENT1_VEHICLE-ACCESS') },
    CONTENT2: { ...CONTENT, path: path('UP_CONTENT2_VEHICLE-ACCESS') },
  },
  'tools-supplies': {
    LB1: { ...LB, path: path('UP_LB_TOOLS-SUPPLIES') },
    CONTENT1: { ...CONTENT, path: path('UP_CONTENT1_TOOLS-SUPPLIES') },
    CONTENT2: { ...CONTENT, path: path('UP_CONTENT2_TOOLS-SUPPLIES') },
  },
  safety: {
    LB1: { ...LB, path: path('UP_LB_SAFETY') },
    CONTENT1: { ...CONTENT, path: path('UP_CONTENT1_SAFETY') },
    CONTENT2: { ...CONTENT, path: path('UP_CONTENT2_SAFETY') },
  },
  'line-construction-maintenance': {
    LB1: { ...LB, path: path('UP_LB_LINE-CONST-MAINT') },
    CONTENT1: { ...CONTENT, path: path('UP_CONTENT1_LINE-CONST-MAINT') },
    CONTENT2: { ...CONTENT, path: path('UP_CONTENT2_LINE-CONST-MAINT') },
  },
  'test-measurement': {
    LB1: { ...LB, path: path('UP_LB_TEST-MEASURE') },
    CONTENT1: { ...CONTENT, path: path('UP_CONTENT1_TEST-MEASURE') },
    CONTENT2: { ...CONTENT, path: path('UP_CONTENT2_TEST-MEASURE') },
  },
};
