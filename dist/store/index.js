'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _fortune = require('../fortune');

var _fortune2 = _interopRequireDefault(_fortune);

var _models = require('../models');

var _adapter = require('./adapter');

var _adapter2 = _interopRequireDefault(_adapter);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var options = { adapter: _adapter2.default, hooks: _models.hooks };

var store = new _fortune2.default(_models.models, options);

exports.default = store;