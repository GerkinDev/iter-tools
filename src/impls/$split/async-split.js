/* @macrome
 * @generatedby /generate/generators/impls/index.cjs
 * @generatedfrom ./$split.js#1643820505051
 * This file is autogenerated. Please do not edit it directly.
 * When editing run `npx macrome watch` then change the file this is generated from.
 */
import { asyncIterableCurry } from '../../internal/async-iterable.js';
import { __asyncMap } from '../$map/async-map.js';

function* iterableOf(value) {
  yield value;
}

export function __asyncSplit(source) {
  return __asyncMap(source, (value) => iterableOf(value));
}

export const asyncSplit = /*#__PURE__*/ asyncIterableCurry(__asyncSplit);
