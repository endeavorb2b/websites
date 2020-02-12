import Authenticate from './authenticate.vue';
import Logout from './logout.vue';
import Login from './login.vue';
import Profile from './profile.vue';

export default (Browser) => {
  const { EventBus } = Browser;
  Browser.register('IdentityXAuthenticate', Authenticate, {
    on: { action: (...args) => EventBus.$emit('identity-x-authenticate', ...args) },
  });
  Browser.register('IdentityXLogin', Login, {
    on: { action: (...args) => EventBus.$emit('identity-x-logout', ...args) },
  });
  Browser.register('IdentityXLogout', Logout, {
    on: { action: (...args) => EventBus.$emit('identity-x-logout', ...args) },
  });
  Browser.register('IdentityXProfile', Profile, {
    on: { action: (...args) => EventBus.$emit('identity-x-profile', ...args) },
  });
};
