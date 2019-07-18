import * as Sentry from '@sentry/browser';
import * as Integrations from '@sentry/integrations';
import Vue from '@base-cms/marko-web/browser/vue';
import components from './components';
import createClient from './create-client';

const isDev = ['0.0.0.0', 'localhost'].includes(window.location.hostname);
const dsn = 'https://7d01088298a44760a0e91923b1f17933@sentry.as3.io/17';

export default (Browser, { mountPoint, sentry } = { sentry: { enabled: true } }) => {
  if (sentry.enabled) {
    Sentry.init({
      dsn: sentry.dsn || dsn,
      integrations: [new Integrations.Vue({ Vue, attachProps: true })],
      environment: isDev ? 'development' : 'production',
      debug: isDev,
    });
  }
  const fetch = createClient({ mountPoint });
  Object.keys(components).forEach((key) => {
    Browser.registerComponent(`Identity${key}`, components[key], { fetch });
  });
};
