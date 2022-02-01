/* @macrome
 * @generatedby /generate/generators/impls/index.cjs
 * @generatedfrom ./$split-on.test.ts#1643820505050
 * This file is autogenerated. Please do not edit it directly.
 * When editing run `npx macrome watch` then change the file this is generated from.
 */
import { splitOn } from 'iter-tools-es';
import { wrap, unwrapDeep } from '../../../test/helpers.js';

describe('splitOn', () => {
  it('should split between every value which is equal to the on argument', () => {
    expect(unwrapDeep(splitOn(null, wrap([1, null, 2, null, 3])))).toEqual([[1], [2], [3]]);
  });

  it('should throw when splits are consumed out of order', () => {
    const parts = splitOn(null, wrap([1, null, 2]));
    const a = parts.next().value;
    const b = parts.next().value;

    expect(
      (() => {
        try {
          unwrapDeep([b, a]);
        } catch (e) {
          return e;
        }
      })(),
    ).toMatchSnapshot();
  });

  it('should yield [] between two separators', () => {
    expect(unwrapDeep(splitOn(null, wrap([1, null, null, 3])))).toEqual([[1], [], [3]]);
  });

  it('should yield [], [] when only separator', () => {
    expect(unwrapDeep(splitOn(null, wrap([null])))).toEqual([[], []]);
  });

  it('passes through the empty iterable', () => {
    expect(unwrapDeep(splitOn(0, null))).toEqual([]);
  });

  describe('when same function is specified', () => {
    const same = (a: number, b: number) => Math.abs(a) === Math.abs(b);
    it('uses same value to do comparison', () => {
      expect(unwrapDeep(splitOn(same, 2, wrap([1, 2, 3])))).toEqual([[1], [3]]);
      expect(unwrapDeep(splitOn(() => false, 2, wrap([1, 2, 3])))).toEqual([[1, 2, 3]]);
    });
  });

  describe('when source is a string', () => {
    it('warns', () => {
      splitOn(null, 'abc');
      expect(console.warn).callsMatchSnapshot();
    });
  });
});
