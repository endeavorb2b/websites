import Authenticate from './authenticate.vue';
import Logout from './logout.vue';
import Login from './login.vue';
import Profile from './profile.vue';

export default (Browser) => {
  Browser.registerComponent('IdentityXAuthenticate', Authenticate);
  Browser.registerComponent('IdentityXLogin', Login);
  Browser.registerComponent('IdentityXLogout', Logout);
  Browser.registerComponent('IdentityXProfile', Profile);
};
