/* @macrome
 * @generatedby /generate/generators/impls/index.cjs
 * @generatedfrom ./$batch.test.ts#1643820505028
 * This file is autogenerated. Please do not edit it directly.
 * When editing run `npx macrome watch` then change the file this is generated from.
 */
import { batch } from 'iter-tools-es';
import { wrap, unwrapDeep } from '../../../test/helpers.js';

describe('batch', () => {
  describe('when source is empty', () => {
    it('yields no values', () => {
      expect(unwrapDeep(batch(2, null))).toEqual([]);
      expect(unwrapDeep(batch(2, undefined))).toEqual([]);
      expect(unwrapDeep(batch(2, wrap([])))).toEqual([]);
    });
  });

  describe('when source has fewer than `size` values', () => {
    it('yields one incomplete batch', () => {
      expect(unwrapDeep(batch(2, wrap([1])))).toEqual([[1]]);
    });
  });

  describe('when source has more than `size` values', () => {
    describe('which can be divided evenly into batches', () => {
      it('yields batches of `size` values', () => {
        expect(unwrapDeep(batch(2, wrap([1, 2, 3, 4, 5, 6])))).toEqual([
          [1, 2],
          [3, 4],
          [5, 6],
        ]);
      });
    });

    describe('which cannot be divided evenly into batches', () => {
      it('yields batches of `size` values and one incomplete batch', () => {
        expect(unwrapDeep(batch(2, wrap([1, 2, 3, 4, 5])))).toEqual([[1, 2], [3, 4], [5]]);
      });
    });
  });

  it('errors when passed size <= 0', () => {
    expect(() => batch(0, [])).toThrowErrorMatchingSnapshot();
  });
});
