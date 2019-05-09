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

const path = unit => `/21687441225/DIQ/${unit}`;

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
  'dental-hygiene': {
    lb1: { ...LB, path: path('dental-hygiene/lb1') },
    lb2: { ...LB, path: path('dental-hygiene/lb2') },
    rail1: { ...CONTENT, path: path('dental-hygiene/rail1') },
    rail2: { ...CONTENT, path: path('dental-hygiene/rail2') },
    'load-more': { ...CONTENT, path: path('dental-hygiene/load-more') },
    reskin: { ...RESKIN, path: path('dental-hygiene/reskin') },
  },
  'dental-hygiene/student-hygiene': {
    lb1: { ...LB, path: path('dental-hygiene/student-hygiene/lb1') },
    lb2: { ...LB, path: path('dental-hygiene/student-hygiene/lb2') },
    rail1: { ...CONTENT, path: path('dental-hygiene/student-hygiene/rail1') },
    rail2: { ...CONTENT, path: path('dental-hygiene/student-hygiene/rail2') },
    'load-more': { ...CONTENT, path: path('dental-hygiene/student-hygiene/load-more') },
    reskin: { ...RESKIN, path: path('dental-hygiene/student-hygiene/reskin') },
  },
  clinical: {
    lb1: { ...LB, path: path('clinical/lb1') },
    lb2: { ...LB, path: path('clinical/lb2') },
    rail1: { ...CONTENT, path: path('clinical/rail1') },
    rail2: { ...CONTENT, path: path('clinical/rail2') },
    'load-more': { ...CONTENT, path: path('clinical/load-more') },
    reskin: { ...RESKIN, path: path('clinical/reskin') },
  },
  'clinical/endodontics': {
    lb1: { ...LB, path: path('clinical/endodontics/lb1') },
    lb2: { ...LB, path: path('clinical/endodontics/lb2') },
    rail1: { ...CONTENT, path: path('clinical/endodontics/rail1') },
    rail2: { ...CONTENT, path: path('clinical/endodontics/rail2') },
    'load-more': { ...CONTENT, path: path('clinical/endodontics/load-more') },
    reskin: { ...RESKIN, path: path('clinical/endodontics/reskin') },
  },
  'clinical/orthodontics': {
    lb1: { ...LB, path: path('clinical/orthodontics/lb1') },
    lb2: { ...LB, path: path('clinical/orthodontics/lb2') },
    rail1: { ...CONTENT, path: path('clinical/orthodontics/rail1') },
    rail2: { ...CONTENT, path: path('clinical/orthodontics/rail2') },
    'load-more': { ...CONTENT, path: path('clinical/orthodontics/load-more') },
    reskin: { ...RESKIN, path: path('clinical/orthodontics/reskin') },
  },
  'clinical/prosthodontics-and-labratory': {
    lb1: { ...LB, path: path('clinical/prosthodontics-and-labratory/lb1') },
    lb2: { ...LB, path: path('clinical/prosthodontics-and-labratory/lb2') },
    rail1: { ...CONTENT, path: path('clinical/prosthodontics-and-labratory/rail1') },
    rail2: { ...CONTENT, path: path('clinical/prosthodontics-and-labratory/rail2') },
    'load-more': { ...CONTENT, path: path('clinical/prosthodontics-and-labratory/load-more') },
    reskin: { ...RESKIN, path: path('clinical/prosthodontics-and-labratory/reskin') },
  },
  products: {
    lb1: { ...LB, path: path('products/lb1') },
    lb2: { ...LB, path: path('products/lb2') },
    rail1: { ...CONTENT, path: path('products/rail1') },
    rail2: { ...CONTENT, path: path('products/rail2') },
    'load-more': { ...CONTENT, path: path('products/load-more') },
    reskin: { ...RESKIN, path: path('products/reskin') },
  },
  'products/free-samples': {
    lb1: { ...LB, path: path('products/free-samples/lb1') },
    lb2: { ...LB, path: path('products/free-samples/lb2') },
  },
  'practice-management': {
    lb1: { ...LB, path: path('practice-management/lb1') },
    lb2: { ...LB, path: path('practice-management/lb2') },
    rail1: { ...CONTENT, path: path('practice-management/rail1') },
    rail2: { ...CONTENT, path: path('practice-management/rail2') },
    'load-more': { ...CONTENT, path: path('practice-management/load-more') },
    reskin: { ...RESKIN, path: path('practice-management/reskin') },
  },
  'front-office': {
    lb1: { ...LB, path: path('front-office/lb1') },
    lb2: { ...LB, path: path('front-office/lb2') },
    rail1: { ...CONTENT, path: path('front-office/rail1') },
    rail2: { ...CONTENT, path: path('front-office/rail2') },
    'load-more': { ...CONTENT, path: path('front-office/load-more') },
    reskin: { ...RESKIN, path: path('front-office/reskin') },
  },
  'dental-assisting': {
    lb1: { ...LB, path: path('dental-assisting/lb1') },
    lb2: { ...LB, path: path('dental-assisting/lb2') },
    rail1: { ...CONTENT, path: path('dental-assisting/rail1') },
    rail2: { ...CONTENT, path: path('dental-assisting/rail2') },
    'load-more': { ...CONTENT, path: path('dental-assisting/load-more') },
    reskin: { ...RESKIN, path: path('dental-assisting/reskin') },
  },
};
