/* @macrome
 * @generatedby /generate/generators/types/index.cjs
 * @generatedfrom ./$split-on-any.d.ts#1643820505049
 * This file is autogenerated. Please do not edit it directly.
 * When editing run `npx macrome watch` then change the file this is generated from.
 */
import { AsyncWrappable, AsyncIterableIterator } from '../../types/async-iterable';

declare function asyncSplitOnAny(
  same: (a: any, b: any) => boolean,
  separatorValues: any,
): <T>(source: AsyncWrappable<T>) => AsyncIterableIterator<AsyncIterableIterator<T>>;

declare function asyncSplitOnAny<T>(
  same: (a: any, b: any) => boolean,
  separatorValues: any,
  source: AsyncWrappable<T>,
): AsyncIterableIterator<AsyncIterableIterator<T>>;

declare function asyncSplitOnAny<T>(
  separatorValues: any,
  source: AsyncWrappable<T>,
): AsyncIterableIterator<AsyncIterableIterator<T>>;

export { asyncSplitOnAny };
