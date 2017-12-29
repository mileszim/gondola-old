'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.accountHooks = undefined;

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _fortune = require('../fortune');

var _fortune2 = _interopRequireDefault(_fortune);

var _message = require('../message');

var _message2 = _interopRequireDefault(_message);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var methods = _fortune2.default.methods,
    BadRequestError = _fortune2.default.errors.BadRequestError;
exports.default = {
  name: String,
  description: String,
  avatar: String,

  // Associations
  serviceAccounts: [Array('serviceAccount'), 'serviceAccounts']
};
var accountHooks = exports.accountHooks = [function accountInput(context, record, update) {
  var method = context.request.method;

  switch (method) {
    case methods.create:
      var name = record.name;

      if (!name) {
        var errorMessage = (0, _message2.default)('MissingField', 'en', { field: 'name' });
        throw new BadRequestError(errorMessage);
      }
      return context.transaction.find('account', null, { match: { name: name } }).then(function (accounts) {
        if (accounts.length > 0) {
          var _accounts = _slicedToArray(accounts, 1),
              account = _accounts[0];

          return account;
        } else {
          return record;
        }
      });
  }
}];