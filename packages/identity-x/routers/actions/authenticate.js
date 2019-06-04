const gql = require('graphql-tag');
const { asyncRoute } = require('@base-cms/utils');

const loginAppUser = gql`
  mutation LoginAppUser($input: LoginAppUserMutationInput!) {
    loginAppUser(input: $input) {
      token {
        id
        value
      }
    }
  }
`;

module.exports = asyncRoute(async (req, res) => {
  const { identityX, body } = req;
  const { token } = body;
  if (!token) throw new Error('No login token was provided.');

  const input = { token };
  const variables = { input };
  const { data = {} } = await identityX.client.mutate({ mutation: loginAppUser, variables });
  const { token: authToken } = data.loginAppUser;
  const maxAge = 1000 * 60 * 60 * 24 * 365 * 2;
  res.cookie('__idx', authToken.value, { maxAge, httpOnly: false });
  res.json({ ok: true });
});
