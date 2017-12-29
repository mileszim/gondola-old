'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _environment = require('../config/environment');

var _environment2 = _interopRequireDefault(_environment);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var adapter = { adapter: null };

// Set adapter
if (_environment2.default.adapter) {
  var adapterUrl = _environment2.default.adapter.url;
  var adapterPackage = require('fortune-' + _environment2.default.adapter.name);

  adapter = {
    adapter: [adapterPackage, { url: adapterURL }]
  };
}

exports.default = adapter;