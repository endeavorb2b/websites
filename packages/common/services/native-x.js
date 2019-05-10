const { isObject, asArray } = require('@base-cms/utils');
const fetch = require('node-fetch');

const retrieve = async ({ uri, placementId, opts }) => {
  const query = isObject(opts) ? `?opts=${encodeURIComponent(JSON.stringify(opts))}` : '';
  const url = `${uri}/placement/${placementId}.html${query}`;
  const response = await fetch(url);
  if (!response.ok) {
    const err = new Error(response.statusMessage);
    err.statusCode = response.statusText;
    throw err;
  }
  return response.text();
};

const getURI = site => site.get('nativeX.uri');

const getPlacementId = (config, { name, aliases }) => {
  const prefix = 'nativeX.placements';
  const defaultId = config.get(`${prefix}.default.${name}.id`);
  const foundId = asArray(aliases).map(alias => config.get(`${prefix}.${alias}.${name}.id`)).filter(v => v)[0];
  return foundId || defaultId;
};

const getEnabled = site => site.get('nativeX.enabled', true);

const isInitable = site => getURI(site) && getEnabled(site);

const isEnabled = (config, { name, aliases }) => {
  if (!name) return false;
  const enabled = getEnabled(config);
  const uri = getURI(config);
  const id = getPlacementId(config, { name, aliases });
  if (uri && id && enabled) return true;
  return false;
};

const hasIndex = index => typeof index !== 'undefined' && index !== null && index >= 0;

const useNativeX = (config, { name, index, aliases }) => isEnabled(config, { name, aliases })
  && hasIndex(index);

module.exports = {
  isEnabled,
  isInitable,
  getPlacementId,
  useNativeX,
  retrieve,
  getURI,
};
