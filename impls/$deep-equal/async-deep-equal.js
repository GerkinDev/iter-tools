var _asyncToGenerator = require("@babel/runtime/helpers/asyncToGenerator");

var _regeneratorRuntime = require("@babel/runtime/regenerator");

function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

var _asyncIterator = require("@babel/runtime/helpers/asyncIterator");

var _awaitAsyncGenerator = require("@babel/runtime/helpers/awaitAsyncGenerator");

var _wrapAsyncGenerator = require("@babel/runtime/helpers/wrapAsyncGenerator");

var _require = require('../../internal/async-iterable.js'),
    asyncIsIterable = _require.asyncIsIterable,
    asyncIsWrappable = _require.asyncIsWrappable;

var _require2 = require('../$map/map.js'),
    __map = _require2.__map;

var _require3 = require('../$every/every.js'),
    __every = _require3.__every;

var _require4 = require('../$zip-all/async-zip-all.js'),
    __asyncZipAll = _require4.__asyncZipAll;

var _require5 = require('../$slice/slice.js'),
    __sliceFromStart = _require5.__sliceFromStart;

var none = Symbol('none');
var zipAllConfig = {
  filler: none
};

var asyncEmpty = /*#__PURE__*/function () {
  var _ref = _wrapAsyncGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee() {
    return _regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function asyncEmpty() {
    return _ref.apply(this, arguments);
  };
}();

var asyncIterableOrEmpty = function asyncIterableOrEmpty(value) {
  return value == null ? asyncEmpty() : value;
};

function _asyncDeepEqual(_x, _x2, _x3) {
  return _asyncDeepEqual2.apply(this, arguments);
}

function _asyncDeepEqual2() {
  _asyncDeepEqual2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee2(values, same, isIterable) {
    var depth,
        _iteratorNormalCompletion,
        _didIteratorError,
        _iteratorError,
        _iterator,
        _step,
        _value,
        stepValues,
        firstValue,
        _iterator2,
        _step2,
        value,
        _args2 = arguments;

    return _regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            depth = _args2.length > 3 && _args2[3] !== undefined ? _args2[3] : 0;

            if (!__every(values, function (value) {
              return typeof value !== 'string' && isIterable(value);
            })) {
              _context2.next = 40;
              break;
            }

            _iteratorNormalCompletion = true;
            _didIteratorError = false;
            _context2.prev = 4;
            _iterator = _asyncIterator(__asyncZipAll(__map(values, asyncIterableOrEmpty), zipAllConfig));

          case 6:
            _context2.next = 8;
            return _iterator.next();

          case 8:
            _step = _context2.sent;
            _iteratorNormalCompletion = _step.done;
            _context2.next = 12;
            return _step.value;

          case 12:
            _value = _context2.sent;

            if (_iteratorNormalCompletion) {
              _context2.next = 22;
              break;
            }

            stepValues = _value;
            _context2.next = 17;
            return _asyncDeepEqual(stepValues, same, isIterable, depth + 1);

          case 17:
            if (_context2.sent) {
              _context2.next = 19;
              break;
            }

            return _context2.abrupt("return", false);

          case 19:
            _iteratorNormalCompletion = true;
            _context2.next = 6;
            break;

          case 22:
            _context2.next = 28;
            break;

          case 24:
            _context2.prev = 24;
            _context2.t0 = _context2["catch"](4);
            _didIteratorError = true;
            _iteratorError = _context2.t0;

          case 28:
            _context2.prev = 28;
            _context2.prev = 29;

            if (!(!_iteratorNormalCompletion && _iterator["return"] != null)) {
              _context2.next = 33;
              break;
            }

            _context2.next = 33;
            return _iterator["return"]();

          case 33:
            _context2.prev = 33;

            if (!_didIteratorError) {
              _context2.next = 36;
              break;
            }

            throw _iteratorError;

          case 36:
            return _context2.finish(33);

          case 37:
            return _context2.finish(28);

          case 38:
            _context2.next = 58;
            break;

          case 40:
            firstValue = values[0];
            _iterator2 = _createForOfIteratorHelper(__sliceFromStart(values, 1));
            _context2.prev = 42;

            _iterator2.s();

          case 44:
            if ((_step2 = _iterator2.n()).done) {
              _context2.next = 50;
              break;
            }

            value = _step2.value;

            if (same(value, firstValue, depth)) {
              _context2.next = 48;
              break;
            }

            return _context2.abrupt("return", false);

          case 48:
            _context2.next = 44;
            break;

          case 50:
            _context2.next = 55;
            break;

          case 52:
            _context2.prev = 52;
            _context2.t1 = _context2["catch"](42);

            _iterator2.e(_context2.t1);

          case 55:
            _context2.prev = 55;

            _iterator2.f();

            return _context2.finish(55);

          case 58:
            return _context2.abrupt("return", true);

          case 59:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, null, [[4, 24, 28, 38], [29,, 33, 37], [42, 52, 55, 58]]);
  }));
  return _asyncDeepEqual2.apply(this, arguments);
}

exports._asyncDeepEqual = _asyncDeepEqual;

function __asyncDeepEqual(values) {
  var same = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : Object.is;
  var coerceNil = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
  return values.length <= 1 ? true : _asyncDeepEqual(values, same, coerceNil ? asyncIsWrappable : asyncIsIterable);
}

exports.__asyncDeepEqual = __asyncDeepEqual;

function asyncDeepEqual() {
  for (var _len = arguments.length, values = new Array(_len), _key = 0; _key < _len; _key++) {
    values[_key] = arguments[_key];
  }

  return __asyncDeepEqual(values);
}

exports.asyncDeepEqual = asyncDeepEqual;