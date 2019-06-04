export default (window, to) => {
  const path = to.replace(/^\/+/, '');
  const url = `${window.location.origin}/${path}`;
  window.location.replace(url);
};
