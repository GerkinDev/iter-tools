/* @macrome
 * @generatedby /generate/generators/types/index.cjs
 * @generatedfrom ./$window-behind.d.ts#1643820505059
 * This file is autogenerated. Please do not edit it directly.
 * When editing run `npx macrome watch` then change the file this is generated from.
 */
import { AsyncWrappable, AsyncIterableIterator } from '../../types/async-iterable';
import { IterableIterator as SyncIterableIterator } from '../../types/iterable';

declare function asyncWindowBehind<T, Filler = undefined>(
  opts: {
    readonly filler?: Filler;
  },
  size: number,
  source: AsyncWrappable<T>,
): AsyncIterableIterator<SyncIterableIterator<T | Filler>>;

declare function asyncWindowBehind<T>(
  size: number,
  source: AsyncWrappable<T>,
): AsyncIterableIterator<SyncIterableIterator<T | undefined>>;

declare function asyncWindowBehind(
  opts: {
    readonly filler: any;
  },
  size: number,
): <T>(source: AsyncWrappable<T>) => AsyncIterableIterator<SyncIterableIterator<T>>;

declare function asyncWindowBehind(
  size: number,
): <T>(source: AsyncWrappable<T>) => AsyncIterableIterator<SyncIterableIterator<T | undefined>>;

export { asyncWindowBehind };
