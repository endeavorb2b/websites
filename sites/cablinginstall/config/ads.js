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

const path = unit => `/21687441225/CIM/${unit}`;

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
  'data-center': {
    lb1: { ...LB, path: path('data-center/lb1') },
    lb2: { ...LB, path: path('data-center/lb2') },
    rail1: { ...CONTENT, path: path('data-center/rail1') },
    rail2: { ...CONTENT, path: path('data-center/rail2') },
    'load-more': { ...CONTENT, path: path('data-center/load-more') },
    reskin: { ...RESKIN, path: path('data-center/reskin') },
  },
  standards: {
    lb1: { ...LB, path: path('standards/lb1') },
    lb2: { ...LB, path: path('standards/lb2') },
    rail1: { ...CONTENT, path: path('standards/rail1') },
    rail2: { ...CONTENT, path: path('standards/rail2') },
    'load-more': { ...CONTENT, path: path('standards/load-more') },
    reskin: { ...RESKIN, path: path('standards/reskin') },
  },
  cable: {
    lb1: { ...LB, path: path('cable/lb1') },
    lb2: { ...LB, path: path('cable/lb2') },
    rail1: { ...CONTENT, path: path('cable/rail1') },
    rail2: { ...CONTENT, path: path('cable/rail2') },
    'load-more': { ...CONTENT, path: path('cable/load-more') },
    reskin: { ...RESKIN, path: path('cable/reskin') },
  },
  connectivity: {
    lb1: { ...LB, path: path('connectivity/lb1') },
    lb2: { ...LB, path: path('connectivity/lb2') },
    rail1: { ...CONTENT, path: path('connectivity/rail1') },
    rail2: { ...CONTENT, path: path('connectivity/rail2') },
    'load-more': { ...CONTENT, path: path('connectivity/load-more') },
    reskin: { ...RESKIN, path: path('connectivity/reskin') },
  },
  'ip-security-av': {
    lb1: { ...LB, path: path('ip-security-av/lb1') },
    lb2: { ...LB, path: path('ip-security-av/lb2') },
    rail1: { ...CONTENT, path: path('ip-security-av/rail1') },
    rail2: { ...CONTENT, path: path('ip-security-av/rail2') },
    'load-more': { ...CONTENT, path: path('ip-security-av/load-more') },
    reskin: { ...RESKIN, path: path('ip-security-av/reskin') },
  },
  'wireless-5g': {
    lb1: { ...LB, path: path('wireless-5g/lb1') },
    lb2: { ...LB, path: path('wireless-5g/lb2') },
    rail1: { ...CONTENT, path: path('wireless-5g/rail1') },
    rail2: { ...CONTENT, path: path('wireless-5g/rail2') },
    'load-more': { ...CONTENT, path: path('wireless-5g/load-more') },
    reskin: { ...RESKIN, path: path('wireless-5g/reskin') },
  },
  'design-install': {
    lb1: { ...LB, path: path('design-install/lb1') },
    lb2: { ...LB, path: path('design-install/lb2') },
    rail1: { ...CONTENT, path: path('design-install/rail1') },
    rail2: { ...CONTENT, path: path('design-install/rail2') },
    'load-more': { ...CONTENT, path: path('design-install/load-more') },
    reskin: { ...RESKIN, path: path('design-install/reskin') },
  },
  testing: {
    lb1: { ...LB, path: path('testing/lb1') },
    lb2: { ...LB, path: path('testing/lb2') },
    rail1: { ...CONTENT, path: path('testing/rail1') },
    rail2: { ...CONTENT, path: path('testing/rail2') },
    'load-more': { ...CONTENT, path: path('testing/load-more') },
    reskin: { ...RESKIN, path: path('testing/reskin') },
  },
  innovators: {
    lb1: { ...LB, path: path('innovators/lb1') },
    lb2: { ...LB, path: path('innovators/lb2') },
    rail1: { ...CONTENT, path: path('innovators/rail1') },
    rail2: { ...CONTENT, path: path('innovators/rail2') },
    'load-more': { ...CONTENT, path: path('innovators/load-more') },
    reskin: { ...RESKIN, path: path('innovators/reskin') },
  },
};
