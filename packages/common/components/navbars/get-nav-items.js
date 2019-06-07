module.exports = ({
  site,
  regEnabled,
  hasUser,
  key,
}) => {
  const items = site.getAsArray(key);
  return items.filter((item) => {
    const { when } = item;
    if (!when) return true;
    if (!regEnabled) return false;
    if (hasUser) {
      if (when === 'logged-in') return true;
      if (when === 'logged-out') return false;
    }
    if (!hasUser) {
      if (when === 'logged-in') return false;
      if (when === 'logged-out') return true;
    }
    return false;
  });
};
