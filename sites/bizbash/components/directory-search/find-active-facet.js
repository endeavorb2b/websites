const findActiveFacet = (facets, facetId, tree = []) => {
  if (!facetId) return undefined;

  return facets.reduce((active, facet) => {
    const { id, values } = facet;
    if (active) return active;
    if (`${facetId}` === `${id}`) {
      tree.push({ ...facet });
      return { facet: { ...facet }, tree };
    }
    if (Array.isArray(values) && values.length) {
      tree.push({ ...facet });
      return findActiveFacet(values, facetId, tree);
    }
    return active;
  }, undefined) || { facet: null, tree: [] };
};

module.exports = findActiveFacet;
