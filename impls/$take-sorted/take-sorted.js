var _regeneratorRuntime = require("@babel/runtime/regenerator");

var _marked = /*#__PURE__*/_regeneratorRuntime.mark(__takeSorted);

function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

var _require = require('../../internal/iterable.js'),
    iterableCurry = _require.iterableCurry;

var _require2 = require('../../internal/compare.js'),
    defaultCompareOrder = _require2.defaultCompareOrder;

var _require3 = require('./internal/heap.js'),
    Heap = _require3.Heap;

function __takeSorted(source) {
  var n,
      compare,
      heap,
      _iterator,
      _step,
      value,
      _args = arguments;

  return _regeneratorRuntime.wrap(function __takeSorted$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          n = _args.length > 1 && _args[1] !== undefined ? _args[1] : Infinity;
          compare = _args.length > 2 && _args[2] !== undefined ? _args[2] : defaultCompareOrder;
          heap = new Heap(compare);
          _iterator = _createForOfIteratorHelper(source);

          try {
            for (_iterator.s(); !(_step = _iterator.n()).done;) {
              value = _step.value;
              heap.push(value);

              if (heap.size > n) {
                heap.pop();
              }
            }
          } catch (err) {
            _iterator.e(err);
          } finally {
            _iterator.f();
          }

        case 5:
          if (!heap.size) {
            _context.next = 10;
            break;
          }

          _context.next = 8;
          return heap.pop();

        case 8:
          _context.next = 5;
          break;

        case 10:
        case "end":
          return _context.stop();
      }
    }
  }, _marked);
}

exports.__takeSorted = __takeSorted;
var takeSorted = /*#__PURE__*/iterableCurry(__takeSorted, {
  minArgs: 0,
  maxArgs: 2,
  validateArgs: function validateArgs(args) {
    if (typeof args[1] === 'function') {
      var temp = args[2];
      args[2] = args[1];
      args[1] = temp;
    }
  }
});
exports.takeSorted = takeSorted;