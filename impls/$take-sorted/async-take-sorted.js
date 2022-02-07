var _regeneratorRuntime = require("@babel/runtime/regenerator");

var _awaitAsyncGenerator = require("@babel/runtime/helpers/awaitAsyncGenerator");

var _wrapAsyncGenerator = require("@babel/runtime/helpers/wrapAsyncGenerator");

var _asyncIterator = require("@babel/runtime/helpers/asyncIterator");

var _require = require('../../internal/async-iterable.js'),
    asyncIterableCurry = _require.asyncIterableCurry;

var _require2 = require('../../internal/compare.js'),
    defaultCompareOrder = _require2.defaultCompareOrder;

var _require3 = require('./internal/heap.js'),
    Heap = _require3.Heap;

function __asyncTakeSorted(_x) {
  return _asyncTakeSorted.apply(this, arguments);
}

exports.__asyncTakeSorted = __asyncTakeSorted;

function _asyncTakeSorted() {
  _asyncTakeSorted = _wrapAsyncGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee(source) {
    var n,
        compare,
        heap,
        _iteratorNormalCompletion,
        _didIteratorError,
        _iteratorError,
        _iterator,
        _step,
        _value,
        value,
        _args = arguments;

    return _regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            n = _args.length > 1 && _args[1] !== undefined ? _args[1] : Infinity;
            compare = _args.length > 2 && _args[2] !== undefined ? _args[2] : defaultCompareOrder;
            heap = new Heap(compare);
            _iteratorNormalCompletion = true;
            _didIteratorError = false;
            _context.prev = 5;
            _iterator = _asyncIterator(source);

          case 7:
            _context.next = 9;
            return _awaitAsyncGenerator(_iterator.next());

          case 9:
            _step = _context.sent;
            _iteratorNormalCompletion = _step.done;
            _context.next = 13;
            return _awaitAsyncGenerator(_step.value);

          case 13:
            _value = _context.sent;

            if (_iteratorNormalCompletion) {
              _context.next = 21;
              break;
            }

            value = _value;
            heap.push(value);

            if (heap.size > n) {
              heap.pop();
            }

          case 18:
            _iteratorNormalCompletion = true;
            _context.next = 7;
            break;

          case 21:
            _context.next = 27;
            break;

          case 23:
            _context.prev = 23;
            _context.t0 = _context["catch"](5);
            _didIteratorError = true;
            _iteratorError = _context.t0;

          case 27:
            _context.prev = 27;
            _context.prev = 28;

            if (!(!_iteratorNormalCompletion && _iterator["return"] != null)) {
              _context.next = 32;
              break;
            }

            _context.next = 32;
            return _awaitAsyncGenerator(_iterator["return"]());

          case 32:
            _context.prev = 32;

            if (!_didIteratorError) {
              _context.next = 35;
              break;
            }

            throw _iteratorError;

          case 35:
            return _context.finish(32);

          case 36:
            return _context.finish(27);

          case 37:
            if (!heap.size) {
              _context.next = 42;
              break;
            }

            _context.next = 40;
            return heap.pop();

          case 40:
            _context.next = 37;
            break;

          case 42:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[5, 23, 27, 37], [28,, 32, 36]]);
  }));
  return _asyncTakeSorted.apply(this, arguments);
}

var asyncTakeSorted = /*#__PURE__*/asyncIterableCurry(__asyncTakeSorted, {
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
exports.asyncTakeSorted = asyncTakeSorted;