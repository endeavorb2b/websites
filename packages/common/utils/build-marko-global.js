const { assign } = Object;

/**
 * Generates the marko `$global` template property.
 *
 * @param Object The Express request object.
 * @returns Object
 */
module.exports = (res) => {
  const { req, app } = res;
  return assign({ app, req, res }, app.locals, res.locals);
};
