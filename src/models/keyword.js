export default {
  phrase: String,

  // Associations
  serviceAccounts: [ Array('serviceAccount'), 'serviceAccounts' ]
}

export let keywordHooks = [];
