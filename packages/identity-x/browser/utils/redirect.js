import cleanPath from './clean-path';

export default (window, to) => {
  const path = cleanPath(to);
  const url = `${window.location.origin}/${path}`;
  window.location.replace(url);
};
