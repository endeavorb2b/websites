const LB1 = {
  size: [[970, 250], [970, 90], [728, 90], [320, 50], [300, 50], [300, 100]],
  sizeMapping: [
    { viewport: [980, 0], size: [[970, 250], [970, 90], [728, 90]] },
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
    rail2: { ...CONTENT, path: path('default/rail2') },
    'load-more': { ...CONTENT, path: path('default/load-more') },
    reskin: { ...RESKIN, path: path('default/reskin') },
    wa: { ...WA, path: path('default/wa') },
  },
  'production-strategy': {
    lb1: { ...LB1, path: path('production-strategy/lb1') },
    lb2: { ...LB2, path: path('production-strategy/lb2') },
    rail1: { ...CONTENT, path: path('production-strategy/rail1') },
    rail2: { ...CONTENT, path: path('production-strategy/rail2') },
    'load-more': { ...CONTENT, path: path('production-strategy/load-more') },
    reskin: { ...RESKIN, path: path('production-strategy/reskin') },
  },
  'style-decor': {
    lb1: { ...LB1, path: path('style-decor/lb1') },
    lb2: { ...LB2, path: path('style-decor/lb2') },
    rail1: { ...CONTENT, path: path('style-decor/rail1') },
    rail2: { ...CONTENT, path: path('style-decor/rail2') },
    'load-more': { ...CONTENT, path: path('style-decor/load-more') },
    reskin: { ...RESKIN, path: path('style-decor/reskin') },
  },
  catering: {
    lb1: { ...LB1, path: path('catering/lb1') },
    lb2: { ...LB2, path: path('catering/lb2') },
    rail1: { ...CONTENT, path: path('catering/rail1') },
    rail2: { ...CONTENT, path: path('catering/rail2') },
    'load-more': { ...CONTENT, path: path('catering/load-more') },
    reskin: { ...RESKIN, path: path('catering/reskin') },
  },
  'bizbash-lists': {
    lb1: { ...LB1, path: path('bizbash-lists/lb1') },
    lb2: { ...LB2, path: path('bizbash-lists/lb2') },
    rail1: { ...CONTENT, path: path('bizbash-lists/rail1') },
    rail2: { ...CONTENT, path: path('bizbash-lists/rail2') },
    'load-more': { ...CONTENT, path: path('bizbash-lists/load-more') },
    reskin: { ...RESKIN, path: path('bizbash-lists/reskin') },
  },
  'local-venues-destinations': {
    lb1: { ...LB1, path: path('local-venues-destinations/lb1') },
    lb2: { ...LB2, path: path('local-venues-destinations/lb2') },
    rail1: { ...CONTENT, path: path('local-venues-destinations/rail1') },
    rail2: { ...CONTENT, path: path('local-venues-destinations/rail2') },
    'load-more': { ...CONTENT, path: path('local-venues-destinations/load-more') },
    reskin: { ...RESKIN, path: path('local-venues-destinations/reskin') },
  },
  gathergeeks: {
    lb1: { ...LB1, path: path('gathergeeks/lb1') },
    lb2: { ...LB2, path: path('gathergeeks/lb2') },
    rail1: { ...CONTENT, path: path('gathergeeks/rail1') },
    rail2: { ...CONTENT, path: path('gathergeeks/rail2') },
    'load-more': { ...CONTENT, path: path('gathergeeks/load-more') },
    reskin: { ...RESKIN, path: path('gathergeeks/reskin') },
  },
};
