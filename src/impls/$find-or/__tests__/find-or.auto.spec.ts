/**
 * @generated-from ./find-or.test.js
 * This file is autogenerated from a template. Please do not edit it directly.
 * To rebuild it from its template use the command
 * > npm run generate
 * More information can be found in CONTRIBUTING.md
 */

import { findOr } from '@iter-tools/es';
import { wrap } from '../../../test/helpers.js';

describe('findOr', () => {
  describe('when iterable is empty', () => {
    it('returns notFoundValue', () => {
      expect(findOr(0, (value: any) => value, null)).toBe(0);
      expect(findOr(0, (value: any) => value, undefined)).toBe(0);
      expect(findOr(0, (value: any) => value, wrap([]))).toBe(0);
    });
  });

  describe('when iterable does not contain the desired value', () => {
    it('returns notFoundValue', () => {
      expect(findOr(0, (_) => false, wrap([1, 2, 3, 4, 5, 6]))).toBe(0);
    });
  });

  describe('when iterable contains the desired value', () => {
    it('returns the value', () => {
      expect(findOr(0, (value) => value === 5, wrap([1, 2, 3, 4, 5, 6]))).toBe(5);
    });
  });
});
