var _regeneratorRuntime = require("@babel/runtime/regenerator");

function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

var _require = require('../../internal/iterable.js'),
    isIterable = _require.isIterable,
    isWrappable = _require.isWrappable;

var _require2 = require('../$map/map.js'),
    __map = _require2.__map;

var _require3 = require('../$every/every.js'),
    __every = _require3.__every;

var _require4 = require('../$zip-all/zip-all.js'),
    __zipAll = _require4.__zipAll;

var _require5 = require('../$slice/slice.js'),
    __sliceFromStart = _require5.__sliceFromStart;

var none = Symbol('none');
var zipAllConfig = {
  filler: none
};

var empty = /*#__PURE__*/_regeneratorRuntime.mark(function empty() {
  return _regeneratorRuntime.wrap(function empty$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
        case "end":
          return _context.stop();
      }
    }
  }, empty);
});

var iterableOrEmpty = function iterableOrEmpty(value) {
  return value == null ? empty() : value;
};

function _deepEqual(values, same, isIterable) {
  var depth = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 0;

  if (__every(values, function (value) {
    return typeof value !== 'string' && isIterable(value);
  })) {
    var _iterator = _createForOfIteratorHelper(__zipAll(__map(values, iterableOrEmpty), zipAllConfig)),
        _step;

    try {
      for (_iterator.s(); !(_step = _iterator.n()).done;) {
        var stepValues = _step.value;
        if (!_deepEqual(stepValues, same, isIterable, depth + 1)) return false;
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }
  } else {
    var firstValue = values[0];

    var _iterator2 = _createForOfIteratorHelper(__sliceFromStart(values, 1)),
        _step2;

    try {
      for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
        var value = _step2.value;
        if (!same(value, firstValue, depth)) return false;
      }
    } catch (err) {
      _iterator2.e(err);
    } finally {
      _iterator2.f();
    }
  }

  return true;
}

exports._deepEqual = _deepEqual;

function __deepEqual(values) {
  var same = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : Object.is;
  var coerceNil = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
  return values.length <= 1 ? true : _deepEqual(values, same, coerceNil ? isWrappable : isIterable);
}

exports.__deepEqual = __deepEqual;

function deepEqual() {
  for (var _len = arguments.length, values = new Array(_len), _key = 0; _key < _len; _key++) {
    values[_key] = arguments[_key];
  }

  return __deepEqual(values);
}

exports.deepEqual = deepEqual;