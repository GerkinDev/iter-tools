var _typeof = require("@babel/runtime/helpers/typeof");

var _regeneratorRuntime = require("@babel/runtime/regenerator");

var _marked = /*#__PURE__*/_regeneratorRuntime.mark(__objectKeys);

var _require = require('../../internal/iterable.js'),
    wrapWithIterableIterator = _require.wrapWithIterableIterator;

var hasOwnProperty = Object.prototype.hasOwnProperty;

function __objectKeys(obj) {
  var key;
  return _regeneratorRuntime.wrap(function __objectKeys$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          if (!(obj == null)) {
            _context.next = 2;
            break;
          }

          return _context.abrupt("return");

        case 2:
          _context.t0 = _regeneratorRuntime.keys(obj);

        case 3:
          if ((_context.t1 = _context.t0()).done) {
            _context.next = 10;
            break;
          }

          key = _context.t1.value;

          if (!hasOwnProperty.call(obj, key)) {
            _context.next = 8;
            break;
          }

          _context.next = 8;
          return key;

        case 8:
          _context.next = 3;
          break;

        case 10:
        case "end":
          return _context.stop();
      }
    }
  }, _marked);
}

exports.__objectKeys = __objectKeys;
var objectKeys = /*#__PURE__*/wrapWithIterableIterator(__objectKeys, {
  validateArgs: function validateArgs(args) {
    if (!(args[0] == null || _typeof(args[0]) === 'object')) {
      throw new Error('obj argument to objectKeys must be an object, null, or undefined');
    }
  }
});
exports.objectKeys = objectKeys;