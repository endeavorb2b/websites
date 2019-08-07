const { isObject, asArray } = require('@base-cms/utils');
const fetch = require('node-fetch');

const createHeaders = ({ req }) => {
  if (!req) return {};
  return {
    'x-forwarded-for': req.ip,
    'user-agent': req.get('user-agent'),
  };
};

const retrieve = async ({
  uri,
  placementId,
  opts,
  req,
}) => {
  const query = isObject(opts) ? `?opts=${encodeURIComponent(JSON.stringify(opts))}` : '';
  const url = `${uri}/placement/${placementId}.html${query}`;
  const response = await fetch(url, { headers: createHeaders({ req }) });
  if (!response.ok) {
    const err = new Error(response.statusMessage);
    err.statusCode = response.statusText;
    throw err;
  }
  return response.text();
};

const retrieveElements = async ({
  uri,
  placementId,
  opts,
  req,
}) => {
  const query = isObject(opts) ? `?opts=${encodeURIComponent(JSON.stringify(opts))}` : '';
  const url = `${uri}/placement/elements/${placementId}.json${query}`;
  const response = await fetch(url, { headers: createHeaders({ req }) });
  if (!response.ok) {
    const err = new Error(response.statusMessage);
    err.statusCode = response.statusText;
    throw err;
  }
  return response.json();
};

const getURI = site => site.get('nativeX.uri');

const getTrackingURI = site => site.get('nativeX.trackingUri', getURI(site));

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

const convertAdToContent = (ad) => {
  const { campaign, creative, image } = ad;
  return {
    id: campaign.id,
    shortName: creative.title,
    typeTitled: 'Text Ad',
    type: 'text-ad',
    teaser: creative.teaser,
    published: campaign.createdAt,
    canonicalPath: ad.href,
    primaryImage: {
      id: image.id,
      alt: creative.title,
      src: image.src,
      __typename: 'AssetImage',
    },
    primarySection: {
      name: 'Sponsored',
      fullName: 'Sponsored',
      __typename: 'WebsiteSection',
    },
    __typename: 'ContentTextAd',
  };
};

/**
 * @deprecated This service and its related Marko components should be removed.
 */
module.exports = {
  convertAdToContent,
  isEnabled,
  isInitable,
  getPlacementId,
  useNativeX,
  retrieve,
  retrieveElements,
  getTrackingURI,
  getURI,
};
