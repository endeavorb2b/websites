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

const path = unit => `/21687441225/IAS/${unit}`;

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
  commercial: {
    lb1: { ...LB, path: path('commercial/lb1') },
    lb2: { ...LB, path: path('commercial/lb2') },
    rail1: { ...CONTENT, path: path('commercial/rail1') },
    rail2: { ...CONTENT, path: path('commercial/rail2') },
    'load-more': { ...CONTENT, path: path('commercial/load-more') },
    reskin: { ...RESKIN, path: path('commercial/reskin') },
  },
  military: {
    lb1: { ...LB, path: path('military/lb1') },
    lb2: { ...LB, path: path('military/lb2') },
    rail1: { ...CONTENT, path: path('military/rail1') },
    rail2: { ...CONTENT, path: path('military/rail2') },
    'load-more': { ...CONTENT, path: path('military/load-more') },
    reskin: { ...RESKIN, path: path('military/reskin') },
  },
  avionics: {
    lb1: { ...LB, path: path('avionics/lb1') },
    lb2: { ...LB, path: path('avionics/lb2') },
    rail1: { ...CONTENT, path: path('avionics/rail1') },
    rail2: { ...CONTENT, path: path('avionics/rail2') },
    'load-more': { ...CONTENT, path: path('avionics/load-more') },
    reskin: { ...RESKIN, path: path('avionics/reskin') },
  },
  'atc-atm': {
    lb1: { ...LB, path: path('atc-atm/lb1') },
    lb2: { ...LB, path: path('atc-atm/lb2') },
    rail1: { ...CONTENT, path: path('atc-atm/rail1') },
    rail2: { ...CONTENT, path: path('atc-atm/rail2') },
    'load-more': { ...CONTENT, path: path('atc-atm/load-more') },
    reskin: { ...RESKIN, path: path('atc-atm/reskin') },
  },
  helicopter: {
    lb1: { ...LB, path: path('helicopter/lb1') },
    lb2: { ...LB, path: path('helicopter/lb2') },
    rail1: { ...CONTENT, path: path('helicopter/rail1') },
    rail2: { ...CONTENT, path: path('helicopter/rail2') },
    'load-more': { ...CONTENT, path: path('helicopter/load-more') },
    reskin: { ...RESKIN, path: path('helicopter/reskin') },
  },
  satcom: {
    lb1: { ...LB, path: path('satcom/lb1') },
    lb2: { ...LB, path: path('satcom/lb2') },
    rail1: { ...CONTENT, path: path('satcom/rail1') },
    rail2: { ...CONTENT, path: path('satcom/rail2') },
    'load-more': { ...CONTENT, path: path('satcom/load-more') },
    reskin: { ...RESKIN, path: path('satcom/reskin') },
  },
  unmanned: {
    lb1: { ...LB, path: path('unmanned/lb1') },
    lb2: { ...LB, path: path('unmanned/lb2') },
    rail1: { ...CONTENT, path: path('unmanned/rail1') },
    rail2: { ...CONTENT, path: path('unmanned/rail2') },
    'load-more': { ...CONTENT, path: path('unmanned/load-more') },
    reskin: { ...RESKIN, path: path('unmanned/reskin') },
  },
};
