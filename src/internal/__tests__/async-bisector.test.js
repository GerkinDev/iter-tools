/* @macrome
 * @generatedby /generate/generators/impls/index.cjs
 * @generatedfrom ./$bisector.test.js#1643820505084
 * This file is autogenerated. Please do not edit it directly.
 * When editing run `npx macrome watch` then change the file this is generated from.
 */
import { asyncWrap, asyncUnwrap } from '../../test/async-helpers.js';
import { AsyncBisector } from '../async-bisector.js';

async function* asyncTestStrategy(split, options, source) {
  let i = 0;
  for await (const value of source) {
    switch (++i) {
      case 1:
        yield value;
        break;
      case 2:
        yield split;
        yield value;
        return;
    }
  }
}

const asyncTestBisector = (source) => {
  return new AsyncBisector(source, asyncTestStrategy, {});
};

describe('AsyncBisector', () => {
  it('allows the first half to be skipped', async () => {
    const [, second] = asyncTestBisector(asyncWrap([1, 2, 3]));
    expect(await asyncUnwrap(second)).toEqual([2]);
  });

  it('throws if only the first half is taken', async () => {
    const splits = asyncTestBisector(asyncWrap([1, 2, 3]));
    splits.next();
    expect(() => splits.return()).toThrowErrorMatchingSnapshot();
  });

  it('throws when the second half is consumed before the first', async () => {
    const [first, second] = asyncTestBisector(asyncWrap([1, 2, 3]));
    expect(await asyncUnwrap(second)).toEqual([2]);

    expect(
      await (async () => {
        try {
          await asyncUnwrap(first);
        } catch (e) {
          return e;
        }
      })(),
    ).toMatchSnapshot();
  });
});
