import components from './components';
import createClient from './create-client';

export default (Browser, mountPoint) => {
  const fetch = createClient({ mountPoint });
  Object.keys(components).forEach((key) => {
    Browser.registerComponent(`Identity${key}`, components[key], { fetch });
  });
};
