/* @macrome
 * @generatedby /generate/generators/impls/index.cjs
 * @generatedfrom ./$split-groups.test.ts#1643820505049
 * This file is autogenerated. Please do not edit it directly.
 * When editing run `npx macrome watch` then change the file this is generated from.
 */
import { splitGroups } from 'iter-tools-es';
import { wrap, unwrap, unwrapDeep } from '../../../test/helpers.js';

function identity<T>(value: T): T {
  return value;
}

describe('splitGroups', () => {
  describe('when source is empty', () => {
    it('yields no groups', () => {
      expect(unwrapDeep(splitGroups(identity, null))).toEqual([]);
      expect(unwrapDeep(splitGroups(identity, undefined))).toEqual([]);
      expect(unwrapDeep(splitGroups(identity, wrap([])))).toEqual([]);
    });
  });

  describe('when values from source cannot be grouped', () => {
    it('yields a group for each value', () => {
      expect(unwrapDeep(splitGroups((_: number, i: number) => i, wrap([0, 0, 0])))).toEqual([
        [0, [0]],
        [1, [0]],
        [2, [0]],
      ]);
    });
  });

  describe('when source contains subsequent values belonging to the same group', () => {
    it('coalesces values into groups', () => {
      const lowerCase = (value: string) => value.toLowerCase();
      expect(unwrapDeep(splitGroups(lowerCase, 'AaA'))).toEqual([['a', ['A', 'a', 'A']]]);
      expect(unwrapDeep(splitGroups(lowerCase, 'baA'))).toEqual([
        ['b', ['b']],
        ['a', ['a', 'A']],
      ]);
    });
  });

  describe('when getKey is omitted', () => {
    it('coalesces values into groups', () => {
      expect(unwrapDeep(splitGroups('aaa'))).toEqual([['a', ['a', 'a', 'a']]]);
      expect(unwrapDeep(splitGroups('bbabb'))).toEqual([
        ['b', ['b', 'b']],
        ['a', ['a']],
        ['b', ['b', 'b']],
      ]);
    });
  });

  describe('when groups are consumed out of order', () => {
    it('throws', () => {
      const iter = splitGroups(identity, 'AB');
      const [, As] = iter.next().value;
      const [, Bs] = iter.next().value;

      unwrap(Bs);

      expect(
        (() => {
          try {
            unwrap(As);
          } catch (e) {
            return e;
          }
        })(),
      ).toMatchSnapshot();
    });
  });
});
