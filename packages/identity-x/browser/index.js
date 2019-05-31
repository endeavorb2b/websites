import Browser from '@base-cms/marko-web/browser';
import Vue from '@base-cms/marko-web/browser/vue';
import VueApollo from 'vue-apollo';
import createClient from './create-client';
import components from './components';

export default ({ uri, appId }) => {
  const defaultClient = createClient({ uri, appId });
  Vue.use(VueApollo);
  const apolloProvider = new VueApollo({ defaultClient });

  Object.keys(components).forEach((key) => {
    Browser.registerComponent(`Identity${key}`, components[key], { apolloProvider });
  });
};
