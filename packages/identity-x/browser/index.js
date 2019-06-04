import components from './components';

export default (Browser) => {
  Object.keys(components).forEach((key) => {
    Browser.registerComponent(`Identity${key}`, components[key]);
  });
};
