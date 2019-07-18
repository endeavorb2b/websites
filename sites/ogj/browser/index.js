import Browser from '@endeavorb2b/base-website-common/browser';
import identityX from '@endeavorb2b/base-website-identity-x/browser';

const sentryDsn = 'https://7d01088298a44760a0e91923b1f17933@sentry.as3.io/17';

identityX(Browser, { sentryDsn });

export default Browser;
