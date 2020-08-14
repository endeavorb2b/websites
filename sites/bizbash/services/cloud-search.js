const fetch = require('node-fetch');
const querystring = require('querystring');

const API_URI = 'https://js3prmqswl.execute-api.us-east-1.amazonaws.com/production';

module.exports = async ({
  phrase,
  pageNumber = 1,
  size = 25,
  sort = 'featured desc, modified desc',
  contentType,
  exprFeatured = '_score*((_time > featured_start && _time < featured_end) ? 100 : 1)',
  facets = [],
  minimumCapacity,
}) => {
  const start = (pageNumber - 1) * size;
  const params = {
    size,
    start,
    sort,
    'expr.featured': exprFeatured,
  };
  if (!phrase) {
    // No search phrase, match all.
    params.q = 'matchall';
    params['q.parser'] = 'structured';
  } else {
    // Set search phrase.
    params.q = phrase;
  }

  // Apply terms.
  const fq = facets.filter(f => (f && f.field && f.value)).reduce((arr, f) => {
    arr.push(`(term field=${f.field} '${f.value}')`);
    return arr;
  }, [`(term field=type '${contentType}')`]);

  // Apply minimumCapacity.
  if (minimumCapacity) {
    fq.push(`(range field=maxcapacity [${minimumCapacity},})`);
  }
  params.fq = `(and ${fq.join(' ')})`;

  const url = `${API_URI}?${querystring.stringify(params)}`;
  const res = await fetch(url);
  if (!res.ok) {
    const err = new Error(res.statusMessage);
    err.statusCode = res.statusText;
    throw err;
  }
  return res.json();
};
