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

const path = unit => `/21687441225/BTR/${unit}`;

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
  docsis: {
    lb1: { ...LB, path: path('docsis/lb1') },
    lb2: { ...LB, path: path('docsis/lb2') },
    rail1: { ...CONTENT, path: path('docsis/rail1') },
    rail2: { ...CONTENT, path: path('docsis/rail2') },
    'load-more': { ...CONTENT, path: path('docsis/load-more') },
    reskin: { ...RESKIN, path: path('docsis/reskin') },
  },
  fiber: {
    lb1: { ...LB, path: path('fiber/lb1') },
    lb2: { ...LB, path: path('fiber/lb2') },
    rail1: { ...CONTENT, path: path('fiber/rail1') },
    rail2: { ...CONTENT, path: path('fiber/rail2') },
    'load-more': { ...CONTENT, path: path('fiber/load-more') },
    reskin: { ...RESKIN, path: path('fiber/reskin') },
  },
  'in-the-home': {
    lb1: { ...LB, path: path('in-the-home/lb1') },
    lb2: { ...LB, path: path('in-the-home/lb2') },
    rail1: { ...CONTENT, path: path('in-the-home/rail1') },
    rail2: { ...CONTENT, path: path('in-the-home/rail2') },
    'load-more': { ...CONTENT, path: path('in-the-home/load-more') },
    reskin: { ...RESKIN, path: path('in-the-home/reskin') },
  },
  wireless: {
    lb1: { ...LB, path: path('wireless/lb1') },
    lb2: { ...LB, path: path('wireless/lb2') },
    rail1: { ...CONTENT, path: path('wireless/rail1') },
    rail2: { ...CONTENT, path: path('wireless/rail2') },
    'load-more': { ...CONTENT, path: path('wireless/load-more') },
    reskin: { ...RESKIN, path: path('wireless/reskin') },
  },
  video: {
    lb1: { ...LB, path: path('video/lb1') },
    lb2: { ...LB, path: path('video/lb2') },
    rail1: { ...CONTENT, path: path('video/rail1') },
    rail2: { ...CONTENT, path: path('video/rail2') },
    'load-more': { ...CONTENT, path: path('video/load-more') },
    reskin: { ...RESKIN, path: path('video/reskin') },
  },
  'business-services': {
    lb1: { ...LB, path: path('business-services/lb1') },
    lb2: { ...LB, path: path('business-services/lb2') },
    rail1: { ...CONTENT, path: path('business-services/rail1') },
    rail2: { ...CONTENT, path: path('business-services/rail2') },
    'load-more': { ...CONTENT, path: path('business-services/load-more') },
    reskin: { ...RESKIN, path: path('business-services/reskin') },
  },
  'back-office': {
    lb1: { ...LB, path: path('back-office/lb1') },
    lb2: { ...LB, path: path('back-office/lb2') },
    rail1: { ...CONTENT, path: path('back-office/rail1') },
    rail2: { ...CONTENT, path: path('back-office/rail2') },
    'load-more': { ...CONTENT, path: path('back-office/load-more') },
    reskin: { ...RESKIN, path: path('back-office/reskin') },
  },
  test: {
    lb1: { ...LB, path: path('test/lb1') },
    lb2: { ...LB, path: path('test/lb2') },
    rail1: { ...CONTENT, path: path('test/rail1') },
    rail2: { ...CONTENT, path: path('test/rail2') },
    'load-more': { ...CONTENT, path: path('test/load-more') },
    reskin: { ...RESKIN, path: path('test/reskin') },
  },
  'btr-america-latina': {
    lb1: { ...LB, path: path('btr-america-latina/lb1') },
    lb2: { ...LB, path: path('btr-america-latina/lb2') },
    rail1: { ...CONTENT, path: path('btr-america-latina/rail1') },
    rail2: { ...CONTENT, path: path('btr-america-latina/rail2') },
    'load-more': { ...CONTENT, path: path('btr-america-latina/load-more') },
    reskin: { ...RESKIN, path: path('btr-america-latina/reskin') },
  },
};
