const { buildImgixUrl } = require('@base-cms/image');

const defaults = {
  fit: 'crop',
  crop: 'focalpoint',
  fpX: 0.5,
  fpY: 0.5,
  w: 680,
  h: 380,
};

module.exports = (image, options = {}) => {
  const src = buildImgixUrl(image.src, { ...defaults, ...options });
  return { ...image, src };
};
