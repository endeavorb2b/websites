const { asArray } = require('@base-cms/utils');
const { getAsObject } = require('@base-cms/object-path');

const { isArray } = Array;

module.exports = (config, {
  name,
  aliases,
  size,
  sizeMapping,
}) => {
  const defaultAdUnit = config.getAsObject(`ads.default.${name}`);
  const foundAdUnit = asArray(aliases).map(alias => config.get(`ads.${alias}.${name}`)).filter(v => v)[0];

  // Ensure ad unit is duplicated so property re-assignment doesn't "stick."
  const adunit = { ...getAsObject(foundAdUnit || defaultAdUnit) };
  if (isArray(size)) adunit.size = size;
  if (isArray(sizeMapping)) adunit.sizeMapping = sizeMapping;
  return adunit;
};
