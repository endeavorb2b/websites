const { getAsObject } = require('@base-cms/object-path');
const gql = require('graphql-tag');

const mutation = gql`
  mutation StoreInquirySubmission($input: CreateInquirySubmissionInput!) {
    createInquirySubmission(input:$input){
      id
    }
  }
`;

module.exports = async ({
  apollo,
  content,
  payload,
  addresses,
}) => {
  const company = getAsObject(content, 'company');
  const input = {
    content: {
      id: content.id,
      name: content.name,
      companyId: company.id,
      companyName: company.name,
    },
    addresses,
    payload,
  };
  return apollo.mutate({ mutation, variables: { input } });
};
