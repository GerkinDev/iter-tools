/**
 * @generated-from ./includes-seq.test.js
 * This file is autogenerated from a template. Please do not edit it directly.
 * To rebuild it from its template use the command
 * > npm run generate
 * More information can be found in CONTRIBUTING.md
 */

import { includesSeq } from '@iter-tools/es';
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
});