/* @macrome
 * @generatedby /generate/generators/impls/index.cjs
 * @generatedfrom ./$to-array.test.ts#1643820505057
 * This file is autogenerated. Please do not edit it directly.
 * When editing run `npx macrome watch` then change the file this is generated from.
 */
import { toArray } from 'iter-tools-es';
import { wrap } from '../../../test/helpers.js';

describe('toArray', () => {
  it('turns an iterable into an array', () => {
    expect(toArray(wrap([1, 2, 3]))).toEqual([1, 2, 3]);
  });
});
