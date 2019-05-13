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

const path = unit => `/21687441225/ILS/${unit}`;

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
  cutting: {
    lb1: { ...LB, path: path('cutting/lb1') },
    lb2: { ...LB, path: path('cutting/lb2') },
    rail1: { ...CONTENT, path: path('cutting/rail1') },
    rail2: { ...CONTENT, path: path('cutting/rail2') },
    'load-more': { ...CONTENT, path: path('cutting/load-more') },
    reskin: { ...RESKIN, path: path('cutting/reskin') },
  },
  welding: {
    lb1: { ...LB, path: path('welding/lb1') },
    lb2: { ...LB, path: path('welding/lb2') },
    rail1: { ...CONTENT, path: path('welding/rail1') },
    rail2: { ...CONTENT, path: path('welding/rail2') },
    'load-more': { ...CONTENT, path: path('welding/load-more') },
    reskin: { ...RESKIN, path: path('welding/reskin') },
  },
  micromachining: {
    lb1: { ...LB, path: path('micromachining/lb1') },
    lb2: { ...LB, path: path('micromachining/lb2') },
    rail1: { ...CONTENT, path: path('micromachining/rail1') },
    rail2: { ...CONTENT, path: path('micromachining/rail2') },
    'load-more': { ...CONTENT, path: path('micromachining/load-more') },
    reskin: { ...RESKIN, path: path('micromachining/reskin') },
  },
  'marking-engraving': {
    lb1: { ...LB, path: path('marking-engraving/lb1') },
    lb2: { ...LB, path: path('marking-engraving/lb2') },
    rail1: { ...CONTENT, path: path('marking-engraving/rail1') },
    rail2: { ...CONTENT, path: path('marking-engraving/rail2') },
    'load-more': { ...CONTENT, path: path('marking-engraving/load-more') },
    reskin: { ...RESKIN, path: path('marking-engraving/reskin') },
  },
  'surface-treatment': {
    lb1: { ...LB, path: path('surface-treatment/lb1') },
    lb2: { ...LB, path: path('surface-treatment/lb2') },
    rail1: { ...CONTENT, path: path('surface-treatment/rail1') },
    rail2: { ...CONTENT, path: path('surface-treatment/rail2') },
    'load-more': { ...CONTENT, path: path('surface-treatment/load-more') },
    reskin: { ...RESKIN, path: path('surface-treatment/reskin') },
  },
  'additive-manufacturing': {
    lb1: { ...LB, path: path('additive-manufacturing/lb1') },
    lb2: { ...LB, path: path('additive-manufacturing/lb2') },
    rail1: { ...CONTENT, path: path('additive-manufacturing/rail1') },
    rail2: { ...CONTENT, path: path('additive-manufacturing/rail2') },
    'load-more': { ...CONTENT, path: path('additive-manufacturing/load-more') },
    reskin: { ...RESKIN, path: path('additive-manufacturing/reskin') },
  },
  drilling: {
    lb1: { ...LB, path: path('drilling/lb1') },
    lb2: { ...LB, path: path('drilling/lb2') },
    rail1: { ...CONTENT, path: path('drilling/rail1') },
    rail2: { ...CONTENT, path: path('drilling/rail2') },
    'load-more': { ...CONTENT, path: path('drilling/load-more') },
    reskin: { ...RESKIN, path: path('drilling/reskin') },
  },
};
