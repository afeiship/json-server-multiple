'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _fs = require('fs');

var _fs2 = _interopRequireDefault(_fs);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var _default = function () {
  _createClass(_default, null, [{
    key: 'create',
    value: function create(inDbJson, inApiPath, inSpacer) {
      return new this(inDbJson, inApiPath, inSpacer);
    }
  }]);

  function _default(inDbJson, inApiPath) {
    var inSpacer = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 2;

    _classCallCheck(this, _default);

    this.dbJson = inDbJson;
    this.apiPath = inApiPath;
    this.spacer = inSpacer;
    this.data = {};

    this.read();
    this.write();
  }

  _createClass(_default, [{
    key: 'read',
    value: function read() {
      var _this = this;

      var apis = this.apiPath;
      _fs2.default.readdirSync(apis).map(function (api) {
        return Object.assign(_this.data, require(apis + '/' + api).default);
      });
    }
  }, {
    key: 'write',
    value: function write() {
      _fs2.default.writeFileSync(this.dbJson, JSON.stringify(this.data, null, this.spacer));
    }
  }]);

  return _default;
}();

exports.default = _default;