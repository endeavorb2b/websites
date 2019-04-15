const LB = {
  size: [[970, 250], [970, 90], [728, 90], [320, 50], [300, 50], [300, 100]],
  sizeMapping: [
    { viewport: [980, 0], size: [[970, 250], [970, 90], [728, 90]] },
    { viewport: [750, 0], size: [728, 90] },
    { viewport: [320, 0], size: [[300, 50], [320, 50], [300, 100]] },
  ],
};
const CONTENT = {
  size: [[300, 250], [300, 600]],
};
const RESKIN = {};
const WA = {};

const path = unit => `/21687441225/OS/${unit}`;

module.exports = {
  default: {
    LB1: { ...LB, path: path('DEFAULT/LB1') },
    LB2: { ...LB, path: path('DEFAULT/LB2') },
    CONTENT1: { ...CONTENT, path: path('DEFAULT/CONTENT1') },
    CONTENT2: { ...CONTENT, path: path('DEFAULT/CONTENT2') },
    CONTENT3: { ...CONTENT, path: path('DEFAULT/CONTENT3') },
    CONTENT4: { ...CONTENT, path: path('DEFAULT/CONTENT4') },
    RESKIN: { ...RESKIN, path: path('DEFAULT/RESKIN') },
    WA: { ...WA, path: path('DEFAULT/WA') },
  },
};
