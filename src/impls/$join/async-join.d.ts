/* @macrome
 * @generatedby /generate/generators/types/index.cjs
 * @generatedfrom ./$join.d.ts#1643820505044
 * This file is autogenerated. Please do not edit it directly.
 * When editing run `npx macrome watch` then change the file this is generated from.
 */
import { AsyncWrappable, AsyncIterableIterator } from '../../types/async-iterable';

declare function asyncJoin<T>(source: AsyncWrappable<AsyncWrappable<T>>): AsyncIterableIterator<T>;

export { asyncJoin };
