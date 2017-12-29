'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  phrase: String,

  // Associations
  serviceAccounts: [Array('serviceAccount'), 'serviceAccounts']
};
var keywordHooks = exports.keywordHooks = [];