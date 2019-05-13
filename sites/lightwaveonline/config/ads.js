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

const path = unit => `/21687441225/LW/${unit}`;

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
  'network-design': {
    lb1: { ...LB, path: path('network-design/lb1') },
    lb2: { ...LB, path: path('network-design/lb2') },
    rail1: { ...CONTENT, path: path('network-design/rail1') },
    rail2: { ...CONTENT, path: path('network-design/rail2') },
    'load-more': { ...CONTENT, path: path('network-design/load-more') },
    reskin: { ...RESKIN, path: path('network-design/reskin') },
  },
  fttx: {
    lb1: { ...LB, path: path('fttx/lb1') },
    lb2: { ...LB, path: path('fttx/lb2') },
    rail1: { ...CONTENT, path: path('fttx/rail1') },
    rail2: { ...CONTENT, path: path('fttx/rail2') },
    'load-more': { ...CONTENT, path: path('fttx/load-more') },
    reskin: { ...RESKIN, path: path('fttx/reskin') },
  },
  'sdn-nfv': {
    lb1: { ...LB, path: path('sdn-nfv/lb1') },
    lb2: { ...LB, path: path('sdn-nfv/lb2') },
    rail1: { ...CONTENT, path: path('sdn-nfv/rail1') },
    rail2: { ...CONTENT, path: path('sdn-nfv/rail2') },
    'load-more': { ...CONTENT, path: path('sdn-nfv/load-more') },
    reskin: { ...RESKIN, path: path('sdn-nfv/reskin') },
  },
  'data-center': {
    lb1: { ...LB, path: path('data-center/lb1') },
    lb2: { ...LB, path: path('data-center/lb2') },
    rail1: { ...CONTENT, path: path('data-center/rail1') },
    rail2: { ...CONTENT, path: path('data-center/rail2') },
    'load-more': { ...CONTENT, path: path('data-center/load-more') },
    reskin: { ...RESKIN, path: path('data-center/reskin') },
  },
  test: {
    lb1: { ...LB, path: path('test/lb1') },
    lb2: { ...LB, path: path('test/lb2') },
    rail1: { ...CONTENT, path: path('test/rail1') },
    rail2: { ...CONTENT, path: path('test/rail2') },
    'load-more': { ...CONTENT, path: path('test/load-more') },
    reskin: { ...RESKIN, path: path('test/reskin') },
  },
  'optical-tech': {
    lb1: { ...LB, path: path('optical-tech/lb1') },
    lb2: { ...LB, path: path('optical-tech/lb2') },
    rail1: { ...CONTENT, path: path('optical-tech/rail1') },
    rail2: { ...CONTENT, path: path('optical-tech/rail2') },
    'load-more': { ...CONTENT, path: path('optical-tech/load-more') },
    reskin: { ...RESKIN, path: path('optical-tech/reskin') },
  },
  business: {
    lb1: { ...LB, path: path('business/lb1') },
    lb2: { ...LB, path: path('business/lb2') },
    rail1: { ...CONTENT, path: path('business/rail1') },
    rail2: { ...CONTENT, path: path('business/rail2') },
    'load-more': { ...CONTENT, path: path('business/load-more') },
    reskin: { ...RESKIN, path: path('business/reskin') },
  },
  education: {
    lb1: { ...LB, path: path('education/lb1') },
    lb2: { ...LB, path: path('education/lb2') },
    rail1: { ...CONTENT, path: path('education/rail1') },
    rail2: { ...CONTENT, path: path('education/rail2') },
    'load-more': { ...CONTENT, path: path('education/load-more') },
    reskin: { ...RESKIN, path: path('education/reskin') },
  },
  'cable-mso': {
    lb1: { ...LB, path: path('cable-mso/lb1') },
    lb2: { ...LB, path: path('cable-mso/lb2') },
    rail1: { ...CONTENT, path: path('cable-mso/rail1') },
    rail2: { ...CONTENT, path: path('cable-mso/rail2') },
    'load-more': { ...CONTENT, path: path('cable-mso/load-more') },
    reskin: { ...RESKIN, path: path('cable-mso/reskin') },
  },
};
