/* @macrome
 * @generatedby /generate/generators/impls/index.cjs
 * @generatedfrom ./$take-last.test.ts#1643820505055
 * This file is autogenerated. Please do not edit it directly.
 * When editing run `npx macrome watch` then change the file this is generated from.
 */
import { asyncTakeLast } from 'iter-tools-es';
import { asyncWrap } from '../../../test/async-helpers.js';

describe('asyncTakeLast', () => {
  describe('when iterable is empty', () => {
    it('returns undefined', async () => {
      expect(await asyncTakeLast(null)).toBe(undefined);
      expect(await asyncTakeLast(undefined)).toBe(undefined);
      expect(await asyncTakeLast(asyncWrap([]))).toBe(undefined);
    });
  });

  describe('when iterable has values', () => {
    it('returns last value', async () => {
      expect(await asyncTakeLast(asyncWrap([1, 2, 3]))).toBe(3);
    });
  });
});
