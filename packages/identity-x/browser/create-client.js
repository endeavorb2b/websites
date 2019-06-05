import Vue from '@base-cms/marko-web/browser/vue';

Vue.mixin({
  beforeCreate() {
    const { $options } = this;
    if ($options.fetch) {
      this.$fetch = $options.fetch;
    } else if ($options.parent && $options.parent.$fetch) {
      this.$fetch = $options.parent.$fetch;
    }
  },
});

export default ({ mountPoint = '/__idx' } = {}) => (path, body) => {
  const endpoint = path.replace(/^\/+/, '');
  const uri = `${mountPoint}/${endpoint}`;
  return fetch(uri, {
    method: 'post',
    headers: { 'content-type': 'application/json' },
    body: body ? JSON.stringify(body) : undefined,
  });
};
