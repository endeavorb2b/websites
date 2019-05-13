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

const path = unit => `/21687441225/MAE/${unit}`;

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
  computers: {
    lb1: { ...LB, path: path('computers/lb1') },
    lb2: { ...LB, path: path('computers/lb2') },
    rail1: { ...CONTENT, path: path('computers/rail1') },
    rail2: { ...CONTENT, path: path('computers/rail2') },
    'load-more': { ...CONTENT, path: path('computers/load-more') },
    reskin: { ...RESKIN, path: path('computers/reskin') },
  },
  cyber: {
    lb1: { ...LB, path: path('cyber/lb1') },
    lb2: { ...LB, path: path('cyber/lb2') },
    rail1: { ...CONTENT, path: path('cyber/rail1') },
    rail2: { ...CONTENT, path: path('cyber/rail2') },
    'load-more': { ...CONTENT, path: path('cyber/load-more') },
    reskin: { ...RESKIN, path: path('cyber/reskin') },
  },
  unmanned: {
    lb1: { ...LB, path: path('unmanned/lb1') },
    lb2: { ...LB, path: path('unmanned/lb2') },
    rail1: { ...CONTENT, path: path('unmanned/rail1') },
    rail2: { ...CONTENT, path: path('unmanned/rail2') },
    'load-more': { ...CONTENT, path: path('unmanned/load-more') },
    reskin: { ...RESKIN, path: path('unmanned/reskin') },
  },
  sensors: {
    lb1: { ...LB, path: path('sensors/lb1') },
    lb2: { ...LB, path: path('sensors/lb2') },
    rail1: { ...CONTENT, path: path('sensors/rail1') },
    rail2: { ...CONTENT, path: path('sensors/rail2') },
    'load-more': { ...CONTENT, path: path('sensors/load-more') },
    reskin: { ...RESKIN, path: path('sensors/reskin') },
  },
  'rf-analog': {
    lb1: { ...LB, path: path('rf-analog/lb1') },
    lb2: { ...LB, path: path('rf-analog/lb2') },
    rail1: { ...CONTENT, path: path('rf-analog/rail1') },
    rail2: { ...CONTENT, path: path('rf-analog/rail2') },
    'load-more': { ...CONTENT, path: path('rf-analog/load-more') },
    reskin: { ...RESKIN, path: path('rf-analog/reskin') },
  },
  power: {
    lb1: { ...LB, path: path('power/lb1') },
    lb2: { ...LB, path: path('power/lb2') },
    rail1: { ...CONTENT, path: path('power/rail1') },
    rail2: { ...CONTENT, path: path('power/rail2') },
    'load-more': { ...CONTENT, path: path('power/load-more') },
    reskin: { ...RESKIN, path: path('power/reskin') },
  },
  communications: {
    lb1: { ...LB, path: path('communications/lb1') },
    lb2: { ...LB, path: path('communications/lb2') },
    rail1: { ...CONTENT, path: path('communications/rail1') },
    rail2: { ...CONTENT, path: path('communications/rail2') },
    'load-more': { ...CONTENT, path: path('communications/load-more') },
    reskin: { ...RESKIN, path: path('communications/reskin') },
  },
  test: {
    lb1: { ...LB, path: path('test/lb1') },
    lb2: { ...LB, path: path('test/lb2') },
    rail1: { ...CONTENT, path: path('test/rail1') },
    rail2: { ...CONTENT, path: path('test/rail2') },
    'load-more': { ...CONTENT, path: path('test/load-more') },
    reskin: { ...RESKIN, path: path('test/reskin') },
  },
};
