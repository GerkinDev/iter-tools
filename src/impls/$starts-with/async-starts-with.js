/* @macrome
 * @generatedby /generate/generators/impls/index.cjs
 * @generatedfrom ./$starts-with.js#1643820505054
 * This file is autogenerated. Please do not edit it directly.
 * When editing run `npx macrome watch` then change the file this is generated from.
 */
import { asyncIterableCurry } from '../../internal/async-iterable.js';
import { __asyncFirstOr } from '../$first-or/async-first-or.js';

const none = Symbol('none');

export async function __asyncStartsWith(iterable, value, same = Object.is) {
  const first = await __asyncFirstOr(iterable, none);
  if (first === none) return false;
  return same(value, first);
}

export const asyncStartsWith = /*#__PURE__*/ asyncIterableCurry(__asyncStartsWith, {
  minArgs: 1,
  maxArgs: 2,
  reduces: true,
  validateArgs(args) {},
});
