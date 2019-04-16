const { getAsArray, getAsObject } = require('@base-cms/object-path');

const { isArray } = Array;

module.exports = (config, {
  name,
  section,
  size,
  sizeMapping,
}) => {
  const aliases = getAsArray(section, 'hierarchy').map(s => s.alias);

  const defaultAdUnit = config.getAsObject(`ads.default.${name}`);
  const foundAdUnit = aliases.map(alias => config.get(`ads.${alias}.${name}`)).filter(v => v)[0];

  const adunit = getAsObject(foundAdUnit || defaultAdUnit);
  if (isArray(size)) adunit.size = size;
  if (isArray(sizeMapping)) adunit.sizeMapping = sizeMapping;
  return adunit;
};
