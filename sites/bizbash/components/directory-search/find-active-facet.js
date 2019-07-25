const findActiveFacet = (facets, facetId) => {
  if (!facetId) return undefined;
  return facets.reduce((active, facet) => {
    const { id, values } = facet;
    if (active) return active;
    if (`${facetId}` === `${id}`) return facet;
    if (Array.isArray(values) && values.length) return findActiveFacet(values, facetId);
    return active;
  }, undefined);
};

module.exports = findActiveFacet;
