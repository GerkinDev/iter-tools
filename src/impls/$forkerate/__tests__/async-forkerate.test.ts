/* @macrome
 * @generatedby /generate/generators/impls/index.cjs
 * @generatedfrom ./$forkerate.test.ts#1643820505039
 * This file is autogenerated. Please do not edit it directly.
 * When editing run `npx macrome watch` then change the file this is generated from.
 */
import { asyncForkerate, asyncStartsWithSeq, asyncStr } from 'iter-tools-es';
import { asyncWrap, asyncUnwrap } from '../../../test/async-helpers.js';

describe('asyncForkerate', () => {
  describe('forkerator', () => {
    it('yields values from source', async () => {
      expect(await asyncUnwrap((await asyncForkerate(asyncWrap([1, 2, 3]))).asIterator())).toEqual([
        1,
        2,
        3,
      ]);
    });
  });

  describe('fork', () => {
    it('yields values including and after forkr.current', async () => {
      const forkr = await asyncForkerate(asyncWrap([1, 2, 3]));

      expect(await asyncUnwrap(forkr.fork())).toEqual([1, 2, 3]);
      expect(await asyncUnwrap(forkr.fork())).toEqual([1, 2, 3]);

      await forkr.advance();

      expect(await asyncUnwrap(forkr.fork())).toEqual([2, 3]);
      expect(await asyncUnwrap(forkr.fork())).toEqual([2, 3]);

      await forkr.advance();

      expect(await asyncUnwrap(forkr.fork())).toEqual([3]);
      expect(await asyncUnwrap(forkr.fork())).toEqual([3]);

      await forkr.advance();

      expect(await asyncUnwrap(forkr.fork())).toEqual([]);
      expect(await asyncUnwrap(forkr.fork())).toEqual([]);

      expect(await forkr.fork().next()).toEqual({ value: undefined, done: true });
    });
  });

  it('can be used to strip comments', async () => {
    expect(
      await asyncStr(
        (async function* stripComments(source) {
          let forkr = await asyncForkerate(source);

          while (true) {
            const isComment = await asyncStartsWithSeq('//', forkr.fork());

            while (!forkr.done && forkr.value !== '\n') {
              if (!isComment) yield forkr.value;
              forkr = await forkr.advance();
            }

            if (forkr.done) break;

            if (!isComment) yield '\n';
            forkr = await forkr.advance();
          }
        })('// comment\ncode'),
      ),
    ).toBe('code');
  });
});
