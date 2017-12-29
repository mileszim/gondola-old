export default {
  name: String,

  // Assciations
  accounts: [ Array('account'), 'accounts' ],
  keywords: [ Array('keyword'), 'keywords' ]
};

export let serviceHooks = [];
