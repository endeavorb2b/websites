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

const path = unit => `/21687441225/VSD/${unit}`;

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
  factory: {
    lb1: { ...LB, path: path('factory/lb1') },
    lb2: { ...LB, path: path('factory/lb2') },
    rail1: { ...CONTENT, path: path('factory/rail1') },
    rail2: { ...CONTENT, path: path('factory/rail2') },
    'load-more': { ...CONTENT, path: path('factory/load-more') },
    reskin: { ...RESKIN, path: path('factory/reskin') },
  },
  'non-factory': {
    lb1: { ...LB, path: path('non-factory/lb1') },
    lb2: { ...LB, path: path('non-factory/lb2') },
    rail1: { ...CONTENT, path: path('non-factory/rail1') },
    rail2: { ...CONTENT, path: path('non-factory/rail2') },
    'load-more': { ...CONTENT, path: path('non-factory/load-more') },
    reskin: { ...RESKIN, path: path('non-factory/reskin') },
  },
  cameras: {
    lb1: { ...LB, path: path('cameras/lb1') },
    lb2: { ...LB, path: path('cameras/lb2') },
    rail1: { ...CONTENT, path: path('cameras/rail1') },
    rail2: { ...CONTENT, path: path('cameras/rail2') },
    'load-more': { ...CONTENT, path: path('cameras/load-more') },
    reskin: { ...RESKIN, path: path('cameras/reskin') },
  },
  'boards-software': {
    lb1: { ...LB, path: path('boards-software/lb1') },
    lb2: { ...LB, path: path('boards-software/lb2') },
    rail1: { ...CONTENT, path: path('boards-software/rail1') },
    rail2: { ...CONTENT, path: path('boards-software/rail2') },
    'load-more': { ...CONTENT, path: path('boards-software/load-more') },
    reskin: { ...RESKIN, path: path('boards-software/reskin') },
  },
  embedded: {
    lb1: { ...LB, path: path('embedded/lb1') },
    lb2: { ...LB, path: path('embedded/lb2') },
    rail1: { ...CONTENT, path: path('embedded/rail1') },
    rail2: { ...CONTENT, path: path('embedded/rail2') },
    'load-more': { ...CONTENT, path: path('embedded/load-more') },
    reskin: { ...RESKIN, path: path('embedded/reskin') },
  },
  unmanned: {
    lb1: { ...LB, path: path('unmanned/lb1') },
    lb2: { ...LB, path: path('unmanned/lb2') },
    rail1: { ...CONTENT, path: path('unmanned/rail1') },
    rail2: { ...CONTENT, path: path('unmanned/rail2') },
    'load-more': { ...CONTENT, path: path('unmanned/load-more') },
    reskin: { ...RESKIN, path: path('unmanned/reskin') },
  },
  nextgen: {
    lb1: { ...LB, path: path('nextgen/lb1') },
    lb2: { ...LB, path: path('nextgen/lb2') },
    rail1: { ...CONTENT, path: path('nextgen/rail1') },
    rail2: { ...CONTENT, path: path('nextgen/rail2') },
    'load-more': { ...CONTENT, path: path('nextgen/load-more') },
    reskin: { ...RESKIN, path: path('nextgen/reskin') },
  },
  emerging: {
    lb1: { ...LB, path: path('emerging/lb1') },
    lb2: { ...LB, path: path('emerging/lb2') },
    rail1: { ...CONTENT, path: path('emerging/rail1') },
    rail2: { ...CONTENT, path: path('emerging/rail2') },
    'load-more': { ...CONTENT, path: path('emerging/load-more') },
    reskin: { ...RESKIN, path: path('emerging/reskin') },
  },
  '3d-imaging': {
    lb1: { ...LB, path: path('3d-imaging/lb1') },
    lb2: { ...LB, path: path('3d-imaging/lb2') },
    rail1: { ...CONTENT, path: path('3d-imaging/rail1') },
    rail2: { ...CONTENT, path: path('3d-imaging/rail2') },
    'load-more': { ...CONTENT, path: path('3d-imaging/load-more') },
    reskin: { ...RESKIN, path: path('3d-imaging/reskin') },
  },
  'lighting-optics': {
    lb1: { ...LB, path: path('lighting-optics/lb1') },
    lb2: { ...LB, path: path('lighting-optics/lb2') },
    rail1: { ...CONTENT, path: path('lighting-optics/rail1') },
    rail2: { ...CONTENT, path: path('lighting-optics/rail2') },
    'load-more': { ...CONTENT, path: path('lighting-optics/load-more') },
    reskin: { ...RESKIN, path: path('lighting-optics/reskin') },
  },
  'cameras-accessories': {
    lb1: { ...LB, path: path('cameras-accessories/lb1') },
    lb2: { ...LB, path: path('cameras-accessories/lb2') },
    rail1: { ...CONTENT, path: path('cameras-accessories/rail1') },
    rail2: { ...CONTENT, path: path('cameras-accessories/rail2') },
    'load-more': { ...CONTENT, path: path('cameras-accessories/load-more') },
    reskin: { ...RESKIN, path: path('cameras-accessories/reskin') },
  },
};
