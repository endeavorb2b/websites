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

const path = unit => `/21687441225/DE/${unit}`;

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
  'job-postings': {
    lb1: { ...LB, path: path('job-postings/lb1') },
    lb2: { ...LB, path: path('job-postings/lb2') },
    rail1: { ...CONTENT, path: path('job-postings/rail1') },
    rail2: { ...CONTENT, path: path('job-postings/rail2') },
    'load-more': { ...CONTENT, path: path('job-postings/load-more') },
    reskin: { ...RESKIN, path: path('job-postings/reskin') },
  },
  // 'macro-op-ed': {
  //   lb1: { ...LB, path: path('macro-op-ed/lb1') },
  //   lb2: { ...LB, path: path('macro-op-ed/lb2') },
  //   rail1: { ...CONTENT, path: path('macro-op-ed/rail1') },
  //   rail2: { ...CONTENT, path: path('macro-op-ed/rail2') },
  //   'load-more': { ...CONTENT, path: path('macro-op-ed/load-more') },
  //   reskin: { ...RESKIN, path: path('macro-op-ed/reskin') },
  // },
  // practice: {
  //   lb1: { ...LB, path: path('practice/lb1') },
  //   lb2: { ...LB, path: path('practice/lb2') },
  //   rail1: { ...CONTENT, path: path('practice/rail1') },
  //   rail2: { ...CONTENT, path: path('practice/rail2') },
  //   'load-more': { ...CONTENT, path: path('practice/load-more') },
  //   reskin: { ...RESKIN, path: path('practice/reskin') },
  // },
  // 'science-tech': {
  //   lb1: { ...LB, path: path('science-tech/lb1') },
  //   lb2: { ...LB, path: path('science-tech/lb2') },
  //   rail1: { ...CONTENT, path: path('science-tech/rail1') },
  //   rail2: { ...CONTENT, path: path('science-tech/rail2') },
  //   'load-more': { ...CONTENT, path: path('science-tech/load-more') },
  //   reskin: { ...RESKIN, path: path('science-tech/reskin') },
  // },
  // money: {
  //   lb1: { ...LB, path: path('money/lb1') },
  //   lb2: { ...LB, path: path('money/lb2') },
  //   rail1: { ...CONTENT, path: path('money/rail1') },
  //   rail2: { ...CONTENT, path: path('money/rail2') },
  //   'load-more': { ...CONTENT, path: path('money/load-more') },
  //   reskin: { ...RESKIN, path: path('money/reskin') },
  // },
  // 'dental-office-design': {
  //   lb1: { ...LB, path: path('dental-office-design/lb1') },
  //   lb2: { ...LB, path: path('dental-office-design/lb2') },
  //   rail1: { ...CONTENT, path: path('dental-office-design/rail1') },
  //   rail2: { ...CONTENT, path: path('dental-office-design/rail2') },
  //   'load-more': { ...CONTENT, path: path('dental-office-design/load-more') },
  //   reskin: { ...RESKIN, path: path('dental-office-design/reskin') },
  // },
};
