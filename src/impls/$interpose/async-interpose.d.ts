/* @macrome
 * @generatedby /generate/generators/types/index.cjs
 * @generatedfrom ./$interpose.d.ts#1643820505043
 * This file is autogenerated. Please do not edit it directly.
 * When editing run `npx macrome watch` then change the file this is generated from.
 */
import { AsyncWrappable, AsyncIterableIterator } from '../../types/async-iterable';

declare function asyncInterpose<V>(
  value: V,
): <T>(source: AsyncWrappable<T>) => AsyncIterableIterator<T | V>;

declare function asyncInterpose<V, T>(
  value: V,
  source: AsyncWrappable<T>,
): AsyncIterableIterator<T | V>;

export { asyncInterpose };
