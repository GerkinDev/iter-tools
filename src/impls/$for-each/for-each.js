/* @macrome
 * @generatedby /generate/generators/impls/index.cjs
 * @generatedfrom ./$for-each.js#1643820505038
 * This file is autogenerated. Please do not edit it directly.
 * When editing run `npx macrome watch` then change the file this is generated from.
 */
import { iterableCurry } from '../../internal/iterable.js';

export function __forEach(iterable, callback) {
  let c = 0;
  for (const value of iterable) {
    callback(value, c++);
  }
}

export const forEach = /*#__PURE__*/ iterableCurry(__forEach, {
  reduces: true,
});
