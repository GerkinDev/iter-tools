/* @macrome
 * @generatedby /generate/generators/impls/index.cjs
 * @generatedfrom ./$map.js#1643820505045
 * This file is autogenerated. Please do not edit it directly.
 * When editing run `npx macrome watch` then change the file this is generated from.
 */
import { asyncIterableCurry } from '../../internal/async-iterable.js';

export async function* __asyncMap(source, func) {
  let c = 0;
  for await (const value of source) {
    yield await func(value, c++);
  }
}

export const asyncMap = /*#__PURE__*/ asyncIterableCurry(__asyncMap);
