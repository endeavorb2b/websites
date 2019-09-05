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

const path = unit => `/152023730/Mundo/${unit}`;

module.exports = {
  default: {
    lb1: { ...LB, path: path('default_lb1') },
    lb2: { ...LB, path: path('default_lb2') },
    rail1: { ...CONTENT, path: path('default_rail1') },
    rail2: { ...CONTENT, path: path('default_rail2') },
    imu: { ...CONTENT, path: path('default_imu') },
    hp: { ...CONTENT, path: path('default_hp') },
    reskin: { ...RESKIN, path: path('default_reskin') },
    wa: { ...WA, path: path('default_wa') },
  },
  automatizacion: {
    lb1: { ...LB, path: path('automatizacion_lb1') },
    lb2: { ...LB, path: path('automatizacion_lb2') },
    rail1: { ...CONTENT, path: path('automatizacion_rail1') },
    rail2: { ...CONTENT, path: path('automatizacion_rail2') },
    imu: { ...CONTENT, path: path('automatizacion_imu') },
    hp: { ...CONTENT, path: path('automatizacion_hp') },
    reskin: { ...RESKIN, path: path('automatizacion_reskin') },
  },
  empaque: {
    lb1: { ...LB, path: path('empaque_lb1') },
    lb2: { ...LB, path: path('empaque_lb2') },
    rail1: { ...CONTENT, path: path('empaque_rail1') },
    rail2: { ...CONTENT, path: path('empaque_rail2') },
    imu: { ...CONTENT, path: path('empaque_imu') },
    hp: { ...CONTENT, path: path('empaque_hp') },
    reskin: { ...RESKIN, path: path('empaque_reskin') },
  },
  procesamiento: {
    lb1: { ...LB, path: path('procesamiento_lb1') },
    lb2: { ...LB, path: path('procesamiento_lb2') },
    rail1: { ...CONTENT, path: path('procesamiento_rail1') },
    rail2: { ...CONTENT, path: path('procesamiento_rail2') },
    imu: { ...CONTENT, path: path('procesamiento_imu') },
    hp: { ...CONTENT, path: path('procesamiento_hp') },
    reskin: { ...RESKIN, path: path('procesamiento_reskin') },
  },
};
