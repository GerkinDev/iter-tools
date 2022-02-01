/* @macrome
 * @generatedby /generate/generators/impls/index.cjs
 * @generatedfrom ./$round-robin.test.ts#1643820505047
 * This file is autogenerated. Please do not edit it directly.
 * When editing run `npx macrome watch` then change the file this is generated from.
 */
import { asyncRoundRobin } from 'iter-tools-es';
import { asyncWrap, asyncUnwrap } from '../../../test/async-helpers.js';

describe('asyncRoundRobin', () => {
  it('starts at 0 with step 1 if given no config arguments', async () => {
    const iter = asyncRoundRobin(asyncWrap([1, 4, 7]), asyncWrap([2, 5, 8]), asyncWrap([3, 6, 9]));
    expect(await asyncUnwrap(iter)).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9]);
  });

  it('can have a configurable step', async () => {
    const iter = asyncRoundRobin(
      2,
      asyncWrap([1, 4, 7]),
      asyncWrap([3, 6, 9]),
      asyncWrap([2, 5, 8]),
    );
    expect(await asyncUnwrap(iter)).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9]);
  });

  it('can have a configurable start and step', async () => {
    const iter = asyncRoundRobin(
      1,
      2,
      asyncWrap([2, 5, 8]),
      asyncWrap([1, 4, 7]),
      asyncWrap([3, 6, 9]),
    );
    expect(await asyncUnwrap(iter)).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9]);
  });

  it('can have start and step specified in a config object', async () => {
    const iter = asyncRoundRobin(
      { start: 1, step: 1 },
      asyncWrap([3, 6, 9]),
      asyncWrap([1, 4, 7]),
      asyncWrap([2, 5, 8]),
    );
    expect(await asyncUnwrap(iter)).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9]);
  });

  it('works with input iterables of different lengths', async () => {
    const iter = asyncRoundRobin(asyncWrap([]), asyncWrap([1, 3]), asyncWrap([2]));
    expect(await asyncUnwrap(iter)).toEqual([1, 2, 3]);
  });

  describe('when step is invalid', () => {
    it('throws', async () => {
      expect(() => asyncRoundRobin({ step: 0 }, asyncWrap([]))).toThrowErrorMatchingSnapshot();
    });
  });
});
