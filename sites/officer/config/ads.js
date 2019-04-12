const BS = {
  size: [[970, 250], [970, 90], [728, 90], [320, 50], [300, 50], [300, 100]],
  sizeMapping: [
    { viewport: [980, 0], size: [[970, 250], [970, 90], [728, 90]] },
    { viewport: [750, 0], size: [728, 90] },
    { viewport: [320, 0], size: [[300, 50], [320, 50], [300, 100]] },
  ],
};
const MR = {
  size: [300, 250],
};
const HP = {
  size: [300, 600],
};

const path = unit => `/21687441225/Officer/${unit}`;

module.exports = {
  default: {
    BS: { ...BS, path: path('Officer_BS') },
    MR: { ...MR, path: path('Officer_MR') },
    HP: { ...HP, path: path('Officer_HP') },
  },
};
