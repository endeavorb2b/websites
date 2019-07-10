const LB1 = {
  size: [[970, 250], [970, 90], [970, 66], [728, 90], [320, 50], [300, 50], [300, 100]],
  sizeMapping: [
    { viewport: [980, 0], size: [[970, 250], [970, 90], [970, 66], [728, 90]] },
    { viewport: [750, 0], size: [728, 90] },
    { viewport: [320, 0], size: [[300, 50], [320, 50], [300, 100]] },
  ],
};
const LB2 = {
  size: [[970, 90], [728, 90], [300, 50]],
  sizeMapping: [
    { viewport: [980, 0], size: [[970, 90], [728, 90]] },
    { viewport: [750, 0], size: [728, 90] },
    { viewport: [320, 0], size: [300, 50] },
  ],
};
const CONTENT = {
  size: [[300, 250], [300, 600]],
};
const RESKIN = {};
const WA = {};

const path = unit => `/21802476813/${unit}`;

module.exports = {
  default: {
    lb1: { ...LB1, path: path('default/lb1') },
    lb2: { ...LB2, path: path('default/lb2') },
    rail1: { ...CONTENT, path: path('default/rail1') },
    'load-more': { ...CONTENT, path: path('default/load-more') },
    reskin: { ...RESKIN, path: path('default/reskin') },
    wa: { ...WA, path: path('default/wa') },
  },
};
