/* @macrome
 * @generatedby /generate/generators/impls/index.cjs
 * @generatedfrom ./$tap.test.ts#1643820505057
 * This file is autogenerated. Please do not edit it directly.
 * When editing run `npx macrome watch` then change the file this is generated from.
 */
import { asyncTap } from 'iter-tools-es';
import { asyncWrap, asyncUnwrap } from '../../../test/async-helpers.js';

describe('asyncTap', () => {
  describe('when source is empty', () => {
    it('yields no values', async () => {
      const func = jest.fn((value: any) => value * 2);
      expect(await asyncUnwrap(asyncTap(func, null))).toEqual([]);
      expect(await asyncUnwrap(asyncTap(func, undefined))).toEqual([]);
      expect(await asyncUnwrap(asyncTap(func, asyncWrap([])))).toEqual([]);
      expect(func.mock.calls).toEqual([]);
    });
  });

  describe('when source has values', () => {
    it('returns func(value, i) for each value in source', async () => {
      const func: (value: number, i: number) => number = jest.fn((value, i) => value + i);
      expect(await asyncUnwrap(asyncTap(func, asyncWrap([1, 2, 3])))).toEqual([1, 2, 3]);
      expect((func as any).mock.calls).toEqual([
        [1, 0],
        [2, 1],
        [3, 2],
      ]);
    });
  });

  it('can take an async func', async () => {
    expect(await asyncUnwrap(asyncTap(async (value) => value * 2, asyncWrap([1, 2, 3])))).toEqual([
      1,
      2,
      3,
    ]);
  });
});
