const { isArray } = Array;

module.exports = (block, element, modifiers = [], asString = true) => {
  const classes = [`${block}__${element}`];
  if (isArray(modifiers)) {
    modifiers.forEach((modifier) => {
      // use the element class name if present, else the block.
      const root = classes[0];
      classes.push(`${root}--${modifier}`);
    });
  }
  return asString ? classes.join(' ') : classes;
};
