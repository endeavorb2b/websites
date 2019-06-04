const gql = require('graphql-tag');
const { asyncRoute } = require('@base-cms/utils');

const logoutAppUser = gql`
  mutation LogoutAppUser($input: LogoutAppUserMutationInput!) {
    logoutAppUser(input: $input)
  }
`;

module.exports = asyncRoute(async (req, res) => {
  const { identityX, cookies } = req;
  const { __idx: token } = cookies;
  if (!token) {
    res.json({ ok: true });
  } else {
    const input = { token };
    const variables = { input };
    await identityX.client.mutate({ mutation: logoutAppUser, variables });
    res.clearCookie('__idx');
    res.json({ ok: true });
  }
});
