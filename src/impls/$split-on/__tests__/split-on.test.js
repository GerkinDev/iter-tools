/**
 * @generated-from ./$split-on.test.js
 * This file is autogenerated from a template. Please do not edit it directly.
 * To rebuild it from its template use the command
 * > npm run generate
 * More information can be found in CONTRIBUTING.md
 */

import { splitOn } from '@iter-tools/es';
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

  describe('when source is a string', () => {
    it('warns', () => {
      splitOn(null, 'abc');
      expect(console.warn).callsMatchSnapshot();
    });
  });
});
