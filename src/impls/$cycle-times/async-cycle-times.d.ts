/* @macrome
 * @generatedby /generate/generators/types/index.cjs
 * @generatedfrom ./$cycle-times.d.ts#1643820505031
 * This file is autogenerated. Please do not edit it directly.
 * When editing run `npx macrome watch` then change the file this is generated from.
 */
import { AsyncWrappable, AsyncIterableIterator } from '../../types/async-iterable';

declare function asyncCycleTimes<T>(n: number, source: AsyncWrappable<T>): AsyncIterableIterator<T>;

declare function asyncCycleTimes<T>(
  n: number,
): (source: AsyncWrappable<T>) => AsyncIterableIterator<T>;

export { asyncCycleTimes };
