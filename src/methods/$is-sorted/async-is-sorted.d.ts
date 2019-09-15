/**
 * @generated-from ./$is-sorted.d.ts
 * This file is autogenerated from a template. Please do not edit it directly.
 * To rebuild it from its template use the command
 * > npm run generate
 * More information can be found in CONTRIBUTING.md
 */

import { AsyncInputIterable, AsyncMaybePromise } from '../../internal/async-iterable';
declare function asyncIsSorted(iterable: AsyncInputIterable<any>): AsyncMaybePromise<boolean>;
declare function asyncIsSorted<T = any>(
  comparator: (a: T, b: T) => number,
  iterable: AsyncInputIterable<T>,
): AsyncMaybePromise<boolean>;
export default asyncIsSorted;