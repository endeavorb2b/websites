const { isObject, asArray } = require('@base-cms/utils');
const fetch = require('node-fetch');

// const apiData = {
//   'expr.featured': '_score*((_time > featured_start && _time < featured_end) ? 100 : 1)',
//   sort: 'featured desc, modified desc',
//   pageSize: 25,
//   start: page * 25,
//   q: q,
// };
const addFacetUrlParams = function(urlParams, type, facets) {
  let fq = ["(term field=type '"+ type +"')"];
  for (const [key, value] of Object.entries(facets)) {
    if (value) {
      fq.push("(term field="+ key +" '" + value +"')");
      urlParams['facet.' + key] = "{sort:'bucket', size:500}"
    }
  }
  urlParams.fq = '(and ' + fq.join(' ') + ')';
  return urlParams;
};

const validateSearch = function(urlParams) {
  if (!urlParams.q) {
    urlParams.q = 'matchall';
    urlParams['q.parser'] = 'structured';
  }
  return urlParams;
};
const retrieveResults = async ({
  api,
  urlParams,
  type,
  facets,
  req,
}) => {
  if (1 === urlParams.page) delete urlParams.page;
  if (!urlParams.q) delete urlParams.q;
  urlParams = addFacetUrlParams(urlParams, type, facets);
  urlParams = validateSearch(urlParams);
  const queryString = '?' + Object.keys(urlParams).map(key => `${encodeURIComponent(key)}=${encodeURIComponent(urlParams[key])}`).join('&');
  const url = api+queryString;
  const response = await fetch(url);
  if (!response.ok) {
    const err = new Error(response.statusMessage);
    err.statusCode = response.statusText;
    throw err;
  }
  return response.json();
};

const generateUrlWithQueryString = function(url, params) {
  let queryString = [];
  for (const [key, value] of Object.entries(params)) {
    queryString.push(key + '=' + value);
  }
  return url + '?' + queryString.join('&');
}

const getFacetUrl = function(req, param, id) {
  let currentQuery = Object.assign({}, req.query);
  delete currentQuery.page;
  if (!currentQuery.q) delete currentQuery.q;
  param = param.toLowerCase();
  if (id === Number(req.query[param])) {
    delete currentQuery[param];
  } else {
    currentQuery[param] = id;
  }
  return generateUrlWithQueryString(req.path, currentQuery);
};

const generateResultImage = function(result) {
  return result.fields.primaryimage ? result.fields.primaryimage.replace('cdn.bizbash.com', 'base.imgix.net') : 'https://base.imgix.net/files/base/bizbash/bzb/image/2019/01/160w/bizbash_placeholder.5c3778bf1e44d.jpg?auto=format&crop=focalpoint&fit=crop&fp-x=0.5&fp-y=0.5&h=99&w=176';
};

const getPaginationLink = function(req, increment, pageSize, total) {
  const currentPage = req.query.page ? req.query.page : 1;
  const newPage = Number(currentPage) + Number(increment);
  if (newPage <= 0 || newPage * pageSize >= total) {
    return '';
  };

  let currentQuery = Object.assign({}, req.query);
  currentQuery.page = newPage
  return generateUrlWithQueryString(req.path, currentQuery);
};

const getPaginationInfo = function(start, pageSize, total) {
  const end = Number(start) + Number(pageSize);
  return end >= Number(total) ? 'Showing ' + start + ' - ' + total + ' of ' + total : 'Showing ' + start + ' - ' + end + ' of ' + total;
};

module.exports = {
  retrieveResults,
  getFacetUrl,
  generateResultImage,
  getPaginationInfo,
  getPaginationLink
};
