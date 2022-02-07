var _regeneratorRuntime = require("@babel/runtime/regenerator");

var _marked = /*#__PURE__*/_regeneratorRuntime.mark(__window);

function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

var _require = require('../../internal/iterable.js'),
    iterableCurry = _require.iterableCurry;

var _require2 = require('../../internal/circular-buffer.js'),
    CircularBuffer = _require2.CircularBuffer,
    ReadOnlyCircularBuffer = _require2.ReadOnlyCircularBuffer;

function __window(source, size) {
  var buffer, bufferReadProxy, _iterator, _step, value;

  return _regeneratorRuntime.wrap(function __window$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          buffer = new CircularBuffer(size);
          bufferReadProxy = new ReadOnlyCircularBuffer(buffer);
          _iterator = _createForOfIteratorHelper(source);
          _context.prev = 3;

          _iterator.s();

        case 5:
          if ((_step = _iterator.n()).done) {
            _context.next = 13;
            break;
          }

          value = _step.value;
          buffer.push(value);

          if (!buffer.isFull()) {
            _context.next = 11;
            break;
          }

          _context.next = 11;
          return bufferReadProxy;

        case 11:
          _context.next = 5;
          break;

        case 13:
          _context.next = 18;
          break;

        case 15:
          _context.prev = 15;
          _context.t0 = _context["catch"](3);

          _iterator.e(_context.t0);

        case 18:
          _context.prev = 18;

          _iterator.f();

          return _context.finish(18);

        case 21:
        case "end":
          return _context.stop();
      }
    }
  }, _marked, null, [[3, 15, 18, 21]]);
}

exports.__window = __window;
var window = /*#__PURE__*/iterableCurry(__window, {
  validateArgs: function validateArgs(args) {
    if (typeof args[1] !== 'number') {
      throw new Error('window'.concat(" must be passed a numeric size"));
    }
  }
});
exports.window = window;