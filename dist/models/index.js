'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.hooks = exports.models = undefined;

var _account = require('./account');

var _account2 = _interopRequireDefault(_account);

var _keyword = require('./keyword');

var _keyword2 = _interopRequireDefault(_keyword);

var _post = require('./post');

var _post2 = _interopRequireDefault(_post);

var _service_account = require('./service_account');

var _service_account2 = _interopRequireDefault(_service_account);

var _service = require('./service');

var _service2 = _interopRequireDefault(_service);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var models = {
  account: _account2.default,
  keyword: _keyword2.default,
  post: _post2.default,
  serviceAccount: _service_account2.default,
  service: _service2.default
};

var hooks = {
  account: _account.accountHooks,
  keyword: _keyword.keywordHooks,
  post: _post.postHooks,
  serviceAccount: _service_account.serviceAccountHooks,
  service: _service.serviceHooks
};

exports.models = models;
exports.hooks = hooks;