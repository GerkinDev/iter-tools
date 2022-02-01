/* @macrome
 * @generatedby /generate/generators/impls/index.cjs
 * @generatedfrom ./$reduce.js#1643820505046
 * This file is autogenerated. Please do not edit it directly.
 * When editing run `npx macrome watch` then change the file this is generated from.
 */
import { iterableCurry } from '../../internal/iterable.js';
import { __peekerate } from '../$peekerate/peekerate.js';

export function __reduce(iterable, reducer, initial = undefined) {
  let c = 0;
  let result = initial;
  const peekr = __peekerate(iterable);
  try {
    if (initial === undefined) {
      if (peekr.done) {
        throw new Error('Cannot reduce: no initial value specified and iterable was empty');
      }
      result = peekr.value;
      peekr.advance();
      c = 1;
    }
    while (!peekr.done) {
      result = reducer(result, peekr.value, c++);
      peekr.advance();
    }
    return result;
  } finally {
    // close the iterator in case of exceptions
    peekr.return();
  }
}

export const reduce = /*#__PURE__*/ iterableCurry(__reduce, {
  reduces: true,
  minArgs: 1,
  maxArgs: 2,
});
