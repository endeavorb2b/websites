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

const path = unit => `/21687441225/BOW/${unit}`;

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
  bioscience: {
    lb1: { ...LB, path: path('bioscience/lb1') },
    lb2: { ...LB, path: path('bioscience/lb2') },
    rail1: { ...CONTENT, path: path('bioscience/rail1') },
    rail2: { ...CONTENT, path: path('bioscience/rail2') },
    'load-more': { ...CONTENT, path: path('bioscience/load-more') },
    reskin: { ...RESKIN, path: path('bioscience/reskin') },
  },
  biomedicine: {
    lb1: { ...LB, path: path('biomedicine/lb1') },
    lb2: { ...LB, path: path('biomedicine/lb2') },
    rail1: { ...CONTENT, path: path('biomedicine/rail1') },
    rail2: { ...CONTENT, path: path('biomedicine/rail2') },
    'load-more': { ...CONTENT, path: path('biomedicine/load-more') },
    reskin: { ...RESKIN, path: path('biomedicine/reskin') },
  },
  'biophotonics-techniques': {
    lb1: { ...LB, path: path('biophotonics-techniques/lb1') },
    lb2: { ...LB, path: path('biophotonics-techniques/lb2') },
    rail1: { ...CONTENT, path: path('biophotonics-techniques/rail1') },
    rail2: { ...CONTENT, path: path('biophotonics-techniques/rail2') },
    'load-more': { ...CONTENT, path: path('biophotonics-techniques/load-more') },
    reskin: { ...RESKIN, path: path('biophotonics-techniques/reskin') },
  },
  'biophotonics-tools': {
    lb1: { ...LB, path: path('biophotonics-tools/lb1') },
    lb2: { ...LB, path: path('biophotonics-tools/lb2') },
    rail1: { ...CONTENT, path: path('biophotonics-tools/rail1') },
    rail2: { ...CONTENT, path: path('biophotonics-tools/rail2') },
    'load-more': { ...CONTENT, path: path('biophotonics-tools/load-more') },
    reskin: { ...RESKIN, path: path('biophotonics-tools/reskin') },
  },
};
