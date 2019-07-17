const { buildImgixUrl } = require('@base-cms/image');

module.exports = (image, options = {}) => {
  const src = buildImgixUrl(image.src, options);
  return { ...image, src };
};
