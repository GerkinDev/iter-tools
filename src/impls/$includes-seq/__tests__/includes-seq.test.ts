/* @macrome
 * @generatedby /generate/generators/impls/index.cjs
 * @generatedfrom ./$includes-seq.test.ts#1643820505041
 * This file is autogenerated. Please do not edit it directly.
 * When editing run `npx macrome watch` then change the file this is generated from.
 */
import { includesSeq } from 'iter-tools-es';
import { wrap } from '../../../test/helpers.js';

describe('includesSeq', () => {
  describe('when iterable includes a given sequence', () => {
    it('returns true', () => {
      expect(includesSeq(wrap([1, 2]), wrap([1, 2, 3]))).toBe(true);
      expect(includesSeq(wrap([3]), wrap([1, 2, 3]))).toBe(true);
    });
  });

  describe('when iterable is equal to a given sequence', () => {
    it('returns true', () => {
      expect(includesSeq(wrap([1, 2, 3]), wrap([1, 2, 3]))).toBe(true);
    });
  });

  describe('when iterable is shorter than a matching sequence', () => {
    it('returns false', () => {
      expect(includesSeq(wrap([1, 2, 3]), wrap([1, 2]))).toBe(false);
    });
  });

  describe('when iterable is empty', () => {
    describe('and sequence is empty', () => {
      it('returns true', () => {
        expect(includesSeq(wrap([]), wrap([]))).toBe(true);
      });
    });

    describe('and sequence is not empty', () => {
      it('returns false', () => {
        expect(includesSeq(wrap([undefined]), wrap([]))).toBe(false);
      });
    });
  });

  describe('when same function is specified', () => {
    const same = (a: number, b: number) => Math.abs(a) === Math.abs(b);
    it('uses same value to do comparison', () => {
      expect(includesSeq(same, wrap([-2]), wrap([1, 2, 3]))).toBe(true);
      expect(includesSeq(() => false, wrap([2]), wrap([1, 2, 3]))).toBe(false);
    });
  });
});
