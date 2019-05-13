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

const path = unit => `/21687441225/LFW/${unit}`;

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
  'detectors-imaging': {
    lb1: { ...LB, path: path('detectors-imaging/lb1') },
    lb2: { ...LB, path: path('detectors-imaging/lb2') },
    rail1: { ...CONTENT, path: path('detectors-imaging/rail1') },
    rail2: { ...CONTENT, path: path('detectors-imaging/rail2') },
    'load-more': { ...CONTENT, path: path('detectors-imaging/load-more') },
    reskin: { ...RESKIN, path: path('detectors-imaging/reskin') },
  },
  'lasers-sources': {
    lb1: { ...LB, path: path('lasers-sources/lb1') },
    lb2: { ...LB, path: path('lasers-sources/lb2') },
    rail1: { ...CONTENT, path: path('lasers-sources/rail1') },
    rail2: { ...CONTENT, path: path('lasers-sources/rail2') },
    'load-more': { ...CONTENT, path: path('lasers-sources/load-more') },
    reskin: { ...RESKIN, path: path('lasers-sources/reskin') },
  },
  optics: {
    lb1: { ...LB, path: path('optics/lb1') },
    lb2: { ...LB, path: path('optics/lb2') },
    rail1: { ...CONTENT, path: path('optics/rail1') },
    rail2: { ...CONTENT, path: path('optics/rail2') },
    'load-more': { ...CONTENT, path: path('optics/load-more') },
    reskin: { ...RESKIN, path: path('optics/reskin') },
  },
  'fiber-optics': {
    lb1: { ...LB, path: path('fiber-optics/lb1') },
    lb2: { ...LB, path: path('fiber-optics/lb2') },
    rail1: { ...CONTENT, path: path('fiber-optics/rail1') },
    rail2: { ...CONTENT, path: path('fiber-optics/rail2') },
    'load-more': { ...CONTENT, path: path('fiber-optics/load-more') },
    reskin: { ...RESKIN, path: path('fiber-optics/reskin') },
  },
  'software-accessories': {
    lb1: { ...LB, path: path('software-accessories/lb1') },
    lb2: { ...LB, path: path('software-accessories/lb2') },
    rail1: { ...CONTENT, path: path('software-accessories/rail1') },
    rail2: { ...CONTENT, path: path('software-accessories/rail2') },
    'load-more': { ...CONTENT, path: path('software-accessories/load-more') },
    reskin: { ...RESKIN, path: path('software-accessories/reskin') },
  },
  'test-measurement': {
    lb1: { ...LB, path: path('test-measurement/lb1') },
    lb2: { ...LB, path: path('test-measurement/lb2') },
    rail1: { ...CONTENT, path: path('test-measurement/rail1') },
    rail2: { ...CONTENT, path: path('test-measurement/rail2') },
    'load-more': { ...CONTENT, path: path('test-measurement/load-more') },
    reskin: { ...RESKIN, path: path('test-measurement/reskin') },
  },
};
