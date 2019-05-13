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

const path = unit => `/21687441225/LEDS/${unit}`;

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
  'leds-ssl-design': {
    lb1: { ...LB, path: path('leds-ssl-design/lb1') },
    lb2: { ...LB, path: path('leds-ssl-design/lb2') },
    rail1: { ...CONTENT, path: path('leds-ssl-design/rail1') },
    rail2: { ...CONTENT, path: path('leds-ssl-design/rail2') },
    'load-more': { ...CONTENT, path: path('leds-ssl-design/load-more') },
    reskin: { ...RESKIN, path: path('leds-ssl-design/reskin') },
  },
  'manufacturing-services-testing': {
    lb1: { ...LB, path: path('manufacturing-services-testing/lb1') },
    lb2: { ...LB, path: path('manufacturing-services-testing/lb2') },
    rail1: { ...CONTENT, path: path('manufacturing-services-testing/rail1') },
    rail2: { ...CONTENT, path: path('manufacturing-services-testing/rail2') },
    'load-more': { ...CONTENT, path: path('manufacturing-services-testing/load-more') },
    reskin: { ...RESKIN, path: path('manufacturing-services-testing/reskin') },
  },
  'architectural-lighting': {
    lb1: { ...LB, path: path('architectural-lighting/lb1') },
    lb2: { ...LB, path: path('architectural-lighting/lb2') },
    rail1: { ...CONTENT, path: path('architectural-lighting/rail1') },
    rail2: { ...CONTENT, path: path('architectural-lighting/rail2') },
    'load-more': { ...CONTENT, path: path('architectural-lighting/load-more') },
    reskin: { ...RESKIN, path: path('architectural-lighting/reskin') },
  },
  'smart-lighting-iot': {
    lb1: { ...LB, path: path('smart-lighting-iot/lb1') },
    lb2: { ...LB, path: path('smart-lighting-iot/lb2') },
    rail1: { ...CONTENT, path: path('smart-lighting-iot/rail1') },
    rail2: { ...CONTENT, path: path('smart-lighting-iot/rail2') },
    'load-more': { ...CONTENT, path: path('smart-lighting-iot/load-more') },
    reskin: { ...RESKIN, path: path('smart-lighting-iot/reskin') },
  },
  'specialty-ssl': {
    lb1: { ...LB, path: path('specialty-ssl/lb1') },
    lb2: { ...LB, path: path('specialty-ssl/lb2') },
    rail1: { ...CONTENT, path: path('specialty-ssl/rail1') },
    rail2: { ...CONTENT, path: path('specialty-ssl/rail2') },
    'load-more': { ...CONTENT, path: path('specialty-ssl/load-more') },
    reskin: { ...RESKIN, path: path('specialty-ssl/reskin') },
  },
  'horticultural-lighting': {
    lb1: { ...LB, path: path('horticultural-lighting/lb1') },
    lb2: { ...LB, path: path('horticultural-lighting/lb2') },
    rail1: { ...CONTENT, path: path('horticultural-lighting/rail1') },
    rail2: { ...CONTENT, path: path('horticultural-lighting/rail2') },
    'load-more': { ...CONTENT, path: path('horticultural-lighting/load-more') },
    reskin: { ...RESKIN, path: path('horticultural-lighting/reskin') },
  },
  'leds-lighting-reports': {
    lb1: { ...LB, path: path('leds-lighting-reports/lb1') },
    lb2: { ...LB, path: path('leds-lighting-reports/lb2') },
    rail1: { ...CONTENT, path: path('leds-lighting-reports/rail1') },
    rail2: { ...CONTENT, path: path('leds-lighting-reports/rail2') },
    'load-more': { ...CONTENT, path: path('leds-lighting-reports/load-more') },
    reskin: { ...RESKIN, path: path('leds-lighting-reports/reskin') },
  },
};
