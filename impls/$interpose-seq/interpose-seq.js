var _regeneratorRuntime = require("@babel/runtime/regenerator");

var _marked = /*#__PURE__*/_regeneratorRuntime.mark(__interposeSeq);

function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

var _require = require('../../internal/iterable.js'),
    iterableCurry = _require.iterableCurry,
    cache = _require.cache;

function __interposeSeq(source, seq) {
  var subseq_, first, _iterator, _step, sourceValue;

  return _regeneratorRuntime.wrap(function __interposeSeq$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          subseq_ = cache(seq);
          first = true;
          _iterator = _createForOfIteratorHelper(source);
          _context.prev = 3;

          _iterator.s();

        case 5:
          if ((_step = _iterator.n()).done) {
            _context.next = 14;
            break;
          }

          sourceValue = _step.value;

          if (first) {
            _context.next = 9;
            break;
          }

          return _context.delegateYield(subseq_, "t0", 9);

        case 9:
          _context.next = 11;
          return sourceValue;

        case 11:
          first = false;

        case 12:
          _context.next = 5;
          break;

        case 14:
          _context.next = 19;
          break;

        case 16:
          _context.prev = 16;
          _context.t1 = _context["catch"](3);

          _iterator.e(_context.t1);

        case 19:
          _context.prev = 19;

          _iterator.f();

          return _context.finish(19);

        case 22:
        case "end":
          return _context.stop();
      }
    }
  }, _marked, null, [[3, 16, 19, 22]]);
}

exports.__interposeSeq = __interposeSeq;
var interposeSeq = /*#__PURE__*/iterableCurry(__interposeSeq);
exports.interposeSeq = interposeSeq;