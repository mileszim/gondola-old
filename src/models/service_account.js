export default {
  serviceId: String,
  authToken: String,

  // Associations
  service: ['serviceAccount', 'service'],
  account: ['serviceAccount', 'account']
};

const serviceAccountHooks = [];

export serviceAccountHooks;
