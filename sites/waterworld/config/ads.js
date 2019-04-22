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

const path = unit => `/21687441225/WW/${unit}`;

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
  municipal: {
    lb1: { ...LB, path: path('municipal/lb1') },
    lb2: { ...LB, path: path('municipal/lb2') },
    rail1: { ...CONTENT, path: path('municipal/rail1') },
    rail2: { ...CONTENT, path: path('municipal/rail2') },
    'load-more': { ...CONTENT, path: path('municipal/load-more') },
  },
  industrial: {
    lb1: { ...LB, path: path('industrial/lb1') },
    lb2: { ...LB, path: path('industrial/lb2') },
    rail1: { ...CONTENT, path: path('industrial/rail1') },
    rail2: { ...CONTENT, path: path('industrial/rail2') },
    'load-more': { ...CONTENT, path: path('industrial/load-more') },
  },
  international: {
    lb1: { ...LB, path: path('international/lb1') },
    lb2: { ...LB, path: path('international/lb2') },
    rail1: { ...CONTENT, path: path('international/rail1') },
    rail2: { ...CONTENT, path: path('international/rail2') },
    'load-more': { ...CONTENT, path: path('international/load-more') },
  },
};
