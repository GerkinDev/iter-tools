/* @macrome
 * @generatedby /generate/generators/impls/index.cjs
 * @generatedfrom ./$size.test.ts#1643820505048
 * This file is autogenerated. Please do not edit it directly.
 * When editing run `npx macrome watch` then change the file this is generated from.
 */
import { size } from 'iter-tools-es';
import { wrap } from '../../../test/helpers.js';

describe('size', () => {
  describe('when iterable is empty', () => {
    it('returns 0', () => {
      expect(size(null)).toBe(0);
      expect(size(undefined)).toBe(0);
      expect(size(wrap([]))).toBe(0);
    });
  });

  describe('when iterable contains values', () => {
    it('return number of values in iterable', () => {
      expect(size(wrap([1, 2, 3, 4, 5, 6]))).toBe(6);
    });
  });
});
