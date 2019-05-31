<template>
  <div>IdentityX Ping {{ping}}</div>
</template>

<script>
import gql from 'graphql-tag';

export default {
  apollo: {
    ping: gql`
      query Ping {
        ping
      }
    `,
  },
};
</script>
