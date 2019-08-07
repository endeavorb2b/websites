const { asArray } = require('@base-cms/utils');

/**
 * @param {SiteConfig} config The website config.
 * @param {object} params
 * @param {string} params.name The placement name.
 * @param {array} params.aliases The section aliases to use.
 */
const getPlacementId = (config, { name, aliases }) => {
  const prefix = 'nativeX.placements';
  const defaultId = config.get(`${prefix}.default.${name}.id`);
  const foundId = asArray(aliases).map(alias => config.get(`${prefix}.${alias}.${name}.id`)).filter(v => v)[0];
  return foundId || defaultId;
};

/**
 * @param {SiteConfig} config
 */
const getURI = site => site.get('nativeX.uri', undefined);

/**
 * @param {SiteConfig} config
 */
const getEnabled = site => site.get('nativeX.enabled', true);

module.exports = {
  getPlacementId,
  getURI,
  getEnabled,
};
