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
const RESKIN = { outOfPage: true };
const WA = { outOfPage: true };

const path = unit => `/21687441225/WW/${unit}`;

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
  municipal: {
    lb1: { ...LB, path: path('municipal/lb1') },
    lb2: { ...LB, path: path('municipal/lb2') },
    rail1: { ...CONTENT, path: path('municipal/rail1') },
    rail2: { ...CONTENT, path: path('municipal/rail2') },
    'load-more': { ...CONTENT, path: path('municipal/load-more') },
  },

  'municipal/drinking-water': {
    lb1: { ...LB, path: path('municipal/drinking-water/lb1') },
    lb2: { ...LB, path: path('municipal/drinking-water/lb2') },
    rail1: { ...CONTENT, path: path('municipal/drinking-water/rail1') },
    rail2: { ...CONTENT, path: path('municipal/drinking-water/rail2') },
    'load-more': { ...CONTENT, path: path('municipal/drinking-water/load-more') },
  },
  'municipal/environmental': {
    lb1: { ...LB, path: path('municipal/environmental/lb1') },
    lb2: { ...LB, path: path('municipal/environmental/lb2') },
    rail1: { ...CONTENT, path: path('municipal/environmental/rail1') },
    rail2: { ...CONTENT, path: path('municipal/environmental/rail2') },
    'load-more': { ...CONTENT, path: path('municipal/environmental/load-more') },
  },
  'municipal/technologies': {
    lb1: { ...LB, path: path('municipal/technologies/lb1') },
    lb2: { ...LB, path: path('municipal/technologies/lb2') },
    rail1: { ...CONTENT, path: path('municipal/technologies/rail1') },
    rail2: { ...CONTENT, path: path('municipal/technologies/rail2') },
    'load-more': { ...CONTENT, path: path('municipal/technologies/load-more') },
  },
  'municipal/technologies/aeration': {
    lb1: { ...LB, path: path('municipal/technologies/aeration/lb1') },
    lb2: { ...LB, path: path('municipal/technologies/aeration/lb2') },
    rail1: { ...CONTENT, path: path('municipal/technologies/aeration/rail1') },
    rail2: { ...CONTENT, path: path('municipal/technologies/aeration/rail2') },
    'load-more': { ...CONTENT, path: path('municipal/technologies/aeration/load-more') },
  },
  'municipal/technologies/amr-ami': {
    lb1: { ...LB, path: path('municipal/technologies/amr-ami/lb1') },
    lb2: { ...LB, path: path('municipal/technologies/amr-ami/lb2') },
    rail1: { ...CONTENT, path: path('municipal/technologies/amr-ami/rail1') },
    rail2: { ...CONTENT, path: path('municipal/technologies/amr-ami/rail2') },
    'load-more': { ...CONTENT, path: path('municipal/technologies/amr-ami/load-more') },
  },
  'municipal/technologies/disinfection': {
    lb1: { ...LB, path: path('municipal/technologies/disinfection/lb1') },
    lb2: { ...LB, path: path('municipal/technologies/disinfection/lb2') },
    rail1: { ...CONTENT, path: path('municipal/technologies/disinfection/rail1') },
    rail2: { ...CONTENT, path: path('municipal/technologies/disinfection/rail2') },
    'load-more': { ...CONTENT, path: path('municipal/technologies/disinfection/load-more') },
  },
  'municipal/technologies/lab-sampling': {
    lb1: { ...LB, path: path('municipal/technologies/lab-sampling/lb1') },
    lb2: { ...LB, path: path('municipal/technologies/lab-sampling/lb2') },
    rail1: { ...CONTENT, path: path('municipal/technologies/lab-sampling/rail1') },
    rail2: { ...CONTENT, path: path('municipal/technologies/lab-sampling/rail2') },
    'load-more': { ...CONTENT, path: path('municipal/technologies/lab-sampling/load-more') },
  },
  'municipal/technologies/pipes': {
    lb1: { ...LB, path: path('municipal/technologies/pipes/lb1') },
    lb2: { ...LB, path: path('municipal/technologies/pipes/lb2') },
    rail1: { ...CONTENT, path: path('municipal/technologies/pipes/rail1') },
    rail2: { ...CONTENT, path: path('municipal/technologies/pipes/rail2') },
    'load-more': { ...CONTENT, path: path('municipal/technologies/pipes/load-more') },
  },
  'municipal/technologies/pumps': {
    lb1: { ...LB, path: path('municipal/technologies/pumps/lb1') },
    lb2: { ...LB, path: path('municipal/technologies/pumps/lb2') },
    rail1: { ...CONTENT, path: path('municipal/technologies/pumps/rail1') },
    rail2: { ...CONTENT, path: path('municipal/technologies/pumps/rail2') },
    'load-more': { ...CONTENT, path: path('municipal/technologies/pumps/load-more') },
  },
  'municipal/technologies/valves': {
    lb1: { ...LB, path: path('municipal/technologies/valves/lb1') },
    lb2: { ...LB, path: path('municipal/technologies/valves/lb2') },
    rail1: { ...CONTENT, path: path('municipal/technologies/valves/rail1') },
    rail2: { ...CONTENT, path: path('municipal/technologies/valves/rail2') },
    'load-more': { ...CONTENT, path: path('municipal/technologies/valves/load-more') },
  },
  'municipal/urban-stormwater': {
    lb1: { ...LB, path: path('municipal/urban-stormwater/lb1') },
    lb2: { ...LB, path: path('municipal/urban-stormwater/lb2') },
    rail1: { ...CONTENT, path: path('municipal/urban-stormwater/rail1') },
    rail2: { ...CONTENT, path: path('municipal/urban-stormwater/rail2') },
    'load-more': { ...CONTENT, path: path('municipal/urban-stormwater/load-more') },
  },
  'municipal/wastewater': {
    lb1: { ...LB, path: path('municipal/environwastewatermental/lb1') },
    lb2: { ...LB, path: path('municipal/wastewater/lb2') },
    rail1: { ...CONTENT, path: path('municipal/wastewater/rail1') },
    rail2: { ...CONTENT, path: path('municipal/wastewater/rail2') },
    'load-more': { ...CONTENT, path: path('municipal/wastewater/load-more') },
  },
  'municipal/water-utility-management': {
    lb1: { ...LB, path: path('municipal/water-utility-management/lb1') },
    lb2: { ...LB, path: path('municipal/water-utility-management/lb2') },
    rail1: { ...CONTENT, path: path('municipal/water-utility-management/rail1') },
    rail2: { ...CONTENT, path: path('municipal/water-utility-management/rail2') },
    'load-more': { ...CONTENT, path: path('municipal/water-utility-management/load-more') },
  },
  industrial: {
    lb1: { ...LB, path: path('industrial/lb1') },
    lb2: { ...LB, path: path('industrial/lb2') },
    rail1: { ...CONTENT, path: path('industrial/rail1') },
    rail2: { ...CONTENT, path: path('industrial/rail2') },
    'load-more': { ...CONTENT, path: path('industrial/load-more') },
  },
  'industrial/wastewater': {
    lb1: { ...LB, path: path('industrial/wastewater/lb1') },
    lb2: { ...LB, path: path('industrial/wastewater/lb2') },
    rail1: { ...CONTENT, path: path('industrial/wastewater/rail1') },
    rail2: { ...CONTENT, path: path('industrial/wastewater/rail2') },
    'load-more': { ...CONTENT, path: path('industrial/wastewater/load-more') },
  },
  'industrial/process-water': {
    lb1: { ...LB, path: path('industrial/process-water/lb1') },
    lb2: { ...LB, path: path('industrial/process-water/lb2') },
    rail1: { ...CONTENT, path: path('industrial/process-water/rail1') },
    rail2: { ...CONTENT, path: path('industrial/process-water/rail2') },
    'load-more': { ...CONTENT, path: path('industrial/process-water/load-more') },
  },
  international: {
    lb1: { ...LB, path: path('international/lb1') },
    lb2: { ...LB, path: path('international/lb2') },
    rail1: { ...CONTENT, path: path('international/rail1') },
    rail2: { ...CONTENT, path: path('international/rail2') },
    'load-more': { ...CONTENT, path: path('international/load-more') },
  },
  'international/wastewater': {
    lb1: { ...LB, path: path('international/wastewater/lb1') },
    lb2: { ...LB, path: path('international/wastewater/lb2') },
    rail1: { ...CONTENT, path: path('international/wastewater/rail1') },
    rail2: { ...CONTENT, path: path('international/wastewater/rail2') },
    'load-more': { ...CONTENT, path: path('international/wastewater/load-more') },
  },
};
