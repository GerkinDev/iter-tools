/* @macrome
 * @generatedby /generate/generators/impls/index.cjs
 * @generatedfrom ./$append.test.ts#1643820505028
 * This file is autogenerated. Please do not edit it directly.
 * When editing run `npx macrome watch` then change the file this is generated from.
 */
import { append } from 'iter-tools-es';
import { wrap, unwrap } from '../../../test/helpers.js';

describe('append', () => {
  describe('when source is empty', () => {
    it('yields the specified value', () => {
      expect(unwrap(append(1, null))).toEqual([1]);
      expect(unwrap(append(1, undefined))).toEqual([1]);
      expect(unwrap(append(1, wrap([])))).toEqual([1]);
    });
  });

  describe('when source has values', () => {
    it('yields values from source then the specified value', () => {
      expect(unwrap(append(3, wrap([1, 2])))).toEqual([1, 2, 3]);
    });
  });
});
