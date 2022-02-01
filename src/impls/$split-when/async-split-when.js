/* @macrome
 * @generatedby /generate/generators/impls/index.cjs
 * @generatedfrom ./$split-when.js#1643820505051
 * This file is autogenerated. Please do not edit it directly.
 * When editing run `npx macrome watch` then change the file this is generated from.
 */
import { asyncIterableCurry } from '../../internal/async-iterable.js';
import { __asyncSpliterate } from '../$spliterate/async-spliterate.js';

async function* asyncPredicateSpliterator(split, { predicate }, source) {
  let i = 0;
  for await (const value of source) {
    yield (await predicate(value, i++)) ? split : value;
  }
}

export function __asyncSplitWhen(source, predicate) {
  return __asyncSpliterate(source, asyncPredicateSpliterator, { predicate });
}

export const asyncSplitWhen = /*#__PURE__*/ asyncIterableCurry(__asyncSplitWhen);
