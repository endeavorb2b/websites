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

const path = unit => `/21687441225/RDH/${unit}`;

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
  // ergonomics: {
  //   lb1: { ...LB, path: path('ergonomics/lb1') },
  //   lb2: { ...LB, path: path('ergonomics/lb2') },
  //   rail1: { ...CONTENT, path: path('ergonomics/rail1') },
  //   rail2: { ...CONTENT, path: path('ergonomics/rail2') },
  //   'load-more': { ...CONTENT, path: path('ergonomics/load-more') },
  //   reskin: { ...RESKIN, path: path('ergonomics/reskin') },
  // },
  // 'infection-control': {
  //   lb1: { ...LB, path: path('infection-control/lb1') },
  //   lb2: { ...LB, path: path('infection-control/lb2') },
  //   rail1: { ...CONTENT, path: path('infection-control/rail1') },
  //   rail2: { ...CONTENT, path: path('infection-control/rail2') },
  //   'load-more': { ...CONTENT, path: path('infection-control/load-more') },
  //   reskin: { ...RESKIN, path: path('infection-control/reskin') },
  // },
  // 'patient-care': {
  //   lb1: { ...LB, path: path('patient-care/lb1') },
  //   lb2: { ...LB, path: path('patient-care/lb2') },
  //   rail1: { ...CONTENT, path: path('patient-care/rail1') },
  //   rail2: { ...CONTENT, path: path('patient-care/rail2') },
  //   'load-more': { ...CONTENT, path: path('patient-care/load-more') },
  //   reskin: { ...RESKIN, path: path('patient-care/reskin') },
  // },
  // pathology: {
  //   lb1: { ...LB, path: path('pathology/lb1') },
  //   lb2: { ...LB, path: path('pathology/lb2') },
  //   rail1: { ...CONTENT, path: path('pathology/rail1') },
  //   rail2: { ...CONTENT, path: path('pathology/rail2') },
  //   'load-more': { ...CONTENT, path: path('pathology/load-more') },
  //   reskin: { ...RESKIN, path: path('pathology/reskin') },
  // },
  // 'career-profession': {
  //   lb1: { ...LB, path: path('career-profession/lb1') },
  //   lb2: { ...LB, path: path('career-profession/lb2') },
  //   rail1: { ...CONTENT, path: path('career-profession/rail1') },
  //   rail2: { ...CONTENT, path: path('career-profession/rail2') },
  //   'load-more': { ...CONTENT, path: path('career-profession/load-more') },
  //   reskin: { ...RESKIN, path: path('career-profession/reskin') },
  // },
};
