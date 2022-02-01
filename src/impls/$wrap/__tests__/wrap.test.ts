/* @macrome
 * @generatedby /generate/generators/impls/index.cjs
 * @generatedfrom ./$wrap.test.ts#1643820505060
 * This file is autogenerated. Please do not edit it directly.
 * When editing run `npx macrome watch` then change the file this is generated from.
 */
import { wrap } from 'iter-tools-es';
import { wrap as testWrap, unwrap } from '../../../test/helpers.js';

describe('wrap', () => {
  describe('when source is empty', () => {
    it('yields no values', () => {
      expect(unwrap(wrap(undefined))).toEqual([]);
      expect(unwrap(wrap(null))).toEqual([]);
      expect(unwrap(wrap(testWrap([])))).toEqual([]);
    });
  });

  describe('when source has values', () => {
    it('yields the values from source', () => {
      expect(unwrap(wrap([1, 2, 3]))).toEqual([1, 2, 3]);
      expect(unwrap(wrap(testWrap([1, 2, 3])))).toEqual([1, 2, 3]);
    });
  });

  it('can be consumed multiple times if its input can', () => {
    const wrapped = wrap([1, 2, 3]);
    expect(unwrap(wrapped)).toEqual([1, 2, 3]);
    expect(unwrap(wrapped)).toEqual([1, 2, 3]);
  });
});
