module.exports = (title, config) => ({
  title,
  description: `The latest ${(title || '').toLowerCase()} from ${config.siteName()}`,
});
