/**
 * @generated-from ./$size.test.js
 * This file is autogenerated from a template. Please do not edit it directly.
 * To rebuild it from its template use the command
 * > npm run generate
 * More information can be found in CONTRIBUTING.md
 */

import { asyncSize } from '@iter-tools/es';
import { asyncWrap } from '../../../test/async-helpers.js';

describe('asyncSize', () => {
  describe('when iterable is empty', () => {
    it('returns 0', async () => {
      expect(await asyncSize(null)).toBe(0);
      expect(await asyncSize(undefined)).toBe(0);
      expect(await asyncSize(asyncWrap([]))).toBe(0);
    });
  });

  describe('when iterable contains values', () => {
    it('return number of values in iterable', async () => {
      expect(await asyncSize(asyncWrap([1, 2, 3, 4, 5, 6]))).toBe(6);
    });
  });
});
