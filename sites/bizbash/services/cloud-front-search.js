const fetch = require('node-fetch');

const addFacetUrlParams = (urlParams, type, facets) => {
  const params = urlParams;
  const fq = [`(term field=type '${type}')`];
  Object.entries(facets).forEach(([key, value]) => {
    if (value) {
      fq.push(`(term field=${key} '${value}')`);
      params[`facet.${key}`] = "{sort:'bucket', size:500}";
    }
  });
  params.fq = `(and ${fq.join(' ')})`;
  return params;
};

const validateSearch = (urlParams) => {
  const params = urlParams;
  if (!params.q) {
    params.q = 'matchall';
    params['q.parser'] = 'structured';
  }
  return params;
};
const retrieveResults = async ({
  api,
  urlParams,
  type,
  facets,
}) => {
  let params = urlParams;
  if (params.page === 1) delete params.page;
  if (!params.q) delete params.q;
  params = addFacetUrlParams(params, type, facets);
  params = validateSearch(params);
  const queryString = Object.keys(params).map(key => `${encodeURIComponent(key)}=${encodeURIComponent(urlParams[key])}`).join('&');
  const url = `${api}?${queryString}`;
  const response = await fetch(url);
  if (!response.ok) {
    const err = new Error(response.statusMessage);
    err.statusCode = response.statusText;
    throw err;
  }
  return response.json();
};

const generateUrlWithQueryString = (url, params) => {
  const queryString = [];
  Object.entries(params).forEach(([key, value]) => {
    queryString.push(`${key}=${value}`);
  });
  return `${url}?${queryString.join('&')}`;
};

const getFacetUrl = (req, param, id) => {
  const currentQuery = Object.assign({}, req.query);
  delete currentQuery.page;
  if (!currentQuery.q) delete currentQuery.q;
  if (id === Number(req.query[param.toLowerCase()])) {
    delete currentQuery[param.toLowerCase()];
  } else {
    currentQuery[param.toLowerCase()] = id;
  }
  return generateUrlWithQueryString(req.path, currentQuery);
};

const generateResultImage = (result) => {
  const imagePath = result.fields.primaryimage ? result.fields.primaryimage.replace('cdn.bizbash.com', 'base.imgix.net') : 'https://base.imgix.net/files/base/bizbash/bzb/image/2019/01/160w/bizbash_placeholder.5c3778bf1e44d.jpg?auto=format&crop=focalpoint&fit=crop&fp-x=0.5&fp-y=0.5&h=99&w=176';
  return imagePath;
};

const getPaginationLink = (req, increment, pageSize, total) => {
  const currentPage = req.query.page ? req.query.page : 1;
  const newPage = Number(currentPage) + Number(increment);
  if (newPage <= 0 || newPage * pageSize >= total) {
    return '';
  }

  const currentQuery = Object.assign({}, req.query);
  currentQuery.page = newPage;
  return generateUrlWithQueryString(req.path, currentQuery);
};

const getPaginationInfo = (start, pageSize, total) => {
  const end = Number(start) + Number(pageSize);
  return end >= Number(total) ? `Showing ${start} - ${total} of ${total}` : `Showing ${start} - ${end} of ${total}`;
};

module.exports = {
  retrieveResults,
  getFacetUrl,
  generateResultImage,
  getPaginationInfo,
  getPaginationLink,
};
