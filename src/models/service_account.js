export default {
  serviceId: String,
  authToken: String,

  // Associations
  service: ['serviceAccount', 'service'],
  account: ['serviceAccount', 'account']
};

export let serviceAccountHooks = [];
