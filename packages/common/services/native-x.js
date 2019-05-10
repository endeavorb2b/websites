const { isObject } = require('@base-cms/utils');
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

const getPlacementId = (name, site) => site.get(`nativeX.placements.${name}.id`);

const getEnabled = site => site.get('nativeX.enabled', true);

const isInitable = site => getURI(site) && getEnabled(site);

const isEnabled = (placementName, site) => {
  const enabled = getEnabled(site);
  const uri = getURI(site);
  const id = getPlacementId(placementName, site);
  return uri && id && enabled;
};

const hasIndex = index => typeof index !== 'undefined' && index !== null && index >= 0;

const useNativeX = (name, index, site) => isEnabled(name, site) && hasIndex(index);

module.exports = {
  isEnabled,
  isInitable,
  getPlacementId,
  useNativeX,
  retrieve,
  getURI,
};