const { siteName } = require('./core');

module.exports = [
  {
    href: '/user/login',
    title: `Login to ${siteName}`,
    label: 'Login',
    when: 'logged-out',
  },
  {
    href: '/user/register',
    title: `Register to ${siteName}`,
    label: 'Register',
    when: 'logged-out',
  },
  {
    href: '/user/logout',
    title: `Login off ${siteName}`,
    label: 'Logout',
    when: 'logged-in',
  },
];
