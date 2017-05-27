export default {
  name: String,
  description: String,
  avatar: String,

  // Associations
  serviceAccounts: [ Array('serviceAccount'), 'serviceAccounts' ]
}
