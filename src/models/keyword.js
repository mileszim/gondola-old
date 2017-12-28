export default {
  phrase: String,

  // Associations
  serviceAccounts: [ Array('serviceAccount'), 'serviceAccounts' ]
}

const keywordHooks = [];

export keywordHooks;
