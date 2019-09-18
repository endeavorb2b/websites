const LB = {
  size: [[970, 250], [970, 90], [728, 90], [320, 50], [300, 50], [300, 100]],
  sizeMapping: [
    { viewport: [980, 0], size: [[970, 250], [970, 90], [728, 90]] },
    { viewport: [750, 0], size: [728, 90] },
    { viewport: [320, 0], size: [[300, 50], [320, 50], [300, 100]] },
  ],
};

const path = unit => `/152023730/${unit}`;

module.exports = {
  default: {
    leaderboard: { ...LB, path: path('mundo_leaderboard') },
    imu1: { size: [300, 250], path: path('mundo_imu1') },
    imu2: { size: [300, 250], path: path('mundo_imu2') },
    skyscraper: { size: [300, 600], path: path('mundo_skyscraper') },
  },
};
