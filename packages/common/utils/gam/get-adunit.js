const { getAsArray, getAsObject } = require('@base-cms/object-path');

const { isArray } = Array;

module.exports = (config, {
  name,
  section,
  size,
  sizeMapping,
}) => {
  const aliases = getAsArray(section, 'hierarchy').map(s => s.alias).reverse();

  const defaultAdUnit = config.getAsObject(`ads.default.${name}`);
  const foundAdUnit = aliases.map(alias => config.get(`ads.${alias}.${name}`)).filter(v => v)[0];

  // Ensure ad unit is duplicated so property re-assignment doesn't "stick."
  const adunit = { ...getAsObject(foundAdUnit || defaultAdUnit) };
  if (isArray(size)) adunit.size = size;
  if (isArray(sizeMapping)) adunit.sizeMapping = sizeMapping;
  return adunit;
};
