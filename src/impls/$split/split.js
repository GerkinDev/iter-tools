/* @macrome
 * @generatedby /generate/generators/impls/index.cjs
 * @generatedfrom ./$split.js#1643820505051
 * This file is autogenerated. Please do not edit it directly.
 * When editing run `npx macrome watch` then change the file this is generated from.
 */
import { iterableCurry } from '../../internal/iterable.js';
import { __map } from '../$map/map.js';

function* iterableOf(value) {
  yield value;
}

export function __split(source) {
  return __map(source, (value) => iterableOf(value));
}

export const split = /*#__PURE__*/ iterableCurry(__split);
