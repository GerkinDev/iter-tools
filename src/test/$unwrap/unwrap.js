/* @macrome
 * @generatedby /generate/generators/impls/index.cjs
 * @generatedfrom ./$unwrap.js#1643820505086
 * This file is autogenerated. Please do not edit it directly.
 * When editing run `npx macrome watch` then change the file this is generated from.
 */
import { isLoopable } from '../../internal/iterable.js';

export function unwrap(iterable) {
  const values = [];

  for (const value of iterable) {
    values.push(value);
  }

  return values;
}

export function unwrapDeep(iterable) {
  const values = [];

  for (const value of iterable) {
    if (typeof value !== 'string' && isLoopable(value)) {
      values.push(unwrapDeep(value));
    } else {
      values.push(value);
    }
  }

  return values;
}
