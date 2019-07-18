import * as Sentry from '@sentry/browser';
import * as Integrations from '@sentry/integrations';
import Vue from '@base-cms/marko-web/browser/vue';
import components from './components';
import createClient from './create-client';

const isProd = window.location.hostname !== '0.0.0.0';

export default (Browser, { mountPoint, sentryDsn } = {}) => {
  if (sentryDsn) {
    Sentry.init({
      dsn: sentryDsn,
      integrations: [new Integrations.Vue({ Vue, attachProps: true })],
      environment: isProd ? 'production' : 'development',
      debug: !isProd,
    });
  }
  const fetch = createClient({ mountPoint });
  Object.keys(components).forEach((key) => {
    Browser.registerComponent(`Identity${key}`, components[key], { fetch });
  });
};
