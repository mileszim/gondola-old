'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  serviceId: String,
  authToken: String,

  // Associations
  service: ['serviceAccount', 'service'],
  account: ['serviceAccount', 'account']
};
var serviceAccountHooks = exports.serviceAccountHooks = [];